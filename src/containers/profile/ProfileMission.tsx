import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import { Col, Container, Row } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

import { Profile } from '@/containers';
import { SHLink } from '@/components';

const ProfileMissionContainer = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  zIndex: 1,

  '.__Localize__Row:not(:last-child)': {
    marginBottom: '15px',
  },
}));

export const ProfileMission = () => {
  const { t } = useTranslation();

  return (
    <ProfileMissionContainer>
      <Profile />
      <Row>
        <Col xs={24} alignItems="center">
          <SHLink to="/contents/about-seolhun">
            <Button>{t('common:viewMore')}</Button>
          </SHLink>
        </Col>
      </Row>
    </ProfileMissionContainer>
  );
};

export default ProfileMission;
