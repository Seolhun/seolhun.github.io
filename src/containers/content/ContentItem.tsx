import { Link } from 'gatsby';
import React, { FC } from 'react';

import styled from '@emotion/styled';
import { Card } from '@seolhun/localize-components';

export interface ContentItemProps {
  category: string;
  title: string;
  date: string;
  timeToRead: number;
  banner?: string;
  subTitle?: string;
  tags?: string[];
  author?: string;
}

const StyledCard = styled(Card)(() => {
  return {
    display: 'flex',
    margin: '15px 30px',
  };
});

const StyledCardItem = styled.div(() => {
  return {
    display: 'flex',
    padding: '15px 30px',
    flexDirection: 'column',
    cursor: 'pointer',
  };
});

export const ContentItem: FC<ContentItemProps> = (props: ContentItemProps) => {
  const { title, subTitle, category, tags, date, timeToRead, author } = props;

  return (
    <StyledCard>
      <StyledCardItem>
        <h2>{title}</h2>
        <span>Min Read {`${timeToRead}`}</span>
        {subTitle && <h3>{subTitle}</h3>}
        {category && <div>{category}</div>}
        {tags && (
          <div>
            {tags.map((tag) => (
              <Link key={tag} to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </div>
        )}
        {author && <div>{author}</div>}
        <div>{date}</div>
      </StyledCardItem>
    </StyledCard>
  );
};

export default ContentItem;
