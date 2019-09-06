import { graphql, Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import styled from '@emotion/styled';
import { kebabCase } from 'lodash';

import { Container, Content, Header, PrevNext, SectionTitle, SEO } from '@/components';
import { Layout } from '@/containers';
import PathContext from '@/models/PathContext';
import Post from '@/models/Post';
import config from 'config/SiteConfig';

import '@/utils/prismjs-theme.css';

const PostContent = styled.div`
  margin-top: 4rem;
`;

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

const PostPage = ({ data, pathContext }: Props) => {
  const { prev, next } = pathContext;
  const post = data.markdownRemark;

  return (
    <Layout>
      {post && (
        <>
          <SEO postPath={post.fields.slug} postNode={post} postSEO />
          <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
          <Header banner={post.frontmatter.banner}>
            <Link to='/'>{config.siteTitle}</Link>
            <SectionTitle>{post.frontmatter.title}</SectionTitle>
            <div>
              {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}
              <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>
                {post.frontmatter.category}
              </Link>
            </div>
          </Header>
          <Container>
            <Content>
              <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
              {post.frontmatter.tags && (
                <div>
                  Tags: &#160;
                  {post.frontmatter.tags.map((tag, i) => (
                    <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                      <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                    </Link>
                  ))}
                </div>
              )}
              <PrevNext prev={prev} next={next} />
            </Content>
          </Container>
        </>
      )}
    </Layout>
  );
};

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
      }
      timeToRead
    }
  }
`;

export default PostPage;
