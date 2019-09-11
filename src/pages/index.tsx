import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Layout } from '@/containers';
import config from 'config/SiteConfig';

import BackgroundCanvas, { useCanvas } from '@/containers/canvases';
import HomeView from '@/views/HomeView';
import LatestContentsView from '@/views/LatestContentsView';

const IndexPage = () => {
  const [cavasRef] = useCanvas();

  return (
    <Layout>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <BackgroundCanvas ref={cavasRef} />
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
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;

export default IndexPage;
