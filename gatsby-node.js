const path = require('path');
const _ = require('lodash');
const config = require('./config/SiteConfig').default;

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
  const hasFrontMatter = _.has(node, 'frontmatter');
  const hasTitle = _.has(node.frontmatter, 'title');

  if (isMarkdown && hasFrontMatter && hasTitle) {
    const slug = `${_.kebabCase(node.frontmatter.title)}`;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

const getPostsByType = (posts, classificationType) => {
  const postsByType = {};
  posts.forEach(({ node }) => {
    const nodeClassificationType = node.frontmatter[classificationType];
    if (nodeClassificationType) {
      if (Array.isArray(nodeClassificationType)) {
        nodeClassificationType.forEach((name) => {
          if (!_.has(postsByType, name)) {
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

const createClassificationPages = ({ createPage, posts, postsPerPage, numPages }) => {
  const classifications = [
    {
      singularName: 'category',
      pluralName: 'categories',
      template: {
        part: path.resolve(`src/templates/Category.tsx`),
        all: path.resolve(`src/templates/AllCategory.tsx`),
      },
      postsByClassificationNames: getPostsByType(posts, 'category'),
    },
    {
      singularName: 'tags',
      pluralName: 'tags',
      template: {
        part: path.resolve(`src/templates/Tag.tsx`),
        all: path.resolve(`src/templates/AllTag.tsx`),
      },
      postsByClassificationNames: getPostsByType(posts, 'tags'),
    },
  ];

  classifications.forEach((classification) => {
    const names = Object.keys(classification.postsByClassificationNames);

    createPage({
      path: _.kebabCase(`/${classification.pluralName}`),
      component: classification.template.all,
      context: {
        [`${classification.pluralName}`]: names.sort(),
      },
    });

    names.forEach((name) => {
      const postsByName = classification.postsByClassificationNames[name];
      createPage({
        path: `/${classification.pluralName}/${_.kebabCase(name)}`,
        component: classification.template.part,
        context: {
          posts: postsByName,
          [`${classification.singularName}Name`]: name,
        },
      });
    });
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/Post.tsx`);
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 10000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              author
              subTitle
              banner
              category
              tags
            }
            timeToRead
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = config.POST_PER_PAGE;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({
      length: numPages,
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/contents` : `/contents/${i + 1}`,
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
        path: `/contents/${_.kebabCase(node.frontmatter.title)}`,
        component: postTemplate,
        context: {
          slug: _.kebabCase(node.frontmatter.title),
          prev,
          next,
        },
      });
    });
  });
};
