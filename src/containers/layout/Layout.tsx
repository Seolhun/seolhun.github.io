import { graphql, StaticQuery } from 'gatsby';
import React, { ReactNode, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '@/i18n';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { Container } from '@seolhun/localize-components';
import { Switch } from '@seolhun/localize-components-atomic';
import { ThemeProvider } from 'emotion-theming';

import { Footer } from '@/components';
import useStorage from '@/hooks/useStorage';
import SiteConfig from 'config/SiteConfig';
import Theme from 'config/Theme';

import styles from './styles';

const LayoutContainer = styled(Container)({
  scrollBehavior: 'smooth',
});

const StyledHeaderContainer = styled.header({
  position: 'fixed',
  right: 0,
  top: 0,
  margin: '10px 10px 0 0',
  zIndex: 1,
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
  const [isDarkMode, setThemeMode] = useState(storage.getItem('THEME') === 'DARK' || true);
  const handleIsChecked = useCallback(() => {
    storage.setItem('THEME', !isDarkMode ? 'DARK' : 'LIGHT');
    setThemeMode(!isDarkMode);
  }, [isDarkMode]);

  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ThemeProvider theme={isDarkMode ? Theme.DARK : Theme.LIGHT}>
          <Global styles={styles} />
          <LayoutContainer isFullWidth>
            <StyledHeaderContainer>
              <Switch
                htmlFor='theme'
                onChange={handleIsChecked}
                checked={isDarkMode}
                css={{ zIndex: 5 }}
              />
            </StyledHeaderContainer>
            <Container>{children}</Container>
            <StyledFooter>
              <div>
                &copy; {t('home:title')} by {SiteConfig.author}. All rights reserved.
              </div>
              <div>
                <a href={SiteConfig.github} target='_blank'>
                  {SiteConfig.author} GitHub
                </a>
              </div>
              <div>Last build: {data.site.buildTime}</div>
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
