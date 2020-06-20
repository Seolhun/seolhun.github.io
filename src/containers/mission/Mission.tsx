import React from 'react';

import styled from '@emotion/styled';

import { Typo } from '@seolhun/localize-components-atomic';

import siteMetadata from '../../../siteMetadata';

const MissionWrapper = styled.div(() => ({
  textAlign: 'center',
}));

export const Mission = () => (
  <MissionWrapper>
    <div>
      <Typo type="h2">Mission</Typo>
    </div>
    <div>
      <Typo type="p">{siteMetadata.mission}</Typo>
    </div>
  </MissionWrapper>
);

export default Mission;
