import styled from '@emotion/styled';

import { media } from '@/utils/media';

export interface WrapperProps {
  isFullWidth?: boolean;
}

const Wrapper = styled.div<WrapperProps>(() => {
  return {
    display: 'flex',
    flexDirection: 'column',

    margin: '0 auto',
    maxWidth: '100%',
    padding: '0 6rem',

    [`@media ${media.tablet}`]: {
      padding: '0 3rem',
    },
    [`@media ${media.phone}`]: {
      padding: '0 1rem',
    },
  };
});

export default Wrapper;
