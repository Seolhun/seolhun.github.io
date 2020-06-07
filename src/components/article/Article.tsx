import React from 'react';
import styled from '@emotion/styled';

import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';

import { SHLink } from '@/components';

interface Props {
  title: string;
  subTitle: string;
  slug: string;
  date: string;
  excerpt: string;
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

const StyledContentDateTime = styled.div(() => ({
  textAlign: 'right',
}));

const Article = ({
  title,
  subTitle,
  date,
  excerpt,
  slug,
  timeToRead,
  category,
}: Props) => (
  <ArticleContainer>
    <Container>
      <SHLink to={`/contents/${slug}`}>
        <Typo type="h2" weight={600}>
          {title}
        </Typo>
        {subTitle && (
          <Typo type="p">{subTitle}</Typo>
        )}
        {excerpt && (
          <Typo type="p">{excerpt}</Typo>
        )}
        <StyledContentDateTime>
          <Typo type="p" weight={600}>
            {date}
          </Typo>
          <Typo type="p" weight={600}>
            {`${timeToRead} Min read ${category && `in ${category}`}`}
          </Typo>
        </StyledContentDateTime>
      </SHLink>
    </Container>
  </ArticleContainer>
);

export { Article };

export default Article;
