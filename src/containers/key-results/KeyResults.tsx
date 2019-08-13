import React from 'react';

import styled from '@emotion/styled';

import SiteConfig from 'config/SiteConfig';

const KeyResultsWrapper = styled.div(() => {
  return {};
});

const KeyResultsContainer = styled.div(() => {
  return {
    display: 'flex',
    flex: '0 100%',
    flexDirection: 'column',
    width: '100%',
  };
});

const KeyResultItem = styled.span(() => {
  return {
    padding: '0 0 10px',
  };
});

const KeyResults = () => {
  return (
    <KeyResultsWrapper>
      <KeyResultsContainer>
        {SiteConfig.keyResults.map((item, index) => (
          <KeyResultItem key={`${item}-${index}`}>{item}</KeyResultItem>
        ))}
      </KeyResultsContainer>
    </KeyResultsWrapper>
  );
};

export default KeyResults;
