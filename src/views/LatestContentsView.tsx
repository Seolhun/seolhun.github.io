import { Link, StaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Col, Row } from '@seolhun/localize-components';
import { Button, Typo } from '@seolhun/localize-components-atomic';

import AOSSection from '@/components/aos';
import { ContentItemList } from '@/containers/content';
import { Edge } from '@/models';

const LatestContentsView = () => {
  return (
    <StaticQuery
      query={LatestQuery}
      render={({ allMarkdownRemark }) => {
        const { t } = useTranslation();
        return (
          <AOSSection id='Lastest' verticalAlign='flex-start'>
            <Typo type='h1' weight={600} css={{ marginBottom: '50px' }}>
              {t('content:title')}
            </Typo>
            <ContentItemList
              items={allMarkdownRemark.edges.map(({ node }: Edge) => {
                return {
                  ...node,
                };
              })}
            />
            <Row data-aos='fade-up' css={{ marginTop: '30px' }}>
              <Col xs={24}>
                <Button>
                  <Link to={'/contents'}>{t('common:readMore')}</Link>
                </Button>
              </Col>
            </Row>
          </AOSSection>
        );
      }}
    />
  );
};

export const LatestQuery = graphql`
  query($skip: Int = 0, $limit: Int = 5) {
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

export default LatestContentsView;