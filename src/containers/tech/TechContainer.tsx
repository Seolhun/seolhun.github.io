import React from 'react';

import styled from '@emotion/styled';

import TechBody from './TechBody';
import TechFooter from './TechFooter';
import TechHead from './TechHead';

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
