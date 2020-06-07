import React from 'react';

import styled from '@emotion/styled';
import { Container } from '@seolhun/localize-components';
import {
  ILocalizeTheme,
  LocalizeThemeStyledProps,
} from '@seolhun/localize-components-styled-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

type AOSAlign = 'center' | 'flex-start' | 'flex-end';

interface AOSSectionProps extends LocalizeThemeStyledProps {
  verticalAlign?: AOSAlign;
  horizonAlign?: AOSAlign;
}

const AOSWrapper = styled(Container)<any, ILocalizeTheme>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: theme.background,
}));

const AOSContent = styled.div<AOSSectionProps>(() => ({
  width: '100%',
  height: '100%',
}));

const AOSSection: React.FC<AOSSectionProps> = ({ children, ...props }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AOSWrapper>
      <AOSContent {...props}>{children}</AOSContent>
    </AOSWrapper>
  );
};

export { AOSSection };

export default AOSSection;
