import React from 'react';

import styled from '@emotion/styled';

import {
  Profile,
} from '@/components';

import {
  Mission
} from '@/containers';

import SiteConfig from 'config/SiteConfig';

const TechHeadWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',

    '& > span:first-of-type': {
      marginRight: '20px',
    }
  }
})

const TechHead = () => {
  return (
    <TechHeadWrapper
      data-aos='fade-up'
      data-aos-delay='200'
    >
      <Profile src={SiteConfig.githubOwnerImage} />
      <Mission />
    </TechHeadWrapper>
  );
}

export default TechHead;
