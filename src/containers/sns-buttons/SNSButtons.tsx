import React from 'react';
import { Link } from 'gatsby';

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

    textDecoration: 'none',

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
        <Button>
          <Link to='/contact'>Contact</Link>
        </Button>
        <Button>
          <Link to='/contents'>Contents</Link>
        </Button>
        <Button>
          <Link to='/tags'>Tags</Link>
        </Button>
        <Button>
          <Link to='/categories'>Categories</Link>
        </Button>
      </SNSButtonsContainer>
    </SNSButtonsWrapper>
  );
};

export default SNSButtons;
