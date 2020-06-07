import React from 'react';
import { Link } from 'gatsby';
import { LinkProps } from '@reach/router';
import styled from '@emotion/styled';

import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

interface SHLinkProps extends LinkProps<any> {
  isExternal?: boolean;

}

const LinkWrapper = styled.span({});

const LinkContainer = styled.span({
  textDecoration: 'none',
  a: {
    textDecoration: 'none',
  },
});

const StyledLink = styled.a<{}, ILocalizeTheme>(({ theme }) => ({
  '&:hover': {
    color: theme.primaryColor,
  },
  '&:active': {
    color: theme.primaryColor,
  },
}));

const SHLink: React.FC<SHLinkProps> = ({ children, to, isExternal }) => {
  if (isExternal) {
    return (
      <LinkWrapper>
        <LinkContainer>
          <StyledLink href={to} target="_blank" rel="noreferrer">
            {children}
          </StyledLink>
        </LinkContainer>
      </LinkWrapper>
    );
  }
  return (
    <LinkWrapper>
      <LinkContainer>
        <Link to={to}>{children}</Link>
      </LinkContainer>
    </LinkWrapper>
  );
};

export { SHLinkProps, SHLink };

export default SHLink;
