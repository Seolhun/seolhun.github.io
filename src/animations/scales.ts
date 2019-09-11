import { keyframes } from '@emotion/core';

export const scaleUp = (from: number = 1.1, to: number = 1.0) => keyframes`
  from {
    transform: scale(${from})
  }

  to {
    transform: scale(${to})
  }
`;

export const scaleDown = (from: number = 1.0, to: number = 1.1) => keyframes`
  from {
    transform: scale(${from})
  }

  to {
    transform: scale(${to})
  }
`;
