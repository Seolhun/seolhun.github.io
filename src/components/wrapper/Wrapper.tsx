import styled from '@emotion/styled';

import { media } from '../../utils/media';

export interface WrapperProps {
  isFullWidth?: boolean;
}

const Wrapper = styled.div<WrapperProps>(({
  isFullWidth,
}) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: isFullWidth ? '100%' : '100rem',
    padding: isFullWidth ? '0' : '0 6rem',

    [`@media ${media.tablet}`]: {
      padding: isFullWidth ? '0' : '0 3rem',
    },
    [`@media ${media.phone}`]: {
      padding: isFullWidth ? '0' : '0 1rem',
    }
  }
});

export default Wrapper;
