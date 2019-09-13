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

const StyledContainer = styled.div({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const BackgroundCanvas = () => {
  const [cavasRef] = useCanvas();

  return (
    <StyledContainer>
      <StyledBackgroundCanvas ref={cavasRef} />
    </StyledContainer>
  );
};

export default BackgroundCanvas;
