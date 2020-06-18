/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
const COLUM_COTUNT = 24;

interface ResponsiveValue {
  span: number;
  offset?: number;
}

type ColumnValue = number | ResponsiveValue;

enum MediaQueryListEnum {
  XL = 1200, // 900 ~ 1199
  LG = 900, // 900 ~ 1199
  MD = 600, // 600 ~ 899
  SM = 480, // 480 ~ 599
  XS = 0, // 0 ~ 479
}

interface GetMediaQueryStylesProps {
  xl?: ColumnValue;
  lg?: ColumnValue;
  md?: ColumnValue;
  sm?: ColumnValue;
  xs?: ColumnValue;
}

const _hasOffset = (columnValue: ColumnValue) => {
  if (typeof columnValue !== 'object') {
    return false;
  }
  if (!columnValue.offset || columnValue.offset <= 0) {
    return false;
  }
  return true;
};

const _isBeforeOffset = (columnValue: ColumnValue) => {
  if (!_hasOffset(columnValue)) {
    return false;
  }

  const keys = Object.keys(columnValue).map((value) => value);
  return keys[0] ? keys[0] === 'offset' : false;
};

const _buildDefaultGridStyle = (sizeValue: number) => ({
  flexGrow: 0,
  width: `${(sizeValue / COLUM_COTUNT) * 100}%`,
  display: sizeValue === 0 ? 'none' : 'block',
  marginLeft: 0,
  marginRight: 0,
});

const buildGridStyle = (columnValue: ColumnValue) => {
  if (typeof columnValue !== 'object') {
    return _buildDefaultGridStyle(columnValue);
  }

  const styles = _buildDefaultGridStyle(columnValue.span);
  if (!_hasOffset(columnValue)) {
    return styles;
  }

  const { offset = 0 } = columnValue;
  Object.assign(styles, _isBeforeOffset(columnValue)
    ? {
      marginLeft: `${(offset / COLUM_COTUNT) * 100}%`,
    }
    : {
      marginRight: `${(offset / COLUM_COTUNT) * 100}%`,
    });
  return styles;
};

const createMediaQuery = (media: keyof typeof MediaQueryListEnum) => {
  switch (media) {
    case 'XL': {
      return `@media (min-width: ${MediaQueryListEnum.XL}px)`;
    }
    case 'LG': {
      return `@media (min-width: ${MediaQueryListEnum.LG}px) and (max-width: ${MediaQueryListEnum.XL - 1}px)`;
    }
    case 'MD': {
      return `@media (min-width: ${MediaQueryListEnum.MD}px) and (max-width: ${MediaQueryListEnum.LG - 1}px)`;
    }
    case 'SM': {
      return `@media (min-width: ${MediaQueryListEnum.SM}px) and (max-width: ${MediaQueryListEnum.MD - 1}px)`;
    }
    case 'XS': {
      return `@media (min-width: ${MediaQueryListEnum.XS}px) and (max-width: ${MediaQueryListEnum.SM - 1}px)`;
    }
    default: {
      return `@media (min-width: ${MediaQueryListEnum.XS}px)`;
    }
  }
};

const getMediaQueryStyles = (columnValues: GetMediaQueryStylesProps) => {
  const {
    xl,
    lg,
    md,
    sm,
    xs,
  } = columnValues;
  return {
    [createMediaQuery('XL')]: {
      ...buildGridStyle(xl || lg || md || sm || xs || COLUM_COTUNT),
    },
    [createMediaQuery('LG')]: {
      ...buildGridStyle(lg || md || sm || xs || COLUM_COTUNT),
    },
    [createMediaQuery('MD')]: {
      ...buildGridStyle(md || sm || xs || COLUM_COTUNT),
    },
    [createMediaQuery('SM')]: {
      ...buildGridStyle(sm || xs || COLUM_COTUNT),
    },
    [createMediaQuery('XS')]: {
      ...buildGridStyle(xs || COLUM_COTUNT),
    },
  };
};

export {
  ColumnValue,
  MediaQueryListEnum,
  buildGridStyle,
  createMediaQuery,
  getMediaQueryStyles,
};

export default {
  MediaQueryListEnum,
  buildGridStyle,
  createMediaQuery,
  getMediaQueryStyles,
};
