import { graphql, Link, StaticQuery } from 'gatsby';
import React, { ReactNode, useCallback, useState } from 'react';
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
import SiteConfig from 'config/SiteConfig';
import Theme from 'config/Theme';

import styles from './styles';

const LayoutContainer = styled(Container)<any, ILocalizeTheme>(({ theme }) => {
  return {
    scrollBehavior: 'smooth',
    backgroundColor: theme.background,
  };
});

const StyledLogoContainer = styled.div({
  position: 'absolute',
  left: '15px',
  top: '15px',
  zIndex: 5,
});

const StyledSwitchContainer = styled.div({
  position: 'absolute',
  right: '15px',
  top: '20px',
  zIndex: 5,
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

  console.error('@@', window.location);

  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ThemeProvider theme={isDarkMode ? Theme.DARK : Theme.LIGHT}>
          <Global styles={styles} />
          <LayoutContainer isFullWidth>
            <StyledLogoContainer>
              <Typo type='h2' weight={700} isHighlight>
                <Link to='/'>{SiteConfig.siteTitle}</Link>
              </Typo>
            </StyledLogoContainer>
            <StyledSwitchContainer>
              <Switch
                htmlFor='theme'
                onChange={handleIsChecked}
                checked={isDarkMode}
                css={{ zIndex: 5 }}
              />
            </StyledSwitchContainer>
            <main>{children}</main>
            <StyledFooter>
              <Typo type='p'>
                &copy; {t('home:title')} by {SiteConfig.author}. All rights reserved.
              </Typo>
              <Typo type='p'>
                <a href={SiteConfig.github} target='_blank'>
                  {SiteConfig.author} GitHub
                </a>
              </Typo>
              <Typo type='p'>Last build: {data.site.buildTime}</Typo>
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
