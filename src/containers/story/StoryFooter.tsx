import React from 'react';

import styled from '@emotion/styled';

import SNSButtons from '../sns-buttons';

const TechFooterWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',
  }
})

const StoryFooter = () => {
  return (
    <TechFooterWrapper
      data-aos='fade-up'
      data-aos-delay='300'
    >
      <SNSButtons />
    </TechFooterWrapper>
  );
}

export default StoryFooter;
