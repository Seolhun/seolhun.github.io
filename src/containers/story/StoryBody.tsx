import React from 'react';

import styled from '@emotion/styled';

import KeyResults from '../key-results';

const StoryBodyWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',

    marginTop: '10px',
  }
})

const StoryBody = () => {
  return (
    <StoryBodyWrapper
      data-aos='fade-up'
      data-aos-delay='250'
    >
      <KeyResults />
    </StoryBodyWrapper>
  );
}

export default StoryBody;
