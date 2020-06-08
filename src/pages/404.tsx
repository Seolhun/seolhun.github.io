import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Col, Container, Row } from '@seolhun/localize-components';

import { PostHeader, SHLink } from '@/components';
import { Layout } from '@/containers';
import { Button, Typo } from '@seolhun/localize-components-atomic';

import siteMetadata from '../../siteMetadata';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet title={`404 not found | ${siteMetadata.siteTitle}`} />
      <Container css={{ height: '100vh' }}>
        <Row>
          <Col xs={24}>
            <PostHeader>
              <Typo type="h1" weight={800} isHighlight>
                {t('error:Error404')}
              </Typo>
            </PostHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Typo type="medium">{t('error:Error404Description')}</Typo>
          </Col>
          <Col xs={24}>
            <SHLink to="/contents">
              <Button>{t('common:goBlogList')}</Button>
            </SHLink>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
