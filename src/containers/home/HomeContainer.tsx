import React from 'react';

import styled from '@emotion/styled';

import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter';
import HomeHead from './HomeHead';

const HomeWrapper = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',

    '& > *:not(:last-of-type)': {
      marginBottom: '20px',
    },
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
