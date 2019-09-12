import React from 'react';

import styled from '@emotion/styled';

import { Typo } from '@seolhun/localize-components-atomic';
import SiteConfig from 'config/SiteConfig';

const MissionWrapper = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});

export const Mission = () => {
  return (
    <MissionWrapper>
      <Typo type='h2'>Mission</Typo>
      <Typo type='p'>{SiteConfig.mission}</Typo>
    </MissionWrapper>
  );
};

export default Mission;
