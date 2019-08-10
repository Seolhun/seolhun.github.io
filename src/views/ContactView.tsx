import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { Layout, Header, SectionTitle } from "../components";

import config from "../../config/SiteConfig";

const ContactView = () => {
  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <SectionTitle uppercase={true}>Contact</SectionTitle>
      </Header>
    </Layout>
  );
};

export default ContactView;
