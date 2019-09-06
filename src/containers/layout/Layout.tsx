import { graphql, StaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import { Container } from '@seolhun/localize-components';

import { Footer } from '@/components';
import SiteConfig from 'config/SiteConfig';
import Theme from 'config/Theme';

import '@/i18n';

import styles from './styles';

const StyledLayoutMain = styled(Container)({
  scrollBehavior: 'smooth',
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ThemeProvider theme={Theme}>
          <Global styles={styles} />
          <StyledLayoutMain>{children}</StyledLayoutMain>
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
