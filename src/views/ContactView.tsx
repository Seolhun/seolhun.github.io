import React, { useEffect } from "react";

import AOS from 'aos';
import AOSSection from '../components/aos';

const ContactView = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <AOSSection id='ContactView' data-aos='fade-in'>
      ContactView
    </AOSSection>
  );
};

export default ContactView;
