import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout, LatestContents } from '@/containers';

import { SEO } from '@/components';
import HomeView from '@/views/HomeView';
import { AllMarkdownRemark } from '@/models';

import siteMetadata from '../../siteMetadata';

interface IndexPageProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark
  }
}

const IndexPage:React.FC<IndexPageProps> = ({ data }) => (
  <>
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={siteMetadata.siteTitle} />
      <HomeView />
      <LatestContents allMarkdownRemark={data.allMarkdownRemark} />
    </Layout>
  </>
);

export const IndexQuery = graphql`
  query($skip: Int = 0, $limit: Int = 5) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { date: { lt: "2019-09-30T00:00:00.000Z" } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
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

export default IndexPage;
