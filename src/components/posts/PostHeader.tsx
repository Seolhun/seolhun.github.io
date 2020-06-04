import React from 'react';

import styled from '@emotion/styled';

import config from 'siteMetadata';

interface PostHeaderProps {
  children: any;
  banner?: string;
}

const PostHeaderWrapper: any = styled.header<PostHeaderProps>({
  backgroundSize: 'cover',
  padding: '6rem 0 0',
  wordBreak: 'break-all',
});

interface PostHeaderBannerProps {
  banner?: string;
}

const PostHeaderBanner = styled.div<PostHeaderBannerProps>(({ banner }) => ({
  content: '""',
  background: `transparent url(${banner || '/assets/mask.svg'}) no-repeat bottom left`,
  backgroundPosition: 'center',
  backgroundSize: '40%',
  display: 'block',
  height: '100%',
  width: '100%',
  left: 0,
}));

const PostHeader = ({ banner, children }: PostHeaderProps) => (
  <PostHeaderWrapper>
    <PostHeaderBanner banner={banner || config.defaultBg} />
    {children}
  </PostHeaderWrapper>
);

export default PostHeader;
