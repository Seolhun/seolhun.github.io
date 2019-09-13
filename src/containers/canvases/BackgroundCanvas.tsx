import styled from '@emotion/styled';

import {
  ILocalizeTheme,
  LocalizeStyledProps,
  LocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import { useCanvas } from './hooks';

export interface BackgroundCanvasProps extends LocalizeStyledProps {}

const StyledBackgroundCanvas = styled.canvas<BackgroundCanvasProps, ILocalizeTheme>(
  ({ mainColor, theme }) => {
    return {
      backgroundColor: mainColor || theme.background || LocalizeTheme.background,
      margin: 0,
      padding: 0,
    };
  },
);

const StyledCanvasContainer = styled.div({
  width: '100%',
  height: '100%',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 0,
});

export const BackgroundCanvas = () => {
  const [cavasRef] = useCanvas();

  return (
    <StyledCanvasContainer>
      <StyledBackgroundCanvas ref={cavasRef} />
    </StyledCanvasContainer>
  );
};

export default BackgroundCanvas;
