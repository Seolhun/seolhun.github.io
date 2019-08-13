import React from 'react';

import styled from '@emotion/styled';

import TechBody from './TechBody';
import TechHead from './TechHead';
import TechFooter from './TechFooter';

const TechWrapper = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});

const TechContainer = () => {
  return (
    <TechWrapper>
      <TechHead />
      <TechBody />
      <TechFooter />
    </TechWrapper>
  );
};

export default TechContainer;
