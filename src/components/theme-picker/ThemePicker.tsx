import React from 'react';

import { TwitterPicker, ColorResult } from 'react-color';
import styled from '@emotion/styled';

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

const CurrentColorContainer = styled.div<{ backgroundColor: string }>(({ backgroundColor }) => ({
  position: 'relative',
  backgroundColor,
  height: '30px',
  width: '30px',
  borderRadius: '4px',
  outline: 'none',
  cursor: 'pointer',
}));

const ThemePicker: React.FC<ThemePickerProps> = ({
  currentColor = 'royalBlue',
  onChangeColor,

}) => {
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
        <TwitterPicker
          onChange={onChangeColor}
          color={currentColor}
          triangle="hide"
        />
      ) : (
        <CurrentColorContainer backgroundColor={currentColor} />
      )}
    </CurrentColorWrapper>
  );
};

export {
  ThemePickerProps,
  ThemePicker,
};

export default ThemePicker;
