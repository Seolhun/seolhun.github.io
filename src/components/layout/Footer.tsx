import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

const StyledFooter = styled.footer({
  position: 'relative',
});

const StyledFooterContainer = styled.div({
  textAlign: 'center',
  padding: '3rem 0',
  fontSize: '11px',
});

interface FooterProps {
  children: ReactNode;
}

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <StyledFooter>
      <StyledFooterContainer>{children}</StyledFooterContainer>
    </StyledFooter>
  );
};

export default Footer;
