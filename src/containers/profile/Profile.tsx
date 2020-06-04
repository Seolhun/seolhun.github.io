import React from 'react';

import styled from '@emotion/styled';
import { Col, Row } from '@seolhun/localize-components';
import { Image } from '@seolhun/localize-components-atomic';

import { rightTwister } from '@/animations';
import { Mission, ProfileImage } from '@/containers';
import siteMetadata from 'siteMetadata';

const StyledIconLink = styled.a({
  padding: '5px 15px',

  '&:hover': {
    animation: `${rightTwister()} 1s ease-in-out infinite`,
  },
});

export const Profile = () => {
  return (
    <Row alignItems="center">
      <Col xs={24} justifyContent="center">
        <ProfileImage src={siteMetadata.githubOwnerImage} />
        <Mission />
      </Col>
      <Col xs={24} justifyContent="center">
        {siteMetadata.authorSocialLinks.map((link) => (
          <StyledIconLink key={link.name} {...link}>
            <Image src={`/assets/icons/${link.name}.svg`} width="25px" />
          </StyledIconLink>
        ))}
      </Col>
    </Row>
  );
};

export default Profile;
