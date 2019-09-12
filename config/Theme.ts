import { LocalizeThemes } from '@seolhun/localize-components-styled-types';

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
    clickableColor: 'royalblue',
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
  },
  DARK: {
    primaryColor: '#282c35',
    secondaryColor: '#fff',
    clickableColor: '#282c35',
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
  },
};

export default SeolhunThemes;
