import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';

import Post from '@/models/Post';

interface PaginationWrapperProps {
  theme?: any;
}

const PaginationWrapper = styled.div<PaginationWrapperProps>(({ theme }) => {
  return {
    display: 'flex',
    margin: '6rem auto 0 auto',
    a: {
      color: theme.primaryColor,
      display: 'flex',
      alignItems: 'center',
    },
    justifyItems: 'center',
  };
});

interface PaginationItemProps {
  theme?: any;
}

const Prev = styled.div<PaginationItemProps>(({ theme }) => {
  return {
    span: {
      textㅆransform: 'uppercase',
      fontㄴize: '0.8rem',
      color: theme.clickableColor,
    },
  };
});

const Next = styled.div<PaginationItemProps>(({ theme }) => {
  return {
    marginLeft: 'auto',
    textAlign: 'right',
    span: {
      textTransform: 'uppercase',
      fontSize: '0.8rem',
      color: theme.clickableColor,
    },
  };
});

interface Props {
  next: Post;
  prev: Post;
}

const PrevNext = ({ prev, next }: Props) => {
  return (
    <PaginationWrapper>
      {prev && (
        <Prev>
          <span>Previous</span>
          <Link to={`/contents/${kebabCase(prev.frontmatter.title)}`}>
            {prev.frontmatter.title}
          </Link>
        </Prev>
      )}
      {next && (
        <Next>
          <span>Next</span>
          <Link to={`/contents/${kebabCase(next.frontmatter.title)}`}>
            {next.frontmatter.title}
          </Link>
        </Next>
      )}
    </PaginationWrapper>
  );
};

export default PrevNext;
