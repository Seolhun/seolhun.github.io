import config from 'config/SiteConfig';
import Typography from 'typography';

const headerFontFamilies = config.headerFontFamily.map((font) => {
  return {
    name: font,
    styles: ['700'],
  };
});

const bodyFontFamilies = config.bodyFontFamily.map((font) => {
  return {
    name: font,
    styles: ['400'],
  };
});

export const typography = new Typography({
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.65,
  scaleRatio: 3.15,
  headerFontFamily: [...config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [...config.bodyFontFamily, 'sans-serif'],
  headerWeight: 700,
  googleFonts: [...headerFontFamilies, ...bodyFontFamilies],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
