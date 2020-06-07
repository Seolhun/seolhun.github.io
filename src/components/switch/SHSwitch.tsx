import React from 'react';

import styled from '@emotion/styled';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

const SWITCH_CIRCLE = 24;
const SWITCH_CONTAINER_WIDTH = SWITCH_CIRCLE * 2 + 2;
const SWITCH_CONTAINER_HEIGHT = SWITCH_CIRCLE + 2;

export interface SHSwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Set this to change SHSwitch checked
   */
  checked: boolean;

  /**
   * Set this to change SHSwitch htmlFor
   */
  htmlFor: string;

  /**
   * Set this to change SHSwitch groupName
   * @default ''
   */
  groupName?: string;

  /**
   * Set this to change SHSwitch useValueKey
   * @default false
   */
  useValueKey?: boolean;

  /**
   * Set this to change SHSwitch valueKey
   * @default 'value'
   */
  valueKey?: string;

  /**
   * Set this to change SHSwitch labelKey
   * @default 'label'
   */
  labelKey?: string;

  /**
   * Set this to change SHSwitch onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;

  /**
   * Set this to change SHSwitch onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;
}

const StyledSHSwitchInput = styled.input({
  opacity: 0,
  width: 0,
  height: 0,
});

const StyledSlider = styled.span<{}, ILocalizeTheme>(
  ({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: theme.primaryColor,
    borderRadius: '35px',
    cursor: 'pointer',
    transition: 'all 0.4s',

    '&:before': {
      content: '""',
      position: 'absolute',
      left: '1px',
      top: '1px',
      height: `${SWITCH_CIRCLE}px`,
      width: `${SWITCH_CIRCLE}px`,
      backgroundColor: theme.background,
      borderRadius: '50%',
      transition: 'all 0.4s',
    },
  }),
);

const StyledSHSwitchLabel = styled.label<{}, ILocalizeTheme>(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  width: `${SWITCH_CONTAINER_WIDTH}px`,
  height: `${SWITCH_CONTAINER_HEIGHT}px`,
  userSelect: 'none',

  [`input:checked + ${StyledSlider}`]: {
    backgroundColor: theme.clickableColor,
  },
  [`input:checked + ${StyledSlider}:before`]: {
    transform: `translateX(${SWITCH_CIRCLE}px)`,
  },
}));

export const SHSwitch: React.FC<SHSwitchProps> = ({
  checked,
  htmlFor = '',
  groupName = '',
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  ...props
}) => {
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <StyledSHSwitchLabel
      key={htmlFor}
      htmlFor={htmlFor}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      <StyledSHSwitchInput
        {...props}
        id={htmlFor}
        checked={checked}
        type="checkbox"
        onChange={handleChecked}
        name={groupName}
      />
      <StyledSlider />
    </StyledSHSwitchLabel>
  );
};

export default SHSwitch;
