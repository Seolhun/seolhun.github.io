import styled from '@emotion/styled';
import { FlexDirectionProperty } from 'csstype';

export interface SHRowProps {
  padded?: boolean | string;
  noWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
}

const SHRow = styled.div<SHRowProps>({
  display: 'flex',
  width: 'auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export { SHRow };

export default SHRow;
