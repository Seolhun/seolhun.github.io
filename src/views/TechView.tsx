import React, { useEffect } from "react";

import AOS from 'aos';
import AOSSection from '../components/aos';

const TechView = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <AOSSection id='TechView' data-aos='fade-in'>
      TechView
    </AOSSection>
  );
};

export default TechView;
