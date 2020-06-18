import styled from '@emotion/styled';

import { getMediaQueryStyles, ColumnValue } from './SHGrid.Helpers';

interface SHColProps {
  xl?: ColumnValue;
  lg?: ColumnValue;
  md?: ColumnValue;
  sm?: ColumnValue;
  xs?: ColumnValue;

  /**
   * @default 8px
   */
  gutter?: string;
  order?: number;
}

const SHCol = styled.div<SHColProps>(({
  order,
  gutter = '8px',
  xl,
  lg,
  md,
  sm,
  xs,
}) => ({
  ...getMediaQueryStyles({
    xl,
    lg,
    md,
    sm,
    xs,
  }),
  boxSizing: 'border-box',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 0,
  order,
  paddingRight: gutter,
  paddingLeft: gutter,
  paddingBottom: '1rem',
}));

export { SHCol, SHColProps };
export default SHCol;
