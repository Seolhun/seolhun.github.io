import React, { FC } from 'react';

import styled from '@emotion/styled';
import { Col, Container, Row } from '@seolhun/localize-components';

import { Post } from '@/models';
import ContentItem from './ContentItem';

const StyledContentItemListCpntainer = styled(Container)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '.__Localize__Card:not(:last-child)': {
      marginBottom: '15px',
    },
  };
});

interface ContentItemListProps {
  items: Post[];
}

export const ContentItemList: FC<ContentItemListProps> = ({ items }) => {
  return (
    <StyledContentItemListCpntainer>
      <Row>
        {items.map((item) => {
          return (
            <Col key={item.fields.slug} xs={24} data-aos='fade-up' justifyContent='center'>
              <ContentItem {...item} />
            </Col>
          );
        })}
      </Row>
    </StyledContentItemListCpntainer>
  );
};

export default ContentItemList;
