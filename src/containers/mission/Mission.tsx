import React from 'react';

import styled from '@emotion/styled';

import SiteConfig from 'config/SiteConfig';

const MissionWrapper = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});

const MissionHead = styled.h2(() => {
  return {};
});

const MissionDescription = styled.p(() => {
  return {};
});

const Mission = () => {
  return (
    <MissionWrapper>
      <MissionHead>Mission</MissionHead>
      <MissionDescription>{SiteConfig.mission}</MissionDescription>
    </MissionWrapper>
  );
};

export default Mission;
