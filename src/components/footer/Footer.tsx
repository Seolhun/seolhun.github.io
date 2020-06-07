import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer({
  position: 'relative',
});

const StyledFooterContainer = styled.div({
  textAlign: 'center',
  padding: '3rem 0',
  fontSize: '11px',
});

interface FooterProps {
  children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => (
  <StyledFooter>
    <StyledFooterContainer>{children}</StyledFooterContainer>
  </StyledFooter>
);

export default Footer;
