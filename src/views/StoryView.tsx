import React, { useEffect } from "react";

import AOS from 'aos';
import AOSSection from '../components/aos';

const StoryView = () => {
  useEffect(() => {
    AOS.init();
  })

  return (
    <AOSSection id='StoryView' data-aos='fade-in'>
      StoryView
    </AOSSection>
  );
};

export default StoryView;
