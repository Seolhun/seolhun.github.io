import { graphql, Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import styled from '@emotion/styled';
import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { ILocalizeTheme } from '@seolhun/localize-components-styled-types';
import { Disqus } from 'gatsby-plugin-disqus';
import { kebabCase } from 'lodash';

import { PostHeader, PrevNext, SEO } from '@/components';
import { Layout } from '@/containers';
import PathContext from '@/models/PathContext';
import Post from '@/models/Post';
import SiteConfig from 'config/SiteConfig';

import MarkdownHTML from '@/components/markdown/MarkdownHTML';
import '@/utils/prismjs-theme.css';

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
  const disqusConfig = {
    url: `${SiteConfig.siteUrl}/contents/${fields.slug}`,
    identifier: fields.slug,
    title: frontmatter.title,
  };

  return (
    <Layout>
      {post && (
        <>
          <SEO postPath={fields.slug} postNode={post} isPostSEO />
          <Helmet title={`${title.substring(0, 62)}...`} />
          <Container>
            <Row>
              <Col xs={24}>
                <PostHeader>
                  <Typo type='h1' weight={800} isHighlight>
                    {title}
                  </Typo>

                  <Typo type='small' weight={500}>
                    {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
                    <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
                  </Typo>
                </PostHeader>
              </Col>
            </Row>
            <MarkdownHTML>
              <PostContent dangerouslySetInnerHTML={{ __html: html }} />
            </MarkdownHTML>
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
            <Row>
              <Col xs={24}>
                <PrevNext prev={prev} next={next} />
              </Col>
            </Row>
            <Row>
              <Col xs={24}>
                <Disqus config={disqusConfig} />
              </Col>
            </Row>
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
      excerpt(pruneLength: 165)
      timeToRead
    }
  }
`;

export default PostPage;
