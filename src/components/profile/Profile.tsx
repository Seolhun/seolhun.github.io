import React, { FC } from 'react';

import styled from '@emotion/styled';

interface ProfileProps {
  src: string;
}

const ProfileImg = styled.img(() => {
  return {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    padding: 0,
    margin: '0 15px 0 0',
  };
});

const Profile: FC<ProfileProps> = ({ src }) => {
  return <ProfileImg src={src} />;
};

export default Profile;
