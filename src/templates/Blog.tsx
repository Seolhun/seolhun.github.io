import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import SiteConfig from 'config/SiteConfig';
import {
  Container,
  Header,
  Article,
  Pagination,
  SectionTitle,
  Content,
} from '@/components';
import { Layout } from '@/containers';
import Data from '@/models/Data';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

const BlogPage = ({ pageContext, data }: Props) => {
  const { currentPage, totalPages } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title={`Blog | ${SiteConfig.siteTitle}`} />
      <Header>
        <Link to='/'>{SiteConfig.siteTitle}</Link>
        <SectionTitle>Latest stories ({totalCount})</SectionTitle>
      </Header>
      <Container>
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            url={'contents'}
          />
        </Content>
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
            date(formatString: "DD.MM.YYYY")
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
