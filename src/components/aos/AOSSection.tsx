import React, { ReactNode, useEffect } from 'react';

import styled from '@emotion/styled';
import { Container } from '@seolhun/localize-components';
import {
  ILocalizeTheme,
  LocalizeThemeStyledProps,
} from '@seolhun/localize-components-styled-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

type AOSAlign = 'center' | 'flex-start' | 'flex-end';

export interface AOSSectionProps extends LocalizeThemeStyledProps {
  [key: string]: any;
  children: ReactNode;

  verticalAlign?: AOSAlign;
  horizonAlign?: AOSAlign;
}

const AOSWrapper = styled(Container)<any, ILocalizeTheme>(({ theme }) => ({
  display: 'flex',
  flex: '0 100%',
  width: '100%',
  height: '100%',
  backgroundColor: theme.background,
  position: 'relative',
}));

const AOSContent = styled.div<AOSSectionProps>(
  ({ horizonAlign = 'center', verticalAlign = 'center' }) => ({
    display: 'flex',
    flex: '0 100%',
    flexDirection: 'column',
    alignItems: horizonAlign,
    justifyContent: verticalAlign,

    width: '100%',
    height: '100%',
  }),
);

const AOSSection = ({ children, ...props }: AOSSectionProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AOSWrapper>
      <AOSContent {...props}>{children}</AOSContent>
    </AOSWrapper>
  );
};

export default AOSSection;
