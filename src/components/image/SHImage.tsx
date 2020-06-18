import React from 'react';
import styled from '@emotion/styled';

import ogImage from '@static/assets/hi-cord.png';

import { SHSkeleton } from '../skeleton';

export interface SHImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;

  height?: string;

  responsive?: boolean;

  defaultImage?: string;
}

const ImageWrapper = styled.span<SHImageProps>(({ width, height, responsive }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: responsive && !width ? '100%' : width || '20px',
  height: responsive && !height ? '100%' : height || '20px',
}));

const ImageContainer = styled.span<SHImageProps>(({ width, height, responsive }) => ({
  width: responsive && !width ? '100%' : width || '20px',
  height: responsive && !height ? '100%' : height || '20px',
}));

const Image = styled.img<SHImageProps>(() => ({
  width: '100%',
  height: '100%',
}));

export const SHImage: React.FC<SHImageProps> = ({
  children,
  width,
  height,
  responsive,
  src,
  defaultImage = ogImage,
  ...props
}) => {
  const ref = React.useRef<HTMLImageElement>(null);
  const [hasError, setError] = React.useState(false);
  const [isLoaded, setLoaded] = React.useState(false);

  const handleImgError = () => {
    if (!ref.current) {
      return;
    }
    ref.current.onerror = () => {
      setError(true);
    };
    ref.current.onload = () => {
      console.error('@@@@');
      setLoaded(true);
    };
  };

  React.useEffect(() => {
    if (ref.current) {
      handleImgError();
    }
  }, [ref.current, src]);

  return (
    <ImageWrapper width={width} height={height} responsive={responsive}>
      <ImageContainer width={width} height={height} responsive={responsive}>
        {isLoaded ? (
          <Image {...props} src={hasError ? defaultImage : src} ref={ref} />
        ) : (
          <SHSkeleton />
        )}
      </ImageContainer>
    </ImageWrapper>
  );
};

export default SHImage;
