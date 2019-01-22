import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Main/Article';
import PostHeader from './PostHeader';
import Content from '../Main/Content';
import PostFooter from './PostFooter';

const Post = ({ author, post, facebook, slug }) => {
  const { cover, description, subTitle, tags, title } =
    (post || {}).frontmatter || {};

  const postAuthor = ((post || {}).frontmatter || {}).author;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;

  return (
    <Article>
      <PostHeader
        author={postAuthor}
        cover={cover}
        date={date}
        description={description}
        subTitle={subTitle}
        tags={tags}
        title={title}
      />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} facebook={facebook} />
    </Article>
  );
};

Post.propTypes = {
  // Props
  author: PropTypes.shape({
    html: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  facebook: PropTypes.shape({
    appId: PropTypes.string,
  }).isRequired,
  // Props(isNotRequired)
  post: PropTypes.shape({
    author: PropTypes.string,
    cover: PropTypes.object,
    description: PropTypes.string,
    post: PropTypes.string,
    subTitle: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
