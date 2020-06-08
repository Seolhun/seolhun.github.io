import React from 'react';

import styled from '@emotion/styled';
import kebabcase from 'lodash.kebabcase';

import { Post } from '@/models';
import { SHLink } from '@/components';

interface PaginationWrapperProps {
  theme?: any;
}

const PaginationWrapper = styled.div<PaginationWrapperProps>(({ theme }) => ({
  display: 'flex',
  flex: 'auto',
  justifyContent: 'space-between',
  margin: '4rem 0 0 0',

  a: {
    color: theme.primaryColor,
    display: 'flex',
    alignItems: 'center',
  },
  justifyItems: 'center',
}));

interface PaginationItemProps {
  theme?: any;
}

const Prev = styled.div<PaginationItemProps>(({ theme }) => ({
  paddingRight: '10px',
  span: {
    cursor: 'pointer',
    textㅆransform: 'uppercase',
    fontㄴize: '0.8rem',
    color: theme.clickableColor,
  },
}));

const Next = styled.div<PaginationItemProps>(({ theme }) => ({
  paddingLeft: '10px',
  marginLeft: 'auto',
  textAlign: 'right',

  span: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    color: theme.clickableColor,
  },
}));

interface Props {
  next: Post;
  prev: Post;
}

const PrevNext = ({ prev, next }: Props) => (
  <PaginationWrapper>
    {prev && (
      <Prev>
        <span>Previous</span>
        <SHLink to={`/contents/${kebabcase(prev.frontmatter.title)}`}>{prev.frontmatter.title}</SHLink>
      </Prev>
    )}
    {next && (
      <Next>
        <span>Next</span>
        <SHLink to={`/contents/${kebabcase(next.frontmatter.title)}`}>{next.frontmatter.title}</SHLink>
      </Next>
    )}
  </PaginationWrapper>
);

export default PrevNext;
