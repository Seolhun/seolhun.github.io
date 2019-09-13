import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { kebabCase } from 'lodash';

import { PostHeader, Title } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'config/SiteConfig';

export default class AllCategoryTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <Layout>
          <Helmet title={`Categories | ${config.siteTitle}`} />
          <Container>
            <Row>
              <Col xs={24}>
                <PostHeader>
                  <Typo type='h1' weight={800} isHighlight>
                    Categories
                  </Typo>
                </PostHeader>
              </Col>
            </Row>
            <Row>
              {categories.map((category, index: number) => (
                <Col xs={12} key={index}>
                  <Title>
                    <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
                  </Title>
                </Col>
              ))}
            </Row>
          </Container>
        </Layout>
      );
    }
  }
}
