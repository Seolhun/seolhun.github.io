import React from "react";
import Helmet from "react-helmet";

import { Content, Header, Layout, Wrapper, SectionTitle } from "../components";
import config from "../../config/SiteConfig";
import { Link } from "gatsby";

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <Layout>
        <Helmet title={`404 not found | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle>NOT FOUND</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
