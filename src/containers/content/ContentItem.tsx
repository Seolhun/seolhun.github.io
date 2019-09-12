import React, { FC } from 'react';

import { Post } from '@/models';
import styled from '@emotion/styled';
import { Card, Col, Row } from '@seolhun/localize-components';
import { Chip } from '@seolhun/localize-components-atomic';

export interface ContentItemProps extends Post {}

const StyledCard = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    margin: '15px 30px',
    padding: '10px 30px',
  };
});

export const ContentItem: FC<ContentItemProps> = (props: ContentItemProps) => {
  const { frontmatter, timeToRead } = props;
  const { title, subTitle, tags, date } = frontmatter;

  return (
    <StyledCard>
      <Row alignItems='flex-start'>
        <Col xs={24}>
          <h2>{title}</h2>
        </Col>
      </Row>
      {subTitle && (
        <Row alignItems='flex-start'>
          <Col xs={24}>
            <h3>{subTitle}</h3>
          </Col>
        </Row>
      )}
      {tags && (
        <Row alignItems='flex-start'>
          <Col xs={24} sm={18}>
            {tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </Col>
          <Col xs={24} sm={6}>
            <div>{date}</div>
            <span>Min Read {`${timeToRead}`}</span>
          </Col>
        </Row>
      )}
    </StyledCard>
  );
};

export default ContentItem;
