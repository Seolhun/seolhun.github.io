import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from '../components/Main/';
import { connect } from 'react-redux';

import { setNavigatorPosition, setNavigatorShape } from '../state/store';
import { moveNavigatorAside } from '../utils/shared';
import Post from '../components/Post/';
import Footer from '../components/Footer/';
import Seo from '../components/Seo';

require('core-js/fn/array/find');
require('prismjs/themes/prism-okaidia.css');

class PostTemplate extends Component {
  moveNavigatorAside = moveNavigatorAside.bind(this);

  componentDidMount() {
    if (this.props.navigatorPosition === 'is-featured') {
      this.moveNavigatorAside();
    }
  }

  render() {
    const { data, pathContext } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <Main>
        <Post
          author={data.author}
          facebook={facebook}
          post={data.post}
          slug={pathContext.slug}
        />
        <Footer footnote={data.footnote} />
        <Seo data={data.post} facebook={facebook} />
      </Main>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    isWideScreen: state.isWideScreen,
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTemplate);

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      fields {
        slug
        prefix
      }
      frontmatter {
        author
        category
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
        description
        subTitle
        tags
        title
      }
    }
    author: markdownRemark(id: { regex: "/author/" }) {
      id
      html
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
