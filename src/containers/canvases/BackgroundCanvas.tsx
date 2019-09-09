import styled from '@emotion/styled';

import { LocalizeStyledProps, LocalizeTheme } from '@seolhun/localize-components-styled-types';

interface BackgroundCanvasProps extends LocalizeStyledProps {}

const BackgroundCanvas = styled.canvas<BackgroundCanvasProps>(({ theme, mainColor }) => {
  return {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'fixed',

    backgroundColor: mainColor || LocalizeTheme.background,

    margin: 0,
    padding: 0,
    zIndex: 0,
  };
});

export default BackgroundCanvas;
