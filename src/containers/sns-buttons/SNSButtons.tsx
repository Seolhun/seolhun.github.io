import { push } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import { Button } from '@seolhun/localize-components-atomic';

import media from '@/utils/media';

const SNSButtonsWrapper = styled.div(() => {
  return {};
});

const SNSButtonsContainer = styled.div(() => {
  return {
    display: 'flex',
    padding: '1rem 2rem',

    '& > *:not(:last-child)': {
      marginRight: '10px',
    },

    [`@media ${media.tablet}`]: {
      display: 'block',
    },

    [`@media ${media.phone}`]: {
      display: 'block',

      '& > *': {
        width: '100%',
        margin: '5px',
      },
    },
  };
});

const SNSButtons = () => {
  return (
    <SNSButtonsWrapper>
      <SNSButtonsContainer>
        <Button onClick={() => push('/contents')}>Contents</Button>
        <Button onClick={() => push('/tags')}>Tags</Button>
        <Button onClick={() => push('/categories')}>Categories</Button>
      </SNSButtonsContainer>
    </SNSButtonsWrapper>
  );
};

export default SNSButtons;
