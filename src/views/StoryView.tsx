import { StaticQuery } from 'gatsby';
import React, { useEffect } from 'react';

import AOS from 'aos';

import AOSSection from '@/components/aos';
import { StoryContainer } from '@/containers';

const StoryView = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  });

  return (
    <StaticQuery
      query={StoryQuery}
      render={(data) => {
        return (
          <AOSSection id='StoryView' verticalAlign='flex-start'>
            <StoryContainer />
          </AOSSection>
        );
      }}
    />
  );
};

export const StoryQuery = graphql`
  query($skip: Int = 0, $limit: Int = 5) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      category: "story"
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

export default StoryView;
