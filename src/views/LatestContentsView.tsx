import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { Col, Row } from '@seolhun/localize-components';
import { Button, Typo } from '@seolhun/localize-components-atomic';

import { AOSSection } from '@/components/aos';
import { ContentItemList } from '@/containers/content';
import { Edge } from '@/models';

// filter: { frontmatter: { date: { lt: "2019-01-30T00:00:00.000Z" } } }
// filter: {date: {lt: "2019-01-30T00:00:00.000Z"}}
export const LatestQuery = graphql`
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

const LatestContentsView = () => {
  const { t } = useTranslation();
  const { allMarkdownRemark } = useStaticQuery(LatestQuery);

  return (
    <AOSSection id="Lastest" verticalAlign="flex-start">
      <Typo type="h1" weight={600} css={{ marginBottom: '50px' }}>
        {t('content:title')}
      </Typo>
      <ContentItemList
        items={allMarkdownRemark.edges.map(({ node }: Edge) => ({
          ...node,
        }))}
      />
      <Row data-aos="fade-up" css={{ marginTop: '30px' }}>
        <Col xs={24}>
          <Button>
            <Link to="/contents">{t('common:readMore')}</Link>
          </Button>
        </Col>
      </Row>
    </AOSSection>
  );
};

export default LatestContentsView;
