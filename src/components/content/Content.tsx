import styled from '@emotion/styled';

import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

interface ContentProps {
  theme?: any;
}

const Content = styled.div<ContentProps, ILocalizeTheme>(({ theme }) => {
  return {
    boxShadow: '0 4px 120px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem',
    backgroundColor: theme.secondaryColor,
    color: theme.fonts.COLOR.primaryColor,
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
        },
      },
    },
  };
});

export default Content;
