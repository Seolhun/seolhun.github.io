import React from 'react';

import styled from '@emotion/styled';

import { Col, Container, Row } from '@seolhun/localize-components';

import { Profile } from '@/components';
import Mission from '@/containers/mission';
import Button from '@seolhun/localize-components-button';
import SiteConfig from 'config/SiteConfig';

const StyledHomeWrapper = styled.div(() => {
  return {
    [`${Row}:not(:last-of-type)`]: {
      marginBottom: '15px',
    },
  };
});

const HomeContainer = () => {
  return (
    <StyledHomeWrapper>
      <Container>
        <Row data-aos='fade-up' data-aos-delay='200'>
          <Col xs={24} css={{ alignItems: 'center' }}>
            <Profile src={SiteConfig.githubOwnerImage} />
            <Mission />
          </Col>
        </Row>
        <Row data-aos='fade-up' data-aos-delay='250' css={{ justifyContent: 'center' }}>
          <Col xs={18}>
            {SiteConfig.authorSocialLinks.map((link) => (
              <Col xs={6} css={{ justifyContent: 'center' }}>
                <a {...link}>{link.name}</a>
              </Col>
            ))}
          </Col>
        </Row>
        <Row data-aos='fade-up' data-aos-delay='300'>
          <Col xs={24} css={{ justifyContent: 'center' }}>
            <Button mainColor='primary'>더 보기</Button>
          </Col>
        </Row>
      </Container>
    </StyledHomeWrapper>
  );
};

export default HomeContainer;
