import React from 'react';

import styled from '@emotion/styled';

interface ProfileImageProps {
  src: string;
}

const StyledProfileImage = styled.img(() => ({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  padding: 0,
  margin: '0 15px 0 0',
}));

export const ProfileImage: FC<ProfileImageProps> = ({ src }) => <StyledProfileImage src={src} />;

export default ProfileImage;
