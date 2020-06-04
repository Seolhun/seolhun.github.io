import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  timeToRead: number;
  category?: string;
  banner?: string;
}

const ArticleContainer = styled.article({
  display: 'flex',
  flex: 'auto',
  flexDirection: 'column',
  marginTop: '2rem',
  marginBottom: '2rem',
  wordBreak: 'break-all',
});

const Article = ({ title, date, excerpt, slug, timeToRead, category }: Props) => (
  <ArticleContainer>
    <Container>
      <Link to={`/contents/${slug}`}>
        <Row alignItems="flex-start">
          <Col xs={24}>
            <Typo type="h2" weight={600}>
              {title}
            </Typo>
          </Col>
        </Row>
        {excerpt && (
          <Row alignItems="flex-start">
            <Col xs={24}>
              <Typo type="p">{excerpt}</Typo>
            </Col>
          </Row>
        )}
        <Row alignItems="flex-start">
          <Col xs={24} justifyContent="flex-end">
            <Typo type="small" weight={600}>
              {date}
            </Typo>
            <Typo type="small" weight={600} css={{ padding: '0 5px' }}>
              -
            </Typo>
            <Typo type="small" weight={600}>
              {`${timeToRead}`} Min read
              {category && ` in ${category}`}
            </Typo>
          </Col>
        </Row>
      </Link>
    </Container>
  </ArticleContainer>
);

export default Article;
