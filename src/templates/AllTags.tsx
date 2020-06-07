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
import PageProps from '@/models/PageProps';

import config from '../../siteMetadata';

const ItemWrapper = styled.div({});

const ItemContainer = styled.div({
  marginTop: '3rem',
});

const AllTags: React.FC<PageProps> = ({ pathContext }) => {
  const { tags } = pathContext;

  if (!tags) {
    return null;
  }

  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <Container>
        <PostHeader>
          <Typo type="h1" weight={800} isHighlight>
            All Tags
          </Typo>
        </PostHeader>
        <ItemWrapper>
          <ItemContainer>
            <Row>
              {tags.map((tag, index: number) => (
                <Col sm={4} xs={6} key={index}>
                  <Typo type="p">
                    <SHLink to={`/tags/${kebabcase(tag)}`}>{tag}</SHLink>
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

export default AllTags;
