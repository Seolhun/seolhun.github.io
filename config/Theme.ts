import { LocalizeThemes } from '@seolhun/localize-components-styled-types';

const fontSize = {
  SIZE: {
    h1: '2.4rem',
    h2: '2.2rem',
    h3: '2.0rem',
    h4: '1.8rem',
    h5: '1.6rem',
    h6: '1.4rem',
    p: '1.1rem',
    big: '3rem',
    medium: '1.5rem',
    small: '1.0rem',
  },
};

const fonts = {
  LIGHT: {
    COLOR: {
      highlightColor: 'royalblue',
      primaryColor: '#282c35',
      secondaryColor: '#282c35',
    },
    ...fontSize,
  },
  DARK: {
    COLOR: {
      highlightColor: 'royalblue',
      primaryColor: '#fff',
      secondaryColor: '#f9f5f5',
    },
    ...fontSize,
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
      containerGutter: {
        right: '15px',
        left: '15px',
      },
      rowGutter: {
        top: '1rem',
        right: '-15px',
        left: '-15px',
      },
      columnGutter: {
        top: '0.75rem',
        right: '0.75rem',
        left: '0.75rem',
        bottom: '0.75rem',
      },
    },
    fonts: fonts.LIGHT,
  },
  DARK: {
    primaryColor: '#fff',
    secondaryColor: '#373c49',
    clickableColor: '#fff',
    background: '#282c35',
    border: {
      color: 'grey',
      radius: '4px',
      shadow: `0 1px 3px ${LocalizeThemes.light_grey}, 0 1px 2px ${LocalizeThemes.light_grey}`,
    },
    grid: {
      containerGutter: {
        right: '15px',
        left: '15px',
      },
      rowGutter: {
        top: '1rem',
        right: '-15px',
        left: '-15px',
      },
      columnGutter: {
        top: '0.75rem',
        right: '0.75rem',
        left: '0.75rem',
        bottom: '0.75rem',
      },
    },
    fonts: fonts.DARK,
  },
};

export default SeolhunThemes;
