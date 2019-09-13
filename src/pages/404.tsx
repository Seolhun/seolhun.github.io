import React from 'react';
import Helmet from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';

import { PostHeader } from '@/components';
import { Layout } from '@/containers';
import { Typo } from '@seolhun/localize-components-atomic';
import SiteConfig from 'config/SiteConfig';

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title={`404 not found | ${SiteConfig.siteTitle}`} />
      <Container css={{ height: '100vh' }}>
        <Row>
          <Col xs={24}>
            <PostHeader>
              <Typo type='h1' weight={800} isHighlight>
                NOT FOUND
              </Typo>
            </PostHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Typo type='h3'>You just hit a route that doesn&#39;t exist... the sadness.</Typo>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
