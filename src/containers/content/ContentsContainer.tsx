import { Link } from 'gatsby';
import React, { FC } from 'react';

import styled from '@emotion/styled';
import { Card, Col, Container, Row } from '@seolhun/localize-components';
import Button from '@seolhun/localize-components-button';

const StyledContentContainer = styled(Container)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '.__Localize__Row:not(:last-child)': {
      marginBottom: '15px',
    },
  };
});

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

interface ContentsItem {
  category: string;
  title: string;
  date: string;
  timeToRead: number;
  banner?: string;
  subTitle?: string;
  tags?: string[];
  author?: string;
}

interface ContentsContainerProps {
  items: ContentsItem[];
}

export const ContentsContainer: FC<ContentsContainerProps> = ({ items }) => {
  return (
    <StyledContentContainer>
      <Row>
        {items.map((item) => {
          const { title, subTitle, category, tags, date, timeToRead, author } = item;
          return (
            <Col key={item.title} xs={24} data-aos='fade-up'>
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
            </Col>
          );
        })}
      </Row>
      <Row data-aos='fade-up'>
        <Col xs={24}>
          <Button>더 보기</Button>
        </Col>
      </Row>
    </StyledContentContainer>
  );
};

export default ContentsContainer;
