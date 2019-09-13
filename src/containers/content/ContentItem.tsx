import { Link } from 'gatsby';
import React, { FC } from 'react';

import styled from '@emotion/styled';
import { Card, Col, Row } from '@seolhun/localize-components';
import { Image, Typo } from '@seolhun/localize-components-atomic';

import { Post } from '@/models';

export interface ContentItemProps extends Post {}

const StyledCard = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  };
});

export const ContentItem: FC<ContentItemProps> = (props: ContentItemProps) => {
  const { fields, frontmatter, timeToRead, excerpt } = props;
  const { title, subTitle, date, banner, category } = frontmatter;

  return (
    <StyledCard>
      <Link to={`/contents/${fields.slug}`}>
        <Row alignItems='flex-start'>
          <Col xs={0} sm={3}>
            <Image src={banner || `/assets/logo.png`} />
          </Col>
          <Col xs={24} sm={21}>
            <Typo type='h2' weight={600}>
              {title}
            </Typo>
            {subTitle && <Typo type='p'>{subTitle}</Typo>}
          </Col>
        </Row>
        {excerpt && (
          <Row alignItems='flex-start'>
            <Col xs={24}>
              <Typo type='p'>{excerpt}</Typo>
            </Col>
          </Row>
        )}
        <Row alignItems='flex-start'>
          <Col xs={24} justifyContent='flex-end'>
            <Typo type='small' weight={600}>
              {date}
            </Typo>
            <Typo type='small' weight={600} css={{ padding: '0 5px' }}>
              -
            </Typo>
            <Typo type='small' weight={600}>
              {`${timeToRead}`} Min read
              {category && ` in ${category}`}
            </Typo>
          </Col>
        </Row>
      </Link>
    </StyledCard>
  );
};

export default ContentItem;
