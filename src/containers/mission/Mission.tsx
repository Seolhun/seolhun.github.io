import React from 'react';

import styled from '@emotion/styled';

import { Typo } from '@seolhun/localize-components-atomic';
import siteMetadata from 'siteMetadata';

const MissionWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

export const Mission = () => (
  <MissionWrapper>
    <Typo type="h2">Mission</Typo>
    <Typo type="p">{siteMetadata.mission}</Typo>
  </MissionWrapper>
);

export default Mission;
