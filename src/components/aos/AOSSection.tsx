import 'aos/dist/aos.css';

import styled from '@emotion/styled';
import {
  ILocalizeTheme,
  LocalizeThemeStyledProps,
} from '@seolhun/localize-components-styled-types';
import React, { ReactNode } from 'react';

type AOSAlign = 'center' | 'flex-start' | 'flex-end';

export interface AOSSectionProps extends LocalizeThemeStyledProps {
  [key: string]: any;
  children: ReactNode;

  verticalAlign?: AOSAlign;
  horizonAlign?: AOSAlign;
}

const AOSWrapper = styled.section<any, ILocalizeTheme>(({ theme }) => {
  return {
    display: 'flex',
    flex: '0 100%',
    width: '100%',
    height: '100%',
    backgroundColor: theme.background,
    position: 'relative',
  };
});

const AOSContent = styled.div<AOSSectionProps>(
  ({ horizonAlign = 'center', verticalAlign = 'center' }) => {
    return {
      display: 'flex',
      flex: `0 100%`,
      flexDirection: 'column',
      alignItems: horizonAlign,
      justifyContent: verticalAlign,

      width: `100%`,
      height: `100%`,
    };
  },
);

const AOSSection = ({ children, ...props }: AOSSectionProps) => {
  return (
    <AOSWrapper>
      <AOSContent {...props}>{children}</AOSContent>
    </AOSWrapper>
  );
};

export default AOSSection;
