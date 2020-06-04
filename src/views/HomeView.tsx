import React from 'react';

import { AOSSection } from '@/components';
import { BackgroundCanvas } from '@/containers';
import { HomeContainer } from '@/containers/home';

const HomeView = () => (
  <AOSSection id="HomeView">
    <BackgroundCanvas />
    <HomeContainer />
  </AOSSection>
);

export default HomeView;
