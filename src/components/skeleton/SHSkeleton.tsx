import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

interface SHSkeletonProps {
  /**
   * Loading progress size
   * @default 50px
   */
  size?: string;

  /**
   * @default secondaryColor
   */
  backgroundColor?: string;

  /**
   * @default uiColor03
   */
  backgroundColor2?: string;

  /**
   * @default uiColor03
   */
  backgroundColor3?: string;
}


const SkeletonWrapper = styled.div<SHSkeletonProps, ILocalizeTheme>(({
  theme,
  size = '50px',
}) => {
  const loading = keyframes`
    0 {
      background-position: -${size}px 0;
    }
    100% {
      background-position: calc(100% + ${size}) 0;
    }
  `;

  return {
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: theme.secondaryColor,
    backgroundImage: `linear-gradient(
      90deg,
      ${theme.secondaryColor},
      ${theme.secondaryColor} 50%,
      ${theme.secondaryColor} 100%
    )`,
    backgroundSize: `${size} 100%`,
    backgroundRepeat: 'no-repeat',
    animation: `${loading} 1.5s infinite`,
  };
});

const SkeletonContainer = styled.div<{}, ILocalizeTheme>(() => ({
  minWidth: '100%',
  minHeight: '100%',
}));

const SHSkeleton: React.FC<SHSkeletonProps> = ({ children, ...props }) => (
  <SkeletonWrapper {...props}>
    <SkeletonContainer>
      {children}
    </SkeletonContainer>
  </SkeletonWrapper>
);

export { SHSkeleton, SHSkeletonProps };
export default SHSkeleton;
