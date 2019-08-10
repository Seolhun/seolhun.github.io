import React from "react";

import styled from "@emotion/styled";

import { media } from "../../utils/media";
import config from "../../../config/SiteConfig";

const HeaderWrapper: any = styled.header(() => {
  return {
    position: 'relative',
    backgroundSize: 'cover',
    padding: '8rem 2rem 10rem',
    textAlign: 'center',

    '&::after': {
      background: `transparent url(/assets/mask.svg) no-repeat bottom left`,
      backgroundSize: '101%',
      bottom: '-2px',
      content: '',
      display: 'block',
      height: '100%',
      left: 0,
      position: 'absolute',
      width: '100%',
    },

    [`@media ${media.tablet}`]: {
      padding: '4rem 2rem 6rem',
    },
    [`@media ${media.phone}`]: {
      padding: '1rem 0.5rem 2rem',
    },
  }
});

const Content = styled.div({
  position: 'relative',
  zIndex: 999,

  a: {
    color: 'white',

    '&:hover': {
      opacity: 0.85,
      color: 'white',
    }
  }
});

interface HeaderProps {
  children: any;
  banner?: string;
}

const Header = ({
  banner,
  children,
}: HeaderProps) => {
  return (
    <HeaderWrapper banner={banner || config.defaultBg}>
      <Content>{children}</Content>
    </HeaderWrapper>
  );
}

export default Header;
