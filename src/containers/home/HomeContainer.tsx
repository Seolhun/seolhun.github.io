import React from 'react';

import styled from '@emotion/styled';

import { Col, Container, Icon, Row } from '@seolhun/localize-components';

import { rightTwister } from '@/animations';
import { Profile } from '@/components';
import Mission from '@/containers/mission';
import Button from '@seolhun/localize-components-button';
import SiteConfig from 'config/SiteConfig';

const StyledHomeContainer = styled(Container)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '.__Localize__Row:not(:last-child)': {
      marginBottom: '15px',
    },
  };
});

const StyledIconLink = styled.a({
  '&:hover': {
    animation: `${rightTwister()} 1s ease-in-out infinite`,
  },
});

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <Row data-aos='fade-up' alignItems='center'>
        <Col xs={24}>
          <Profile src={SiteConfig.githubOwnerImage} />
          <Mission />
        </Col>
      </Row>
      <Row data-aos='fade-up' data-aos-delay='50'>
        <Col xs={24}>
          {SiteConfig.authorSocialLinks.map((link) => (
            <Col key={link.name} xs={12} sm={6}>
              <StyledIconLink {...link}>
                <Icon src={`/assets/icons/${link.name}.png`} />
              </StyledIconLink>
            </Col>
          ))}
        </Col>
      </Row>
      <Row data-aos='fade-up' data-aos-delay='100'>
        <Col xs={24}>
          <Button>더 보기</Button>
        </Col>
      </Row>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
