import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

export const PaginationContainer = styled.span<any, ILocalizeTheme>(({ theme }) => {
  return {
    display: 'flex',
    flex: 'auto',
    justifyContent: 'space-evenly',
    color: theme.fonts.COLOR.primaryColor,
  };
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
    <PaginationContainer>
      {!isFirst && (
        <Link className='prev page-numbers' to={prevPage} rel='prev'>
          ← Prev
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          className={currentPage === i + 1 ? 'page-numbers current' : 'page-numbers'}
          key={`pagination-number${i + 1}`}
          to={`/${url}/${i === 0 ? '' : i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link className='next page-numbers' to={nextPage} rel='next'>
          Next →
        </Link>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
