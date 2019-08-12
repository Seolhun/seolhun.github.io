import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import 'aos/dist/aos.css';

export interface AOSSectionProps {
  [key: string]: any;
  children: ReactNode;
}

const AOSWrapper = styled.section({
  display: 'flex',
  flex: '0 100%',
  width: '100%',
  height: '100vh',
});

const AOSContent = styled.div({
  display: 'flex',
  flex: `0 100%`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: `100%`,
  height: `100%`,
  padding: '1em 2em',

  // background: `linear-gradient(180deg, #4A00D3 0%, #2802E9 35.91%, #0E3AF8 67.4%, #018DE6 100%)`,
});

const AOSSection = ({
  children,
  headerImgSrc,
  ...props
}: AOSSectionProps) => {
  return (
    <AOSWrapper {...props}>
      <AOSContent>
        {children}
      </AOSContent>
    </AOSWrapper>
  )
}

export default AOSSection;
