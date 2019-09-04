import React from 'react';

import styled from '@emotion/styled';


const TechBodyWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',

    marginTop: '10px',
  }
})

const TechBody = () => {
  return (
    <TechBodyWrapper
      data-aos='fade-up'
      data-aos-delay='250'
    >
    </TechBodyWrapper>
  );
}

export default TechBody;
