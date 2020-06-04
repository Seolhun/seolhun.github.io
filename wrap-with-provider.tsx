import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';

import { ILocalizeTheme, LocalizeTheme } from '@seolhun/localize-components-styled-types';

import '@/assets/scss/global.scss';
import '@/i18n';

const globalStyle = (theme: ILocalizeTheme) => css`
  html {
    color: ${theme.fonts.COLOR.primaryColor};
    background-color: ${theme.background};
  }

  .html-lock-scroll {
    overflow: hidden !important;
  }
`;

export default ({ element }) => {
  return (
    <ThemeProvider theme={LocalizeTheme}>
      <Global styles={globalStyle} />
      {element}
    </ThemeProvider>
  );
};
