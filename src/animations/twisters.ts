import { keyframes } from '@emotion/core';

export const rightTwister = (from: string = '0deg', to: string = '360deg') => keyframes`
  from {
    transform: rotateY(${from})
  }

  to {
    transform: rotateY(${to})
  }
`;

export const leftTwister = (from: string = '360deg', to: string = '0deg') => keyframes`
  from {
    transform: rotateY(${from})
  }

  to {
    transform: rotateY(${to})
  }
`;
