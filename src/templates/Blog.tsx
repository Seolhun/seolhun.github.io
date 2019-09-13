import { graphql, Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';

import { Article, Content, Pagination, PostHeader } from '@/components';
import { Layout, Profile } from '@/containers';
import Data from '@/models/Data';
import SiteConfig from 'config/SiteConfig';

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
      <Helmet title={`Blog | ${SiteConfig.siteTitle}`} />
      <PostHeader>
        <Profile />
      </PostHeader>
      <Container>
        <Row>
          <Col xs={24}>
            <Content>
              {edges.map((post) => (
                <Article
                  key={post.node.fields.slug}
                  title={post.node.frontmatter.title}
                  date={post.node.frontmatter.date}
                  excerpt={post.node.excerpt}
                  timeToRead={post.node.timeToRead}
                  slug={post.node.fields.slug}
                  category={post.node.frontmatter.category}
                  banner={post.node.frontmatter.banner}
                />
              ))}
              <Pagination currentPage={currentPage} totalPages={totalPages} url={'contents'} />
            </Content>
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
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;

export default BlogPage;
