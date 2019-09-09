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
import SiteConfig from 'config/SiteConfig';
import Theme from 'config/Theme';

import styles from './styles';

const StyledHeaderContainer = styled.nav({
  position: 'fixed',
  right: 0,
  top: 0,
  margin: '10px 10px 0 0',
  zIndex: 1,
});

const StyledMainContainer = styled(Container)({
  scrollBehavior: 'smooth',
});

const StyledFooterContainer = styled.footer();

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();

  const [isChecked, setChecked] = useState(false);
  const handleIsChecked = useCallback(() => {
    setChecked(!isChecked);
  }, [isChecked]);

  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ThemeProvider theme={Theme}>
          <Global styles={styles} />
          <StyledHeaderContainer>
            <Switch
              htmlFor='theme'
              onChange={handleIsChecked}
              checked={isChecked}
              css={{ zIndex: 5 }}
            />
          </StyledHeaderContainer>
          <StyledMainContainer isFullWidth>{children}</StyledMainContainer>
          <StyledFooterContainer>
            <Footer>
              <div>
                &copy; {t('home:title')} by {SiteConfig.author}. All rights reserved.
              </div>
              <div>
                <a href={SiteConfig.github} target='_blank'>
                  {SiteConfig.author} GitHub
                </a>
              </div>
              <div>Last build: {data.site.buildTime}</div>
            </Footer>
          </StyledFooterContainer>
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
