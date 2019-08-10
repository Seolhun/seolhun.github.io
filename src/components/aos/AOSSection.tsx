import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import 'aos/dist/aos.css';

import { media } from '../../utils/media';

const HEADER_WIDTH = 35;
const HEADER_MOBILE_HEIGHT = 30;

export interface AOSSectionProps {
  [key: string]: any;
  children: ReactNode;
  headerImgSrc: string;
}

const AOSWrapper = styled.section({
  display: 'flex',
  flex: '0 100%',
  width: '100%',
  height: '100vh',
});

const AOSHeader = styled.div({
  display: 'inline-flex',
  flex: `0 ${HEADER_WIDTH}%`,
  width: `${HEADER_WIDTH}%`,
  height: '100%',

  [`@media ${media.phone}`]: {
    display: 'flex',
    flex: '0 100%',
    width: '100%',
    height: `${HEADER_MOBILE_HEIGHT}%`,
  }
});

const AOSHeaderImage = styled.img({
  width: '100%',
  height: '100%',
});

const AOSContent = styled.div({
  display: 'inline-flex',
  flex: `0 ${100 - HEADER_WIDTH}%`,
  width: `${100 - HEADER_WIDTH}%`,

  [`@media ${media.phone}`]: {
    display: 'flex',
    flex: '0 100%',
    width: '100%',
    height: `${100 - HEADER_MOBILE_HEIGHT}%`,
  }
});

const AOSSection = ({
  children,
  headerImgSrc,
  ...props
}: AOSSectionProps) => {
  return (
    <AOSWrapper {...props}>
      <AOSHeader>
        <AOSHeaderImage src={headerImgSrc} />
      </AOSHeader>
      <AOSContent>
        {children}
      </AOSContent>
    </AOSWrapper>
  )
}

export default AOSSection;
