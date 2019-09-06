import { Themes } from '@seolhun/localize-components-styled-types';

const colors = {
  primary: '#72cc96', // Color for buttons or links
  bg: '#fff', // Background color
  white: '#fff',
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
};

const transitions = {
  normal: '0.5s',
};

const fontSize = {
  small: '0.9rem',
  big: '2.9rem',
};

export default {
  primaryColor: 'primary',
  secondaryColor: 'white',

  background: 'white',

  border: {
    color: 'grey',
    radius: '4px',
    shadow: `0px 2px 1px -1px ${Themes.light_grey}, 0px 1px 1px 0px ${
      Themes.light_grey
    }, 0px 1px 3px 0px ${Themes.light_grey}`,
  },
  grid: {
    gutter: '0.5rem',
  },
  row: {
    gutter: '-0.525rem',
  },
  colors,
  transitions,
  fontSize,
};
