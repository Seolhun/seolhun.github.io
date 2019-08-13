import React, { useEffect } from 'react';
import { StaticQuery } from 'gatsby';

import AOS from 'aos';

import { AOSSection } from '@/components';
import HomeContainer from '@/containers/home';

const HomeView = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  });

  return (
    <StaticQuery
      query={query}
      render={() => (
        <AOSSection id='HomeView'>
          <HomeContainer />
        </AOSSection>
      )}
    />
  );
};

const query = graphql`
  query HomeViewQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

export default HomeView;
