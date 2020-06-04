// @ts-ignore
import Typography from 'typography';

import siteMetadata from '../../siteMetadata';

const headerFontFamilies = siteMetadata.headerFontFamily.map((font) => ({
  name: font,
  styles: ['700'],
}));

const bodyFontFamilies = siteMetadata.bodyFontFamily.map((font) => ({
  name: font,
  styles: ['400'],
}));

export const typography = new Typography({
  baseFontSize: siteMetadata.baseFontSize,
  baseLineHeight: 1.65,
  scaleRatio: 3.15,
  headerFontFamily: [...siteMetadata.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [...siteMetadata.bodyFontFamily, 'sans-serif'],
  headerWeight: 700,
  googleFonts: [...headerFontFamilies, ...bodyFontFamilies],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
