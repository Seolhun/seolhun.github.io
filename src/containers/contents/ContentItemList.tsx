import React from 'react';
import styled from '@emotion/styled';

import { Post } from '@/models';

import { ContentItem } from './ContentItem';

interface ContentItemListProps {
  items: Post[];
}

const ContentItemListWrapper = styled.div({});

const ContentItemListContainer = styled.div({
  marginBottom: '2rem',
});

const ContentItemList: React.FC<ContentItemListProps> = ({ items }) => (
  <ContentItemListWrapper>
    {items.map((item) => (
      <ContentItemListContainer key={item.fields.slug} data-aos="fade-up">
        <ContentItem {...item} />
      </ContentItemListContainer>
    ))}
  </ContentItemListWrapper>
);

export {
  ContentItemList,
  ContentItemListProps,
};

export default ContentItemList;
