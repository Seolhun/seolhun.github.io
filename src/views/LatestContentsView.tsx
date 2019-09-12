import { StaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AOS from 'aos';

import AOSSection from '@/components/aos';
import { ContentItemList } from '@/containers/content';
import { Edge } from '@/models';
import styled from '@emotion/styled';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

const StyledTitle = styled.h2<any, ILocalizeTheme>(({ theme }) => {
  return {
    color: theme.primaryColor,
    fontSize: theme.fonts.SIZE.h2,
    padding: '0 0 50px',
  };
});

const TechView = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  });

  return (
    <StaticQuery
      query={LatestQuery}
      render={({ allMarkdownRemark }) => {
        const { t } = useTranslation();

        return (
          <AOSSection id='Lastest' verticalAlign='flex-start'>
            <StyledTitle>{t('content:title')}</StyledTitle>
            <ContentItemList
              items={allMarkdownRemark.edges.map(({ node }: Edge) => {
                return {
                  ...node,
                };
              })}
            />
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

export default TechView;
