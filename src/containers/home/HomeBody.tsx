import React from 'react';

import styled from '@emotion/styled';

const HomeBodyWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',

    marginTop: '10px',
  };
});

const HomeBody = () => {
  return (
    <HomeBodyWrapper data-aos='fade-up' data-aos-delay='250'>
      메일 깃허브 페이스북 트위터 링크드인
    </HomeBodyWrapper>
  );
};

export default HomeBody;
