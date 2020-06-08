/* eslint-disable no-restricted-globals */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { ColorResult } from 'react-color';

import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

import {
  Footer,
  SHLink,
  SHSwitch,
  ThemePicker,
} from '@/components';
import { useStorage } from '@/hooks';
import { SHTheme } from '@/constants';

import '@/i18n';

import globalStyles from './globalStyles';
import siteMetadata from '../../../siteMetadata';

interface LayoutProps {}

const LayoutContainer = styled(Container)<any, ILocalizeTheme>(({ theme }) => ({
  scrollBehavior: 'smooth',
  backgroundColor: theme.background,
  padding: 0,
  margin: 0,
}));

const FixedHeader = styled.header<any, ILocalizeTheme>(({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  height: '4rem',
  backgroundColor: theme.background,
  boxShadow: theme.border.shadow,
  zIndex: 5,
}));

const LogoContainer = styled.div<any, ILocalizeTheme>(({ theme }) => ({
  position: 'absolute',
  left: '1rem',
  top: '0.2rem',
  fontWeight: 700,
  fontSize: '2.2rem',
  color: theme.primaryColor,
  zIndex: 10,
}));

const SketchContainer = styled.div({
  position: 'absolute',
  right: '6rem',
  top: '0.9rem',
  zIndex: 10,
});

const SwitchContainer = styled.div({
  position: 'absolute',
  right: '1.2rem',
  top: '1.1rem',
  zIndex: 10,
});

const query = graphql`
  query LayoutQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const { site } = useStaticQuery(query);
  const { getItem, setItem } = useStorage();

  const [isDarkMode, setThemeMode] = React.useState(getItem('THEME') === 'DARK');
  const [currentColor, setCurrentColor] = React.useState(getItem('MAIN_COLOR') || 'royalBlue');

  const handleIsChecked = () => {
    setItem('THEME', !isDarkMode ? 'DARK' : 'LIGHT');
    setThemeMode(!isDarkMode);
  };

  const handleCurrentColor = (color: ColorResult) => {
    setItem('MAIN_COLOR', color.hex);
    setCurrentColor(color.hex);
  };

  const memoizedCustomTheme = React.useMemo(() => {
    if (isDarkMode) {
      return {
        ...SHTheme.DARK,
        primaryColor: currentColor,
        clickableColor: currentColor,
        fonts: {
          ...SHTheme.DARK.fonts,
          COLOR: {
            ...SHTheme.DARK.fonts.COLOR,
            highlightColor: currentColor,
          },
        },
      };
    }

    return {
      ...SHTheme.LIGHT,
      primaryColor: currentColor,
      clickableColor: currentColor,
      fonts: {
        ...SHTheme.LIGHT.fonts,
        COLOR: {
          ...SHTheme.LIGHT.fonts.COLOR,
          highlightColor: currentColor,
        },
      },
    };
  }, [isDarkMode, currentColor, SHTheme]);

  if (typeof window === 'undefined') {
    return null;
  }

  const isContentPath = window.location.pathname.split('/').includes('contents');

  return (
    <ThemeProvider theme={memoizedCustomTheme}>
      <Global styles={globalStyles} />
      <LayoutContainer isFullWidth>
        <FixedHeader>
          <LogoContainer>
            <SHLink to={isContentPath ? '/contents' : '/'}>
              {siteMetadata.siteTitle}
            </SHLink>
          </LogoContainer>
          <SketchContainer>
            <ThemePicker
              currentColor={currentColor}
              onChangeColor={handleCurrentColor}
            />
          </SketchContainer>
          <SwitchContainer>
            <SHSwitch htmlFor="theme" onChange={handleIsChecked} checked={isDarkMode} />
          </SwitchContainer>
        </FixedHeader>
        <main>{children}</main>
        <Footer>
          <Typo type="p">
            &copy;
            {`${t('home:title')} by ${siteMetadata.author} . All rights reserved.`}
          </Typo>
          <Typo type="p">
            <SHLink to={siteMetadata.github} isExternal>
              {`${siteMetadata.author} GitHub`}
            </SHLink>
          </Typo>
          <Typo type="p">{`Last build ${site.buildTime}`}</Typo>
        </Footer>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
