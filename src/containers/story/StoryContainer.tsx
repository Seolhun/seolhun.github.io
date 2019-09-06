import React from 'react';

import styled from '@emotion/styled';

import StoryBody from './StoryBody';
import StoryFooter from './StoryFooter';
import StoryHead from './StoryHead';

const StoryWrapper = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});

const StoryContainer = () => {
  return (
    <StoryWrapper>
      <StoryHead />
      <StoryBody />
      <StoryFooter />
    </StoryWrapper>
  );
};

export default StoryContainer;
