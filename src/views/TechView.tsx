import React, { useEffect } from 'react';
import { StaticQuery } from 'gatsby';

import AOS from 'aos';

import AOSSection from '@/components/aos';
import { TechContainer } from '@/containers';

const TechView = () => {
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
        <AOSSection id='TechView' verticalAlign='flex-start'>
          <TechContainer />
        </AOSSection>
      )}
    />
  );
};

const query = graphql`
  query TechViewQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

export default TechView;
