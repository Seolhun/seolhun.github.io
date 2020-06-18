import React from 'react';

import styled from '@emotion/styled';
import { Card } from '@seolhun/localize-components';

import { Post } from '@/models';
import { SHLink, Content } from '@/components';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

export interface ContentItemProps extends Post {}

const SHCard = styled(Card)<{}, ILocalizeTheme>(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  textDecoration: 'none',
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
    <SHCard>
      <SHLink to={`/contents/${fields.slug}`}>
        <Content
          date={date}
          excerpt={excerpt}
          timeToRead={timeToRead}
          title={title}
          category={category}
          subTitle={subTitle}
        />
      </SHLink>
    </SHCard>
  );
};

export default ContentItem;
