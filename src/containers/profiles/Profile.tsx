import React from 'react';

import styled from '@emotion/styled';
import { Col, Row } from '@seolhun/localize-components';
import { rightTwister } from '@/animations';
import { Mission } from '@/containers';
import { SHImage } from '@/components';

import siteMetadata from '../../../siteMetadata';

const StyledIconLink = styled.a({
  padding: '5px 15px',

  '&:hover': {
    animation: `${rightTwister()} 1s ease-in-out infinite`,
  },
});

const ProfileImage = styled(SHImage)(() => ({
  borderRadius: '50%',
  padding: 0,
  margin: '0 15px 0 0',
}));

export const Profile = () => (
  <Row alignItems="center">
    <Col xs={24} justifyContent="center">
      <ProfileImage
        src={siteMetadata.githubOwnerImage}
        width="150px"
        height="150px"
      />
      <Mission />
    </Col>
    <Col xs={24} justifyContent="center">
      {siteMetadata.authorSocialLinks.map((link) => (
        <StyledIconLink key={link.name} {...link}>
          <SHImage src={`/assets/icons/${link.name}.svg`} width="25px" />
        </StyledIconLink>
      ))}
    </Col>
  </Row>
);

export default Profile;
