import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '@/containers';
import config from 'siteMetadata';

import { SEO } from '@/components';
import HomeView from '@/views/HomeView';
import LatestContentsView from '@/views/LatestContentsView';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO isPostSEO={false} />
        <Helmet title={config.siteTitle} />
        <HomeView />
        <LatestContentsView />
      </Layout>
    </>
  );
};

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
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
          }
          excerpt(pruneLength: 165)
          timeToRead
        }
      }
    }
  }
`;

export default IndexPage;
