import { Link } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import kebabcase from 'lodash.kebabcase';

import { PostHeader, SEO, Title } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'siteMetadata';

const AllTagTemplate: FC<PageProps> = ({ pathContext }) => {
  const { tags } = pathContext;

  if (!tags) {
    return null;
  }
  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <Container>
        <Row>
          <Col xs={24}>
            <PostHeader>
              <Typo type="h1" weight={800} isHighlight>
                Tags
              </Typo>
            </PostHeader>
          </Col>
        </Row>
        <Row>
          {tags.map((tag, index: number) => (
            <Col xs={12} key={index}>
              <Title>
                <Link to={`/tags/${kebabcase(tag)}`}>{tag}</Link>
              </Title>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default AllTagTemplate;
