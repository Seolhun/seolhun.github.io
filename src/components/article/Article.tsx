import React from 'react';
import styled from '@emotion/styled';

import { Container } from '@seolhun/localize-components';

import { SHLink } from '@/components';
import { Content } from '../content';

interface Props {
  /**
   * Date for blog
   */
  date: string;

  /**
   * excerpt for blog
   */
  excerpt: string;

  /**
   * Slug for blog
   */
  slug: string;

  /**
   * TimeToRead for blog
   */
  timeToRead: number;

  /**
   * Title for blog
   */
  title: string;

  /**
   * Banner for blog
   */
  banner?: string;

  /**
   * Category for blog
   */
  category?: string;

  /**
   * SubTitle for blog
   */
  subTitle?: string;
}

const ArticleWrapper = styled.article({

});

const ArticleContainer = styled.div({
  margin: '4rem 2rem',
  wordBreak: 'break-all',
});

const Article = ({
  title,
  subTitle,
  date,
  excerpt,
  slug,
  timeToRead,
  category,
}: Props) => (
  <ArticleWrapper>
    <ArticleContainer>
      <Container>
        <SHLink to={`/contents/${slug}`}>
          <Content
            date={date}
            excerpt={excerpt}
            timeToRead={timeToRead}
            title={title}
            category={category}
            subTitle={subTitle}
          />
        </SHLink>
      </Container>
    </ArticleContainer>
  </ArticleWrapper>
);

export { Article };

export default Article;
