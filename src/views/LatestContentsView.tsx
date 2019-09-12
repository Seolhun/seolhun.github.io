import { StaticQuery } from 'gatsby';
import React, { useEffect } from 'react';

import AOS from 'aos';

import AOSSection from '@/components/aos';
import { ContentItemList } from '@/containers/content';

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
        return (
          <AOSSection id='Lastest' verticalAlign='flex-start'>
            <ContentItemList
              items={allMarkdownRemark.edges.map((edge: any) => ({
                ...edge.node.frontmatter,
                timeToRead: edge.node.timeToRead,
              }))}
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
            date(formatString: "DD.MM.YYYY")
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
