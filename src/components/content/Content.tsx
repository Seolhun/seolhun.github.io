import styled from '@emotion/styled';

import { media } from '../../utils/media';

interface ContentProps {
  theme?: any;
}

const Content = styled.div<ContentProps>(({ theme }) => {
  return {
    boxShadow: '0 4px 120px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem',
    padding: '2rem 4rem',
    backgroundColor: theme.colors.bg,
    marginTop: '-4rem',

    zIndex: 9000,

    form: {
      p: {
        label: {
          display: 'block',
        },
        input: {
          display: 'block',
          minWidth: '275px',
        },
        textarea: {
          resize: 'vertical',
          minHeight: '150px',
          width: '100%',
        }
      }
    },

    [`@media ${media.tablet}`]: {
      padding: '3rem 3rem',
    },
    [`@media ${media.phone}`]: {
      padding: '2rem 1.5rem',
    }
  }
});

export default Content;
