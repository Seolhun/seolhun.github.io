import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import kebabcase from 'lodash.kebabcase';

import {
  PostHeader,
  SEO,
  SHLink,
} from '@/components';
import { Layout } from '@/containers';
import { PageProps } from '@/models';

import config from '../../siteMetadata';

const ItemWrapper = styled.div({});

const ItemContainer = styled.div({
  marginTop: '3rem',
});

const AllCategories: React.FC<PageProps> = ({ pathContext }) => {
  const { categories } = pathContext;

  if (!categories) {
    return null;
  }

  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <Container>
        <PostHeader>
          <Typo type="h1" weight={800}>
            All Categories
          </Typo>
        </PostHeader>
        <ItemWrapper>
          <ItemContainer>
            <Row>
              {categories.map((category, index: number) => (
                <Col sm={4} xs={6} key={index}>
                  <Typo type="p">
                    <SHLink to={`/categories/${kebabcase(category)}`}>{category}</SHLink>
                  </Typo>
                </Col>
              ))}
            </Row>
          </ItemContainer>
        </ItemWrapper>
      </Container>
    </Layout>
  );
};

export { AllCategories };

export default AllCategories;
