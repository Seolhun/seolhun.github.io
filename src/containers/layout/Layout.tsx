import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <StaticQuery
      query={query}
      render={data => (
        <ThemeProvider theme={Theme}>
          <LayoutMain>
            {children}
          </LayoutMain>
          <Footer>
            <p>{t('home:title')}</p>
            <div>
              &copy; {split(data.site.buildTime, '.')[2]} by {SiteConfig.author}. All
              rights reserved.
            </div>
            <div>
              <a
                href={SiteConfig.github}
                target='_blank'
              >
                {SiteConfig.author} GitHub
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
