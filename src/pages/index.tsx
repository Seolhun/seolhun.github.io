import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Layout,
  LatestContentList,
  BackgroundCanvas,
  ProfileMission,
} from '@/containers';
import { SEO } from '@/components';
import { AllMarkdownRemark } from '@/models';

import { Container, Row, Col } from '@seolhun/localize-components';
import siteMetadata from '../../siteMetadata';

interface IndexPageProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark
  }
}

const IndexPage:React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO isPostSEO={false} />
    <Helmet title={siteMetadata.siteTitle} />
    <Container>
      <BackgroundCanvas />
      <Row>
        <Col xs={24}>
          <ProfileMission />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <LatestContentList
            allMarkdownRemark={data.allMarkdownRemark}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export const IndexQuery = graphql`
  query($skip: Int = 0, $limit: Int = 5) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { date: { lt: "2020-06-08T00:00:00.000Z" } } }
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
