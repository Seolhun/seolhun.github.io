import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import config from '../../../content/meta/config';

const styles = (theme) => ({
  header: {
    margin: '0 0 3em',
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: '-0.04em',
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: '0 0 0.4em',
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`,
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: '-0.05em',
    },
  },
  subTitle: {
    color: theme.main.colors.subTitle,
    fontSize: `${theme.main.fonts.subTitle.size}em`,
    lineHeight: theme.main.fonts.subTitle.lineHeight,
    fontWeight: theme.main.fonts.subTitle.weight,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeM}em`,
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeL}em`,
    },
  },
  meta: {
    fontSize: `${theme.main.fonts.meta.size}em`,
    fontWeight: theme.main.fonts.meta.weight,
    color: theme.main.colors.meta,
    textAlign: 'right',
    padding: '0.1em 0',
  },
  author: {
    color: theme.main.colors.subTitle,
    textDecoration: 'none',
  },
  postCover: {
    display: 'table-column',
    margin: 'auto',
  },
});

const PostHeader = ({ author, classes, cover, date, subTitle, title }) => {
  function myDate(dateString) {
    const dateObj = new Date(dateString).toUTCString();
    const dateToShow = dateObj
      .split(' ')
      .slice(0, 4)
      .join(' ');

    return dateToShow;
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.subTitle}>{subTitle}</h2>
      <div className={classes.meta}>{myDate(date)}</div>
      <div className={`${classes.meta} ${classes.author}`}>
        <a href={config.github} rel="noopener noreferrer" target="_blank">
          {author}
        </a>
      </div>
      <div>
        <img
          className={classes.postCover}
          src={cover.childImageSharp.resize.src}
          alt=""
        />
      </div>
    </header>
  );
};

PostHeader.propTypes = {
  // Props
  classes: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  // Props(isNotRequired)
  author: PropTypes.string,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      resize: PropTypes.shape({
        src: PropTypes.string,
      }),
    }),
  }),
  description: PropTypes.string,
  subTitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

PostHeader.defaultProps = {
  // Props(isNotRequired)
  author: config.authorName,
  cover: '',
  description: config.siteDescription,
  subTitle: config.shortSiteTitle,
  tags: [],
  title: config.siteTitle,
};

export default injectSheet(styles)(PostHeader);
