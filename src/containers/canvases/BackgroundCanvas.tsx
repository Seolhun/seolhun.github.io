import React from 'react';
import styled from '@emotion/styled';

import {
  ILocalizeTheme,
  LocalizeStyledProps,
  LocalizeTheme,
} from '@seolhun/localize-components-styled-types';
import { useCanvas } from './hooks';

export interface BackgroundCanvasProps extends LocalizeStyledProps {}

const StyledCanvasWrapper = styled.div();

const StyledCanvasContainer = styled.div({
  width: '100%',
  height: '100%',
  position: 'fixed',
  overflow: 'hidden',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
});

const StyledBackgroundCanvas = styled.canvas<BackgroundCanvasProps, ILocalizeTheme>(
  ({ mainColor, theme }) => ({
    backgroundColor: mainColor || theme.background || LocalizeTheme.background,
    margin: 0,
    padding: 0,
  }),
);


export const BackgroundCanvas = () => {
  const [cavasRef] = useCanvas();

  return (
    <StyledCanvasWrapper>
      <StyledCanvasContainer>
        <StyledBackgroundCanvas ref={cavasRef} />
      </StyledCanvasContainer>
    </StyledCanvasWrapper>
  );
};

export default BackgroundCanvas;
