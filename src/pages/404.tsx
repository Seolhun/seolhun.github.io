import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';

import { Content, PostHeader, SectionTitle } from '@/components';
import { Layout } from '@/containers';
import SiteConfig from 'config/SiteConfig';

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title={`404 not found | ${SiteConfig.siteTitle}`} />
      <PostHeader>
        <Link to='/'>{SiteConfig.siteTitle}</Link>
        <SectionTitle>NOT FOUND</SectionTitle>
      </PostHeader>
      <Container>
        <Content>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Content>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
