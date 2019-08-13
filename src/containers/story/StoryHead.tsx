import React from 'react';

import styled from '@emotion/styled';

import {
  Profile,
} from '@/components';
import {
  Mission
} from '@/containers';
import SiteConfig from 'config/SiteConfig';

const StoryHeadWrapper = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',

    '& > span:first-child': {
      marginRight: '20px',
    }
  }
})

const StoryHead = () => {
  return (
    <StoryHeadWrapper
      data-aos='fade-up'
      data-aos-delay='200'
    >
      <Profile src={SiteConfig.githubOwnerImage} />
      <Mission />
    </StoryHeadWrapper>
  );
}

export default StoryHead;
