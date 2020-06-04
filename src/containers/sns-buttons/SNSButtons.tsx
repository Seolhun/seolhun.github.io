import { push } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import { Button } from '@seolhun/localize-components-atomic';

import media from '@/utils/media';

interface SNSButtonsProps {}

const SNSButtonsWrapper = styled.div(() => ({}));

const SNSButtonsContainer = styled.div(() => ({
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
}));

const SNSButtons: React.FC<SNSButtonsProps> = () => (
  <SNSButtonsWrapper>
    <SNSButtonsContainer>
      <Button onClick={() => push('/contents')}>Contents</Button>
      <Button onClick={() => push('/tags')}>Tags</Button>
      <Button onClick={() => push('/categories')}>Categories</Button>
    </SNSButtonsContainer>
  </SNSButtonsWrapper>
);

export {
  SNSButtonsProps,
  SNSButtons,
};

export default SNSButtons;
