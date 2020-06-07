import React from 'react';
import { Link } from 'gatsby';
import { LinkProps } from '@reach/router';
import styled from '@emotion/styled';

import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

interface SHLinkProps extends LinkProps<any> {
  isExternal?: boolean;

}

const StyledLink = styled.a<{}, ILocalizeTheme>(({ theme }) => ({
  textDecoration: 'none',

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
      <StyledLink href={to} target="_blank" rel="noreferrer">
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledLink>
      <Link to={to}>{children}</Link>
    </StyledLink>
  );
};

export { SHLinkProps, SHLink };

export default SHLink;
