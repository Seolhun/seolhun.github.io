import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import { Button } from '@seolhun/localize-components-atomic';

import AOS from 'aos';
import AOSSection from '../components/aos';

const HomeView = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <AOSSection id='HomeView' data-aos='fade-in'>
      HomeView
      <div>
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
  );
};

export default HomeView;
