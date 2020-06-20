import React from 'react';

import styled from '@emotion/styled';
import { rightTwister } from '@/animations';
import { Mission } from '@/containers';
import { SHImage } from '@/components';

import siteMetadata from '../../../siteMetadata';

const ProfileWrapper = styled.div({
  zIndex: 1,
});

const ProfileContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const MissionWrapper = styled.div({
  display: 'flex',
  marginBottom: '10px',
});

const SNSWrapper = styled.div({
  display: 'flex',
});

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
  <ProfileWrapper>
    <ProfileContainer>
      <ProfileImage
        src={siteMetadata.githubOwnerImage}
        width="150px"
        height="150px"
      />
      <MissionWrapper>
        <Mission />
      </MissionWrapper>
      <SNSWrapper>
        {siteMetadata.authorSocialLinks.map((link) => (
          <StyledIconLink key={link.name} {...link}>
            <SHImage src={`/assets/icons/${link.name}.svg`} width="25px" />
          </StyledIconLink>
        ))}
      </SNSWrapper>
    </ProfileContainer>
  </ProfileWrapper>
);

export default Profile;
