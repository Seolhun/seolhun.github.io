import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { Container, Card } from '@seolhun/localize-components';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

import {
  Article,
  Pagination,
  PostHeader,
  SEO,
} from '@/components';
import { Layout, Profile } from '@/containers';
import Data from '@/models/Data';

import siteMetadata from '../../siteMetadata';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

const SHCard = styled(Card)<{}, ILocalizeTheme>(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  textDecoration: 'none',

  '& + &': {
    marginTop: '1rem',
  },
}));

const PaginationWrapper = styled.div<{}, ILocalizeTheme>(() => ({
  marginTop: '3rem',
}));

export const BlogPage = ({ pageContext, data }: Props) => {
  const { currentPage, totalPages } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`Blogs | ${siteMetadata.siteTitle}`} />
      <Container>
        <PostHeader>
          <Profile />
        </PostHeader>
        {edges.map((post) => (
          <SHCard key={post.node.fields.slug}>
            <Article
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              slug={post.node.fields.slug}
              timeToRead={post.node.timeToRead}
              title={post.node.frontmatter.title}
              banner={post.node.frontmatter.banner}
              category={post.node.frontmatter.category}
              subTitle={post.node.frontmatter.subTitle}
            />
          </SHCard>
        ))}
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            url="contents"
          />
        </PaginationWrapper>
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
      filter: { frontmatter: { date: { lt: "2020-06-08T00:00:00.000Z" } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 165)
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
`;

export default BlogPage;
