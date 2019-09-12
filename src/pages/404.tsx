import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';

import { Content, PostHeader } from '@/components';
import { Layout } from '@/containers';
import { Typo } from '@seolhun/localize-components-atomic';
import SiteConfig from 'config/SiteConfig';

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title={`404 not found | ${SiteConfig.siteTitle}`} />
      <PostHeader>
        <Typo type='h1' weight={800} isHighlight>
          NOT FOUND
        </Typo>
      </PostHeader>
      <Container>
        <Content>
          <Typo type='p'>You just hit a route that doesn&#39;t exist... the sadness.</Typo>
        </Content>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
