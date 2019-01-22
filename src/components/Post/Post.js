import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Main/Article';
import PostHeader from './PostHeader';
import Content from '../Main/Content';
import PostFooter from './PostFooter';

const Post = ({ post, author, slug, facebook }) => {
  const title = ((post || {}).frontmatter || {}).title;
  const subTitle = ((post || {}).frontmatter || {}).subTitle;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;

  return (
    <Article>
      <PostHeader title={title} subTitle={subTitle} date={date} />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} facebook={facebook} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    post: PropTypes.string,
    author: PropTypes.string,
    slug: PropTypes.string,
    facebook: PropTypes.string,
  }).isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
};

export default Post;
