import styled from '@emotion/styled';
import { StyledProps, ThemeConfig } from '@seolhun/localize-components-styled-types';

interface BackgroundCanvasProps extends StyledProps {}

const BackgroundCanvas = styled.canvas<BackgroundCanvasProps>(({ theme, mainColor }) => {
  return {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'fixed',

    backgroundColor: mainColor || ThemeConfig.primaryColor,

    margin: 0,
    padding: 0,
    zIndex: 0,
  };
});

export default BackgroundCanvas;
