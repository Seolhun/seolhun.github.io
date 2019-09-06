import React from 'react';

import styled from '@emotion/styled';

import Button from '@seolhun/localize-components-button';
import SNSButtons from '../sns-buttons';

const HomeFooterWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
});

const HomeFooter = () => {
  return (
    <HomeFooterWrapper data-aos='fade-up' data-aos-delay='300'>
      {/* <SNSButtons /> */}
      <Button mainColor={'white'}>더 보기</Button>
    </HomeFooterWrapper>
  );
};

export default HomeFooter;
