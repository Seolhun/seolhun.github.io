/* eslint-disable no-restricted-globals */
import React from 'react';
import {
  graphql,
  Link,
  useStaticQuery,
} from 'gatsby';
import { useTranslation } from 'react-i18next';

import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Container } from '@seolhun/localize-components';
import { Switch, Typo } from '@seolhun/localize-components-atomic';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

import { Footer } from '@/components';
import useStorage from '@/hooks/useStorage';
import Theme from '@/constants/Theme';
import '@/i18n';

import siteMetadata from '../../../siteMetadata';

interface LayoutProps {}

const LayoutContainer = styled(Container)<any, ILocalizeTheme>(({ theme }) => ({
  scrollBehavior: 'smooth',
  backgroundColor: theme.background,
}));

const StyledFixedHeader = styled.header<any, ILocalizeTheme>(({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  height: '4rem',
  backgroundColor: theme.background,
  boxShadow: theme.border.shadow,
  zIndex: 5,
}));

const StyledLogoContainer = styled.div({
  position: 'absolute',
  left: '1.2rem',
  top: '0.8rem',
  zIndex: 10,

  a: {
    textDecoration: 'none',
  },
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

const query = graphql`
  query LayoutQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

const globalStyle = (theme: ILocalizeTheme) => css`
  html, body {
    background-color: ${theme.background};
  }
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const { site } = useStaticQuery(query);
  const storage = useStorage();
  const [isDarkMode, setThemeMode] = React.useState(storage ? storage.getItem('THEME') === 'DARK' : true);

  const handleIsChecked = () => {
    storage?.setItem('THEME', !isDarkMode ? 'DARK' : 'LIGHT');
    setThemeMode(!isDarkMode);
  };

  if (typeof window === 'undefined') {
    return null;
  }

  const isContentPath = window.location.pathname.split('/').includes('contents');

  return (
    <ThemeProvider theme={isDarkMode ? Theme.DARK : Theme.LIGHT}>
      <Global styles={globalStyle} />
      <LayoutContainer isFullWidth>
        <StyledFixedHeader>
          <StyledLogoContainer>
            <Typo type="h2" weight={700} isHighlight>
              <Link to={isContentPath ? '/contents' : '/'}>{siteMetadata.siteTitle}</Link>
            </Typo>
          </StyledLogoContainer>
          <StyledSwitchContainer>
            {/* <Switch
              htmlFor="theme"
              onChange={handleIsChecked}
              checked={isDarkMode}
              css={{ zIndex: 5 }}
            /> */}
          </StyledSwitchContainer>
        </StyledFixedHeader>
        <main>{children}</main>
        <StyledFooter>
          <Typo type="p">
            &copy;
            {`${t('home:title')} by ${siteMetadata.author} . All rights reserved.`}
          </Typo>
          <Typo type="p">
            <a href={siteMetadata.github} target="_blank" rel="noreferrer">
              {`${siteMetadata.author} GitHub`}
            </a>
          </Typo>
          <Typo type="p">
            {`Last build ${site.buildTime}`}
          </Typo>
        </StyledFooter>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
