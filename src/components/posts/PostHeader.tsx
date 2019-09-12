import React from 'react';

import styled from '@emotion/styled';

import { media } from '@/utils/media';
import config from 'config/SiteConfig';

interface PostHeaderProps {
  children: any;
  banner?: string;
}

const PostHeaderWrapper: any = styled.header<PostHeaderProps>(({ banner }) => {
  return {
    position: 'relative',
    backgroundSize: 'cover',
    padding: '8rem 2rem 10rem',
    textAlign: 'center',

    '&::after': {},

    [`@media ${media.tablet}`]: {
      padding: '4rem 2rem 6rem',
    },
    [`@media ${media.phone}`]: {
      padding: '1rem 0.5rem 2rem',
    },
  };
});

interface PostHeaderBannerProps {
  banner?: string;
}

const PostHeaderBanner = styled.div<PostHeaderBannerProps>(({ banner }) => {
  return {
    content: '""',
    background: `transparent url(${banner || '/assets/mask.svg'}) no-repeat bottom left`,
    backgroundPosition: 'center',
    backgroundSize: '40%',
    display: 'block',
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
  };
});

const Content = styled.div({
  position: 'relative',
  zIndex: 999,

  a: {
    color: 'white',

    '&:hover': {
      opacity: 0.85,
      color: 'white',
    },
  },
});

const PostHeader = ({ banner, children }: PostHeaderProps) => {
  return (
    <PostHeaderWrapper>
      <PostHeaderBanner banner={banner || config.defaultBg} />
      <Content>{children}</Content>
    </PostHeaderWrapper>
  );
};

export default PostHeader;
