import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import { Col, Container, Row } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

import { Profile } from '@/containers';
import { Link } from 'gatsby';

const StyledHomeContainer = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  zIndex: 1,

  '.__Localize__Row:not(:last-child)': {
    marginBottom: '15px',
  },
}));

export const HomeContainer = () => {
  const { t } = useTranslation();

  return (
    <StyledHomeContainer>
      <Profile data-aos="fade-up" />
      <Row data-aos="fade-up" data-aos-delay="100">
        <Col xs={24} alignItems="center">
          <Link to="/contents/about-seolhun">
            <Button>{t('common:viewMore')}</Button>
          </Link>
        </Col>
      </Row>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
