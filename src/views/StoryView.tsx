import React, { useEffect } from 'react';
import { StaticQuery } from 'gatsby';

import AOS from 'aos';

import AOSSection from '@/components/aos';
import { StoryContainer } from '@/containers';

const StoryView = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    }
  });

  return (
    <StaticQuery
      query={query}
      render={() => (
        <AOSSection id='StoryView'>
          <StoryContainer />
        </AOSSection>
      )}
    />
  );
};

const query = graphql`
  query StoryViewQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

export default StoryView;
