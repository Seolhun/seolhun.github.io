import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Layout } from '@/containers';
import config from 'config/SiteConfig';

import HomeView from '@/views/HomeView';
import LatestContentsView from '@/views/LatestContentsView';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <HomeView />
      <LatestContentsView />
    </Layout>
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
          timeToRead
        }
      }
    }
  }
`;

export default IndexPage;
