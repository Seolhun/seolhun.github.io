import React from 'react';

import styled from '@emotion/styled';

import HomeBody from './HomeBody';
import HomeHead from './HomeHead';
import HomeFooter from './HomeFooter';

const HomeWrapper = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
  };
});

const HomeContainer = () => {
  return (
    <HomeWrapper>
      <HomeHead />
      <HomeBody />
      <HomeFooter />
    </HomeWrapper>
  );
};

export default HomeContainer;
