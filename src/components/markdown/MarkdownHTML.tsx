import styled from '@emotion/styled';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

interface MarkdownHTMLProps {}

const MarkdownHTML = styled.div<MarkdownHTMLProps, ILocalizeTheme>(({ theme }) => {
  return {
    'h1, h2, h3': {
      marginTop: '3rem',
    },
    blockquote: {
      marginLeft: 0,
      paddingLeft: '1.5rem',
      borderLeft: `5px solid ${theme.primaryColor}`,
    },
    'code.language-text': {
      background: `${theme.primaryColor} !important`,
      color: theme.secondaryColor,
    },
    'a > svg': {
      fill: `${theme.primaryColor} !important`,
    },
  };
});

export default MarkdownHTML;
