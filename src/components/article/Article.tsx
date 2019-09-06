import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  timeToRead: number;
  category: string;
  banner?: string;
}

const Post = styled.article({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3.5rem',
  marginBottom: '3.5rem',
});

const Title = styled.h2({
  position: 'relative',
  textShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
  marginBottom: '0.75rem',
});

const Excerpt = styled.p({
  gridColumn: -1 / 1,
  marginTop: '1rem',
  marginBottom: '1rem',
});

const Article = ({ title, date, excerpt, slug, timeToRead, category, banner }: Props) => (
  <Post>
    {banner && <img src={banner} />}
    <Title>
      <Link to={`/contents/${slug}`}>{title}</Link>
    </Title>
    <div>
      {date} &mdash; {timeToRead} Min Read &mdash; In
      <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
    </div>
    <Excerpt>{excerpt}</Excerpt>
  </Post>
);

export default Article;
