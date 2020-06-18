import React from 'react';

import styled from '@emotion/styled';
import kebabcase from 'lodash.kebabcase';
import { Card } from '@seolhun/localize-components';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

import { Post } from '@/models';
import { useNavigate } from '@reach/router';

const SHCard = styled(Card)<{}, ILocalizeTheme>(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  textDecoration: 'none',
}));

const PaginationWrapper = styled.div<{}, ILocalizeTheme>(({ theme }) => ({
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

const PaginationIndicatpr = styled.div<{}, ILocalizeTheme>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  span: {
    cursor: 'pointer',
    textㅆransform: 'uppercase',
    fontㄴize: '0.8rem',
    color: theme.clickableColor,
  },
}));

interface Props {
  next: Post;
  prev: Post;
}

const PrevNext = ({ prev, next }: Props) => {
  const navigate = useNavigate();
  const onClickPagination = (url: string) => () => {
    navigate(url);
  };

  return (
    <PaginationWrapper>
      {prev && (
        <SHCard>
          <PaginationIndicatpr onClick={onClickPagination(`/contents/${kebabcase(prev.frontmatter.title)}`)}>
            <span>Previous</span>
            {prev.frontmatter.title}
          </PaginationIndicatpr>
        </SHCard>
      )}
      {next && (
        <SHCard>
          <PaginationIndicatpr onClick={onClickPagination(`/contents/${kebabcase(next.frontmatter.title)}`)}>
            <span>Next</span>
            {next.frontmatter.title}
          </PaginationIndicatpr>
        </SHCard>
      )}
    </PaginationWrapper>
  );
};

export default PrevNext;
