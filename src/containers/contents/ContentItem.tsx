import React from 'react';

import styled from '@emotion/styled';
import { Card } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';

import { Post } from '@/models';
import { SHLink } from '@/components';

export interface ContentItemProps extends Post {}

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  textDecoration: 'none',
  boxShadow: '1px 2px 4px #cccc, 2px 1px 2px #cccc',
}));

const StyledContentDateTime = styled.div(() => ({
  textAlign: 'right',
}));

export const ContentItem: React.FC<ContentItemProps> = (props: ContentItemProps) => {
  const {
    fields,
    frontmatter,
    timeToRead,
    excerpt,
  } = props;
  const {
    title,
    subTitle,
    date,
    category,
  } = frontmatter;

  return (
    <StyledCard>
      <SHLink to={`/contents/${fields.slug}`}>
        <Typo type="h2" weight={600}>
          {title}
        </Typo>
        {subTitle && <Typo type="p">{subTitle}</Typo>}
        {excerpt && (
          <Typo type="p">{excerpt}</Typo>
        )}
        <StyledContentDateTime>
          <Typo type="p" weight={600}>
            {date}
          </Typo>
          <Typo type="p" weight={600}>
            {`${timeToRead} Min read ${category && `in ${category}`}`}
          </Typo>
        </StyledContentDateTime>
      </SHLink>
    </StyledCard>
  );
};

export default ContentItem;
