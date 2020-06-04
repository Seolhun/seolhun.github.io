import { StaticQuery } from 'gatsby';
import React from 'react';

import { AOSSection } from '@/components';
import { BackgroundCanvas } from '@/containers';
import { HomeContainer } from '@/containers/home';

const HomeView = () => {
  return (
    <StaticQuery
      query={query}
      render={() => (
        <AOSSection id="HomeView">
          <BackgroundCanvas />
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
