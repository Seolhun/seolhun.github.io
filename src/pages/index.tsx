import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '@/containers';

import { SEO } from '@/components';
import HomeView from '@/views/HomeView';
import LatestContentsView from '@/views/LatestContentsView';

import siteMetadata from '../../siteMetadata';

const IndexPage = () => (
  <>
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={siteMetadata.siteTitle} />
      <HomeView />
      <LatestContentsView />
    </Layout>
  </>
);

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
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
          timeToRead
        }
      }
    }
  }
`;

export default IndexPage;
