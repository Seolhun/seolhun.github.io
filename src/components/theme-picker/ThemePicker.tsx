import React from 'react';

import { TwitterPicker, ColorResult } from 'react-color';
import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants';

interface ThemePickerProps {
  /**
   * Hex value
   * @default royalBlue
   */
  currentColor?: string;

  /**
   * Set This handler to change color
   */
  onChangeColor?: (color: ColorResult) => void;
}

const CurrentColorWrapper = styled.div({});

const ThemePickerContainer = styled.div({
  [MEDIA_QUERIES.SM]: {
    position: 'fixed',
    right: '3rem',
    top: '0.9rem',
  },
  [MEDIA_QUERIES.XS]: {
    position: 'fixed',
    right: '1rem',
    top: '0.9rem',
  },
});

const CurrentColorContainer = styled.div<{ backgroundColor: string }>(({ backgroundColor }) => ({
  position: 'relative',
  backgroundColor,
  height: '30px',
  width: '30px',
  borderRadius: '4px',
  outline: 'none',
  cursor: 'pointer',
}));

const ThemePicker: React.FC<ThemePickerProps> = ({ currentColor = 'royalBlue', onChangeColor }) => {
  const [isShow, setShow] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const toggleColorByWindowEvent = (event: any) => {
    event.stopPropagation();

    if (ref.current) {
      setShow(ref.current.contains(event.target));
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', toggleColorByWindowEvent);
    return () => {
      document.removeEventListener('click', toggleColorByWindowEvent);
    };
  }, []);

  return (
    <CurrentColorWrapper ref={ref}>
      {isShow ? (
        <ThemePickerContainer>
          <TwitterPicker onChange={onChangeColor} color={currentColor} triangle="hide" />
        </ThemePickerContainer>
      ) : (
        <CurrentColorContainer backgroundColor={currentColor} />
      )}
    </CurrentColorWrapper>
  );
};

export { ThemePickerProps, ThemePicker };

export default ThemePicker;
