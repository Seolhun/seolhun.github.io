import React, { FC } from 'react';

import { Post } from '@/models';
import styled from '@emotion/styled';
import { Card, Col, Row } from '@seolhun/localize-components';
import { Link } from 'gatsby';

export interface ContentItemProps extends Post {}

const StyledCard = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '10px 30px',
  };
});

const StyledDivider = styled.span(() => {
  return {
    padding: '0 5px',
  };
});

export const ContentItem: FC<ContentItemProps> = (props: ContentItemProps) => {
  const { fields, frontmatter, timeToRead } = props;
  const { title, subTitle, tags, date } = frontmatter;

  return (
    <StyledCard>
      <Link to={`/contents/${fields.slug}`}>
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
                <label key={tag}>{tag}</label>
              ))}
            </Col>
            <Col xs={24} sm={6}>
              <div>
                <span>{date}</span>
                <StyledDivider>-</StyledDivider>
                <span>{`${timeToRead}`} min read </span>
              </div>
            </Col>
          </Row>
        )}
      </Link>
    </StyledCard>
  );
};

export default ContentItem;
