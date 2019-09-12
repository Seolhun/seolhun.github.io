import styled from '@emotion/styled';

import {
  ILocalizeTheme,
  LocalizeStyledProps,
  LocalizeTheme,
} from '@seolhun/localize-components-styled-types';

export interface BackgroundCanvasProps extends LocalizeStyledProps {}

export const BackgroundCanvas = styled.canvas<BackgroundCanvasProps, ILocalizeTheme>(
  ({ mainColor, theme }) => {
    return {
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      position: 'fixed',
      backgroundColor: mainColor || theme.background || LocalizeTheme.background,
      margin: 0,
      padding: 0,
    };
  },
);

export default BackgroundCanvas;
