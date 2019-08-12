import React from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';

import { Button } from '@seolhun/localize-components-atomic';

const SNSButtonsWrapper = styled.div(() => {
  return {

  }
});

const SNSButtonsContainer = styled.div(() => {
  return {
    display: 'flex',

    '& > *:not(:last-child)': {
      marginRight: '10px',
    }
  }
});

const SNSButtons = () => {
  return (
    <SNSButtonsWrapper>
      <SNSButtonsContainer>
        <Link to='/contact'>
          <Button>Contact</Button>
        </Link>
        <Link to='/contents'>
          <Button>Contents</Button>
        </Link>
        <Link to='/tags'>
          <Button>Tags</Button>
        </Link>
        <Link to='/categories'>
          <Button>Categories</Button>
        </Link>
      </SNSButtonsContainer>
    </SNSButtonsWrapper>
  );
}

export default SNSButtons;
