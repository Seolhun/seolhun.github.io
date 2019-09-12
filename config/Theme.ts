import { LocalizeThemes } from '@seolhun/localize-components-styled-types';

export const colors = {
  LIGHT: {
    primary: '#72cc96', // Color for buttons or links
    bg: '#fff', // Background color
    white: '#fff',
    grey: {
      dark: 'rgba(0, 0, 0, 0.9)',
      default: 'rgba(0, 0, 0, 0.7)',
      light: 'rgba(0, 0, 0, 0.5)',
      ultraLight: 'rgba(0, 0, 0, 0.25)',
    },
  },
  DARK: {
    primary: '#72cc96', // Color for buttons or links
    bg: '#fff', // Background color
    white: '#fff',
    grey: {
      dark: 'rgba(0, 0, 0, 0.9)',
      default: 'rgba(0, 0, 0, 0.7)',
      light: 'rgba(0, 0, 0, 0.5)',
      ultraLight: 'rgba(0, 0, 0, 0.25)',
    },
  },
};

const fonts = {
  COLOR: {
    highlight: 'royalblue',
    primaryColor: '#282c35',
    secondaryColor: '#282c35',
  },
  SIZE: {
    small: '0.9rem',
    big: '2.9rem',
  },
};

interface ISeolhunThemes {
  DARK: any;
  LIGHT: any;
}

const SeolhunThemes: ISeolhunThemes = {
  LIGHT: {
    primaryColor: 'royalblue',
    secondaryColor: '#fff',
    background: '#fff',
    border: {
      color: 'grey',
      radius: '4px',
      shadow: `0 1px 3px ${LocalizeThemes.light_grey}, 0 1px 2px ${LocalizeThemes.light_grey}`,
    },
    grid: {
      gutter: '0.5rem',
    },
    row: {
      gutter: '-0.525rem',
    },
    fonts,
    colors: colors.LIGHT,
  },
  DARK: {
    primaryColor: '#282c35',
    secondaryColor: '#fff',
    background: '#fff',
    border: {
      color: 'grey',
      radius: '4px',
      shadow: `0 1px 3px ${LocalizeThemes.light_grey}, 0 1px 2px ${LocalizeThemes.light_grey}`,
    },
    grid: {
      gutter: '0.5rem',
    },
    row: {
      gutter: '-0.525rem',
    },
    fonts,
    colors: colors.DARK,
  },
};

export default SeolhunThemes;
