import React, { useEffect } from 'react';
import { Link, StaticQuery } from 'gatsby';

import { Button } from '@seolhun/localize-components-atomic';
import AOS from 'aos';

import AOSSection from '@/components/aos';

const ContactView = () => {
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
        <AOSSection id='ContactView'>
          <div
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <Link to='/contact'>
              <Button>Contact</Button>
            </Link>
            <Link to='/contents'>
              <Button>Contents</Button>
            </Link>
            <Link to='/tags'>
              <Button>Tags</Button>
            </Link>
            <Link to='/categories'>
              <Button>Categories</Button>
            </Link>
          </div>

        </AOSSection>
      )}
    />
  );
};

const query = graphql`
  query ContactViewQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

export default ContactView;
