import React from 'react';

import styled from '@emotion/styled';

import SNSButtons from '../sns-buttons';

const HomeFooterWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',
  }
})

const HomeFooter = () => {
  return (
    <HomeFooterWrapper
      data-aos='fade-up'
      data-aos-delay='300'
    >
      <SNSButtons />
    </HomeFooterWrapper>
  );
}

export default HomeFooter;
