import React from 'react';
import styled from '@emotion/styled';

import { Typo } from '@seolhun/localize-components-atomic';


interface ContentProps {
  /**
   * Date for blog
   */
  date: string;

  /**
   * excerpt for blog
   */
  excerpt: string;

  /**
   * TimeToRead for blog
   */
  timeToRead: number;

  /**
   * Title for blog
   */
  title: string;

  /**
   * Category for blog
   */
  category?: string;

  /**
   * SubTitle for blog
   */
  subTitle?: string;
}

const ContentWrapper = styled.div({});

const ContentContainer = styled.div({});

const ContentTitle = styled.div(() => ({
  marginTop: '1rem',
}));

const ContentSubTitle = styled.div(() => ({
  marginTop: '1rem',
}));

const ContentDateTime = styled.div(() => ({
  textAlign: 'right',
}));

const Content: React.FC<ContentProps> = ({
  date,
  excerpt,
  timeToRead,
  title,
  category,
  subTitle,
}) => (
  <ContentWrapper>
    <ContentContainer>
      <ContentTitle>
        <Typo type="h2" weight={600} isHighlight>
          {title}
        </Typo>
      </ContentTitle>
      <ContentSubTitle>
        {subTitle && (
          <Typo type="p" weight={500}>{subTitle}</Typo>
        )}
        {excerpt && (
          <Typo type="p">{excerpt}</Typo>
        )}
      </ContentSubTitle>
      <ContentDateTime>
        <Typo type="p" weight={600}>
          {date}
        </Typo>
        <Typo type="p" weight={600}>
          {`${timeToRead} Min read ${category && `in ${category}`}`}
        </Typo>
      </ContentDateTime>
    </ContentContainer>
  </ContentWrapper>
);

export {
  Content,
  ContentProps,
};

export default Content;
