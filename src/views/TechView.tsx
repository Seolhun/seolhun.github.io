import React, { useEffect } from "react";

import AOS from 'aos';
import AOSSection from '../components/aos';

const TechView = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <AOSSection
      id='TechView'
      data-aos='fade-in'
      headerImgSrc={"https://maxcdn.icons8.com/app/uploads/2016/03/material-1-1024x576.jpg"}
    >
      <div
        data-aos='fade-up'
        data-aos-delay="350"
      >
        TechView
      </div>
    </AOSSection>
  );
};

export default TechView;
