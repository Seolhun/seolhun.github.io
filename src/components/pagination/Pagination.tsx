import React from 'react';

import styled from '@emotion/styled';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

import { SHLink } from '@/components';

export const PaginationWrapper = styled.div<any, ILocalizeTheme>({
  width: '100%',
});

export const PaginationContainer = styled.div<any, ILocalizeTheme>({
  display: 'flex',
  justifyContent: 'center',

  '* + *': {
    marginLeft: '1rem',
  },
});

interface Props {
  currentPage: number;
  totalPages: number;
  url: string;
}

const Pagination = ({ currentPage, totalPages, url }: Props) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const prevPage = currentPage - 1 === 1 ? `/${url}/` : `/${url}/${(currentPage - 1).toString()}`;
  const nextPage = `/${url}/${(currentPage + 1).toString()}`;

  const hasItem = totalPages > 1;
  if (!hasItem) {
    return null;
  }

  return (
    <PaginationWrapper>
      <PaginationContainer>
        {!isFirst && (
          <SHLink to={prevPage}>
            ← Prev
          </SHLink>
        )}
        {[...new Array(totalPages)].map((_, i) => (
          <SHLink
            className={currentPage === i + 1 ? 'page-numbers current' : 'page-numbers'}
            key={`pagination-number${i + 1}`}
            to={`/${url}/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </SHLink>
        ))}
        {!isLast && (
          <SHLink to={nextPage}>
            Next →
          </SHLink>
        )}
      </PaginationContainer>
    </PaginationWrapper>
  );
};

export default Pagination;
