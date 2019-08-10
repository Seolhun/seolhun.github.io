import React from "react";
import { StaticQuery, graphql } from "gatsby";

import split from "lodash/split";
import { ThemeProvider } from 'emotion-theming';

import { Footer } from '../../components';
import SiteConfig from '../../../config/SiteConfig';
import Theme from '../../../config/Theme';

class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              buildTime(formatString: "YYYY-MM-DD")
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={Theme}>
            {children}
            <Footer>
              <div>
                &copy; {split(data.site.buildTime, ".")[2]} by SeolHun. All
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
}

export default Layout;
