import { keyframes } from '@emotion/core';

export const bounce = (down: number = 30) => keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -${down}px, 0);
  }

  70% {
    transform: translate3d(0, -${down / 2}px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

export default bounce;
