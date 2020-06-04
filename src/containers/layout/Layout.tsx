import { graphql, Link, StaticQuery } from 'gatsby';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '@/i18n';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { Container } from '@seolhun/localize-components';
import { Switch, Typo } from '@seolhun/localize-components-atomic';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';
import { ThemeProvider } from 'emotion-theming';

import { Footer } from '@/components';
import useStorage from '@/hooks/useStorage';
import Theme from '@/Theme';
import siteMetadata from 'siteMetadata';

import styles from './styles';

const LayoutContainer = styled(Container)<any, ILocalizeTheme>(({ theme }) => {
  return {
    scrollBehavior: 'smooth',
    backgroundColor: theme.background,
  };
});

const StyledFixedHeader = styled.header<any, ILocalizeTheme>(({ theme }) => {
  return {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,

    height: '4rem',
    backgroundColor: theme.background,
    boxShadow: theme.border.shadow,
    zIndex: 5,
  };
});

const StyledLogoContainer = styled.div({
  position: 'absolute',
  left: '1.2rem',
  top: '0.8rem',
  zIndex: 10,
});

const StyledSwitchContainer = styled.div({
  position: 'absolute',
  right: '1.2rem',
  top: '1.1rem',
  zIndex: 10,
});

const StyledFooter = styled(Footer)({
  zIndex: 1,
});

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const storage = useStorage();
  if (!storage) {
    return null;
  }

  const [isDarkMode, setThemeMode] = useState(storage.getItem('THEME') === 'DARK');

  const handleIsChecked = useCallback(() => {
    storage.setItem('THEME', !isDarkMode ? 'DARK' : 'LIGHT');
    setThemeMode(!isDarkMode);
  }, [isDarkMode]);

  const memoizedIsContentPath = useMemo(() => {
    return window.location.pathname.split('/').includes('contents');
  }, [window.location.pathname]);

  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ThemeProvider theme={isDarkMode ? Theme.DARK : Theme.LIGHT}>
          <Global styles={styles} />
          <LayoutContainer isFullWidth>
            <StyledFixedHeader>
              <StyledLogoContainer>
                <Typo type="h2" weight={700} isHighlight>
                  <Link to={memoizedIsContentPath ? '/contents' : '/'}>
                    {siteMetadata.siteTitle}
                  </Link>
                </Typo>
              </StyledLogoContainer>
              <StyledSwitchContainer>
                <Switch
                  htmlFor="theme"
                  onChange={handleIsChecked}
                  checked={isDarkMode}
                  css={{ zIndex: 5 }}
                />
              </StyledSwitchContainer>
            </StyledFixedHeader>
            <main>{children}</main>
            <StyledFooter>
              <Typo type="p">
                &copy; {t('home:title')} by {siteMetadata.author}. All rights reserved.
              </Typo>
              <Typo type="p">
                <a href={siteMetadata.github} target="_blank">
                  {siteMetadata.author} GitHub
                </a>
              </Typo>
              <Typo type="p">Last build: {data.site.buildTime}</Typo>
            </StyledFooter>
          </LayoutContainer>
        </ThemeProvider>
      )}
    />
  );
};

const query = graphql`
  query LayoutQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

export default Layout;
