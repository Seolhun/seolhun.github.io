import { graphql, StaticQuery } from 'gatsby';
import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import { Col, Container, Row } from '@seolhun/localize-components';
import { Switch } from '@seolhun/localize-components-atomic';

import { Footer } from '@/components';
import SiteConfig from 'config/SiteConfig';
import Theme from 'config/Theme';

import '@/i18n';

import styles from './styles';

const StyledLayoutMain = styled(Container)({
  scrollBehavior: 'smooth',
});

const StyledSwitch = styled(Switch)({
  position: 'fixed',
  right: '10px',
  top: '10px',
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const [isChecked, setChecked] = useState(false);
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ThemeProvider theme={Theme}>
          <Global styles={styles} />
          <StyledSwitch
            item={{
              label: 'label',
              value: 'value',
            }}
            onChange={(event) => {
              setChecked(!isChecked);
            }}
            checked={isChecked}
            css={{ zIndex: 5 }}
          />
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
