import React, { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { split } from 'lodash';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import { Footer } from '@/components';
import SiteConfig from 'config/SiteConfig';
import Theme from 'config/Theme';

import '@/i18n';

const LayoutMain = styled.main({
  scrollBehavior: 'smooth',
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <ThemeProvider theme={Theme}>
          <LayoutMain>
            {children}
          </LayoutMain>
          <Footer>
            <div>
              &copy; {split(data.site.buildTime, '.')[2]} by SeolHun. All
              rights reserved.
            </div>
            <div>
              <a href={SiteConfig.github}>
                GitHub Repository
              </a>
            </div>
            <div>Last build: {data.site.buildTime}</div>
          </Footer>
        </ThemeProvider>
      )}
    />
  );
}

const query = graphql`
  query LayoutQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;

export default Layout;
