/* eslint-disable no-restricted-globals */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

import { Footer, SHLink, SHSwitch } from '@/components';
import useStorage from '@/hooks/useStorage';
import Theme from '@/constants/Theme';
import '@/i18n';

import globalStyles from './globalStyles';
import siteMetadata from '../../../siteMetadata';

interface LayoutProps {}

const LayoutContainer = styled(Container)<any, ILocalizeTheme>(({ theme }) => ({
  scrollBehavior: 'smooth',
  backgroundColor: theme.background,
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

const LogoContainer = styled.div({
  position: 'absolute',
  left: '1rem',
  top: '0.8rem',
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
  const storage = useStorage();

  const [isDarkMode, setThemeMode] = React.useState(
    storage ? storage.getItem('THEME') === 'DARK' : true,
  );

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
      <Global styles={globalStyles} />
      <LayoutContainer isFullWidth>
        <FixedHeader>
          <LogoContainer>
            <SHLink to={isContentPath ? '/contents' : '/'}>
              <Typo type="h2" weight={700} isHighlight>
                {siteMetadata.siteTitle}
              </Typo>
            </SHLink>
          </LogoContainer>
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
