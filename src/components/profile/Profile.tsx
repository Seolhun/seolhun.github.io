import React, { FC } from 'react';

import styled from '@emotion/styled';

import { Circle } from '@seolhun/localize-components-atomic';

const PROFIE_SIZE = 175;

interface ProfileProps {
  src: string,
}

const ProfileImg = styled.img(() => {
  return {
    width: `${PROFIE_SIZE}px`,
    borderRadius: '50%',
    padding: 0,
    margin: 0,
  };
})

const Profile: FC<ProfileProps> = ({
  src,
}) => {
  return (
    <Circle size={PROFIE_SIZE}>
      <ProfileImg src={src} />
    </Circle>
  );
}

export default Profile;
