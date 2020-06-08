import { css } from '@emotion/core';

import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

export default (theme: ILocalizeTheme) => css`
  html, body {
    background-color: ${theme.background};
  }
  a {
    text-decoration: none;
    color: ${theme.primaryColor};
  }
`;
