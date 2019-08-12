import React from 'react';

import styled from '@emotion/styled';

import KeyResults from '../key-results';

const HomeBodyWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',

    marginTop: '10px',
  }
})

const HomeBody = () => {
  return (
    <HomeBodyWrapper
      data-aos='fade-up'
      data-aos-delay='250'
    >
      <KeyResults />
    </HomeBodyWrapper>
  );
}

export default HomeBody;
