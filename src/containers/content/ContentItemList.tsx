import { Link } from 'gatsby';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import { Col, Container, Row } from '@seolhun/localize-components';
import Button from '@seolhun/localize-components-button';

import { Post } from '@/models';
import ContentItem from './ContentItem';

const StyledContentItemListCpntainer = styled(Container)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '.__Localize__Row:not(:last-child)': {
      marginBottom: '15px',
    },
  };
});

interface ContentItemListProps {
  items: Post[];
}

export const ContentItemList: FC<ContentItemListProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <StyledContentItemListCpntainer>
      <Row>
        {items.map((item) => {
          return (
            <Col key={item.fields.slug} xs={24} data-aos='fade-up'>
              <Link to={`/contents/${item.fields.slug}`}>
                <ContentItem {...item} />
              </Link>
            </Col>
          );
        })}
      </Row>
      <Row data-aos='fade-up'>
        <Col xs={24}>
          <Button>
            <Link to={'/contents'}>{t('common:readMore')}</Link>
          </Button>
        </Col>
      </Row>
    </StyledContentItemListCpntainer>
  );
};

export default ContentItemList;
