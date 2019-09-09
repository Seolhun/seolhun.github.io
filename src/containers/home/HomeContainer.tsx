import React from 'react';

import styled from '@emotion/styled';

import { Card, Col, Container, Row } from '@seolhun/localize-components';

import { Profile } from '@/components';
import Mission from '@/containers/mission';
import Button from '@seolhun/localize-components-button';
import SiteConfig from 'config/SiteConfig';

const StyledHomeWrapper = styled(Card)(() => {
  return {
    [`.${Row}`]: {
      marginBottom: '15px',
    },
  };
});

const HomeContainer = () => {
  return (
    <StyledHomeWrapper>
      <Container>
        <Row data-aos='fade-up' data-aos-delay='200' alignItems='center'>
          <Col xs={24} sm={8}>
            <Profile src={SiteConfig.githubOwnerImage} />
          </Col>
          <Col xs={24} sm={16}>
            <Mission />
          </Col>
        </Row>
        <Row data-aos='fade-up' data-aos-delay='250' justifyContent='center'>
          <Col xs={24} sm={18}>
            {SiteConfig.authorSocialLinks.map((link) => (
              <Col key={link.name} xs={12} sm={6} justifyContent='center'>
                <a {...link}>{link.name}</a>
              </Col>
            ))}
          </Col>
        </Row>
        <Row data-aos='fade-up' data-aos-delay='300'>
          <Col xs={24} justifyContent='center'>
            <Button mainColor='primary'>더 보기</Button>
          </Col>
        </Row>
      </Container>
    </StyledHomeWrapper>
  );
};

export default HomeContainer;
