import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import SiteConfig from 'config/SiteConfig';

import { Container, Header, SectionTitle, Content } from '@/components';
import { Layout } from '@/containers';

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title={`404 not found | ${SiteConfig.siteTitle}`} />
      <Header>
        <Link to='/'>{SiteConfig.siteTitle}</Link>
        <SectionTitle>NOT FOUND</SectionTitle>
      </Header>
      <Container>
        <Content>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Content>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
