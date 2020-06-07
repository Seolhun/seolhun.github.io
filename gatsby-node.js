const path = require('path');
const ramda = require('ramda');
const kebabcase = require('lodash.kebabcase');
const siteMetadata = require('./siteMetadata');

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const isMarkdown = node.internal.type === 'MarkdownRemark';
  const hasFrontMatter = ramda.has('frontmatter', node);

  if (isMarkdown && hasFrontMatter) {
    const hasTitle = ramda.has('title', node.frontmatter);
    if (hasTitle) {
      const slug = `${kebabcase(node.frontmatter.title)}`;
      createNodeField({
        name: 'slug',
        value: slug,
        node,
      });
    }
  }
};

const getPostsByType = (posts, classificationType) => {
  const postsByType = {};
  posts.forEach(({ node }) => {
    const nodeClassificationType = node.frontmatter[classificationType];
    if (nodeClassificationType) {
      if (Array.isArray(nodeClassificationType)) {
        nodeClassificationType.forEach((name) => {
          if (!ramda.has(name, postsByType)) {
            postsByType[name] = [];
          }
          postsByType[name].push(node);
        });
      } else {
        const name = nodeClassificationType;
        if (!postsByType[name]) {
          postsByType[name] = [];
        }
        postsByType[name].push(node);
      }
    }
  });
  return postsByType;
};

const createClassificationPages = ({
  createPage,
  posts,
  // postsPerPage,
  // numPages,
}) => {
  const classifications = [
    {
      singularName: 'category',
      pluralName: 'categories',
      template: {
        part: path.resolve('src/templates/Category.tsx'),
        all: path.resolve('src/templates/AllCategories.tsx'),
      },
      postsByClassificationNames: getPostsByType(posts, 'category'),
    },
    {
      singularName: 'tags',
      pluralName: 'tags',
      template: {
        part: path.resolve('src/templates/Tag.tsx'),
        all: path.resolve('src/templates/AllTags.tsx'),
      },
      postsByClassificationNames: getPostsByType(posts, 'tags'),
    },
  ];
  classifications.forEach((classification) => {
    const names = Object.keys(classification.postsByClassificationNames);
    createPage({
      path: kebabcase(`/${classification.pluralName}`),
      component: classification.template.all,
      context: {
        [`${classification.pluralName}`]: names.sort(),
      },
    });
    names.forEach((name) => {
      const postsByName = classification.postsByClassificationNames[name];
      createPage({
        path: `/${classification.pluralName}/${kebabcase(name)}`,
        component: classification.template.part,
        context: {
          posts: postsByName,
          [`${classification.singularName}Name`]: name,
        },
      });
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/Post.tsx');
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              author
              banner
              category
              date(formatString: "YYYY.MM.DD")
              subTitle
              tags
              title
            }
            html
            id
            timeToRead
          }
        }
      }
    }
  `);
  if (result.errors) {
    return Promise.reject(result.errors);
  }
  const posts = result.data.allMarkdownRemark.edges;
  const postsPerPage = siteMetadata.POST_PER_PAGE;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/contents' : `/contents/${i + 1}`,
      component: path.resolve('./src/templates/Blog.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages: numPages,
        currentPage: i + 1,
      },
    });
  });
  createClassificationPages({
    createPage,
    posts,
    postsPerPage,
    numPages,
  });
  posts.forEach(({ node }, index) => {
    const next = index === 0 ? null : posts[index - 1].node;
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: `/contents/${kebabcase(node.frontmatter.title)}`,
      component: postTemplate,
      context: {
        slug: kebabcase(node.frontmatter.title),
        prev,
        next,
      },
    });
  });
  return result;
};
