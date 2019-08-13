import React from 'react';

import styled from '@emotion/styled';

import SiteConfig from 'config/SiteConfig';

const KeyResultsWrapper = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});

const KeyResultsContainer = styled.div(() => {
  return {

  };
});

const KeyResultItem = styled.p(() => {
  return {

  };
});

const KeyResults = () => {
  return (
    <KeyResultsWrapper>
      <KeyResultsContainer>
        {SiteConfig.keyResults.map((item, index) => (
          <KeyResultItem key={`${item}-${index}`}>
            {item}
          </KeyResultItem>
        ))}
      </KeyResultsContainer>
    </KeyResultsWrapper>
  );
}

export default KeyResults;
