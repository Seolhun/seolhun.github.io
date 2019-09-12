import { graphql, Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import styled from '@emotion/styled';
import { Card, Container } from '@seolhun/localize-components';
import { kebabCase } from 'lodash';

import { Content, PostHeader, PrevNext, SectionTitle, SEO } from '@/components';
import { Layout } from '@/containers';
import PathContext from '@/models/PathContext';
import Post from '@/models/Post';
import config from 'config/SiteConfig';

import '@/utils/prismjs-theme.css';
import { Typo } from '@seolhun/localize-components-atomic';

const PostContent = styled.div`
  margin-top: 4rem;
`;

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
  const { tags, title, banner, date, category } = frontmatter;

  return (
    <Layout>
      {post && (
        <>
          <SEO postPath={fields.slug} postNode={post} postSEO />
          <Helmet title={`${title} | ${config.siteTitle}`} />
          <PostHeader banner={banner}>
            <Link to='/'>{config.siteTitle}</Link>
            <SectionTitle>
              <Typo type='h1' isHighlight>
                {title}
              </Typo>
            </SectionTitle>
            <div>
              {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
              <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
            </div>
          </PostHeader>
          <Container>
            <Content>
              <PostContent dangerouslySetInnerHTML={{ __html: html }} />
              {tags && (
                <div>
                  Tags: &#160;
                  {tags.map((tag, i) => (
                    <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                      <strong>{tag}</strong> {i < tags.length - 1 ? `, ` : ``}
                    </Link>
                  ))}
                </div>
              )}
              <PrevNext prev={prev} next={next} />
            </Content>
          </Container>
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
