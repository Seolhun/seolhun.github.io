import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import { Button, Typo } from '@seolhun/localize-components-atomic';

import { AOSSection, SHLink } from '@/components';
import { ContentItemList } from '@/containers/contents';
import { Edge, AllMarkdownRemark } from '@/models';

interface LatestContentsProps {
  allMarkdownRemark: AllMarkdownRemark
}

const TitleWrapper = styled.div({});

const TitleContainer = styled.div({
  marginBottom: '2rem',
  textAlign: 'center',
});

const ReadMoreWrapper = styled.div({});

const ReadMoreContainer = styled.div({
  marginBottom: '1rem',
  textAlign: 'center',
});

const LatestContents: React.FC<LatestContentsProps> = ({ allMarkdownRemark }) => {
  const { t } = useTranslation();

  const memoizedItems = React.useMemo(() => allMarkdownRemark.edges
    .map(({ node }: Edge) => node), [allMarkdownRemark]);

  return (
    <AOSSection verticalAlign="flex-start">
      <TitleWrapper>
        <TitleContainer>
          <Typo
            type="h1"
            weight={600}
          >
            {t('content:title')}
          </Typo>
        </TitleContainer>
      </TitleWrapper>
      <ContentItemList items={memoizedItems} />
      <ReadMoreWrapper>
        <ReadMoreContainer>
          <SHLink to="/contents">
            <Button>
              {t('common:readMore')}
            </Button>
          </SHLink>
        </ReadMoreContainer>
      </ReadMoreWrapper>
    </AOSSection>
  );
};

export {
  LatestContentsProps,
  LatestContents,
};

export default LatestContents;
