import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import kebabcase from 'lodash.kebabcase';

import { PostHeader, SEO, Title } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';

import config from '../../siteMetadata';

const AllCategoryTemplate: React.FC<PageProps> = ({ pathContext }) => {
  const { categories } = pathContext;

  if (!categories) {
    return null;
  }

  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <Container>
        <Row>
          <Col xs={24}>
            <PostHeader>
              <Typo type="h1" weight={800} isHighlight>
                Categories
              </Typo>
            </PostHeader>
          </Col>
        </Row>
        <Row>
          {categories.map((category, index: number) => (
            <Col xs={12} key={index}>
              <Title>
                <Link to={`/categories/${kebabcase(category)}`}>{category}</Link>
              </Title>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export { AllCategoryTemplate };

export default AllCategoryTemplate;
