import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';

import { Article, Pagination, PostHeader, SEO } from '@/components';
import { Layout, Profile } from '@/containers';
import Data from '@/models/Data';
import siteMetadata from 'siteMetadata';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

export const BlogPage = ({ pageContext, data }: Props) => {
  const { currentPage, totalPages } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`Blogs | ${siteMetadata.siteTitle}`} />
      <Container>
        <Row>
          <Col xs={24}>
            <PostHeader>
              <Profile />
            </PostHeader>
          </Col>
        </Row>
        <Row flexDirection="column">
          {edges.map((post) => (
            <Col xs={24} key={post.node.fields.slug}>
              <Article
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.excerpt}
                timeToRead={post.node.timeToRead}
                slug={post.node.fields.slug}
                category={post.node.frontmatter.category}
                banner={post.node.frontmatter.banner}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={24}>
            <Pagination currentPage={currentPage} totalPages={totalPages} url={'contents'} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { date: { lt: "2019-09-30T00:00:00.000Z" } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            category
            tags
            banner
          }
          excerpt(pruneLength: 165)
          timeToRead
        }
      }
    }
  }
`;

export default BlogPage;
