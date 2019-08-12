import React, { useEffect } from 'react';
import { StaticQuery } from 'gatsby';

import AOS from 'aos';
import AOSSection from '../components/aos';
import {
  SNSButtons
} from '../containers';

const HomeView = () => {
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
        <AOSSection
          id='HomeView'
          headerImgSrc={"https://maxcdn.icons8.com/app/uploads/2016/03/material-1-1024x576.jpg"}
        >
          <div
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <SNSButtons />
          </div>
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
