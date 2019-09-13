import { graphql, Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import styled from '@emotion/styled';
import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { kebabCase } from 'lodash';

import { PostHeader, PrevNext, SEO } from '@/components';
import { Layout } from '@/containers';
import PathContext from '@/models/PathContext';
import Post from '@/models/Post';
import config from 'config/SiteConfig';

import '@/utils/prismjs-theme.css';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';

const PostContainer = styled(Container)({
  padding: '10px 15px',
});

const PostContent = styled.div<any, ILocalizeTheme>(({ theme }) => {
  return {
    marginTop: '4rem',
    color: theme.fonts.COLOR.primaryColor,
  };
});

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

const PostPage = ({ data, pathContext }: Props) => {
  const { prev, next } = pathContext;
  const post = data.markdownRemark;
  const { timeToRead, fields, frontmatter, html } = data.markdownRemark;
  const { tags, title, date, category } = frontmatter;

  return (
    <Layout>
      {post && (
        <>
          <SEO postPath={fields.slug} postNode={post} postSEO />
          <Helmet title={`${title} | ${config.siteTitle}`} />
          <PostHeader>
            <Typo type='h1' weight={800} isHighlight>
              {title}
            </Typo>
            <Typo type='small' weight={500}>
              {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
              <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
            </Typo>
          </PostHeader>
          <PostContainer>
            <PostContent dangerouslySetInnerHTML={{ __html: html }} />
            {tags && (
              <Typo type='small'>
                Tags: &#160;
                {tags.map((tag, i) => (
                  <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                    <Typo type='small'>{tag}</Typo> {i < tags.length - 1 ? `, ` : ``}
                  </Link>
                ))}
              </Typo>
            )}
            <PrevNext prev={prev} next={next} />
          </PostContainer>
        </>
      )}
    </Layout>
  );
};

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        author
        subTitle
        banner
        category
        tags
        date(formatString: "YYYY.MM.DD")
      }
      timeToRead
    }
  }
`;

export default PostPage;
