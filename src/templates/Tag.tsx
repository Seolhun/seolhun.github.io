import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';

import { Article, PostHeader, SEO } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';

import siteMetadata from '../../siteMetadata';

const TagTemplate = ({ pathContext }: PageProps) => {
  const { posts, tagsName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tagsName}"`;

  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`${tagsName} | ${siteMetadata.siteTitle}`} />
      <Container>
        <Row>
          <Col xs={24}>
            <PostHeader>
              <Typo type="h1" weight={800} isHighlight>
                Category &ndash;
                {` ${tagsName}`}
              </Typo>
              <Typo type="small" weight={500}>
                {`${subline} (See `}
                <Link to="/categories">all categories</Link>
                {' )'}
              </Typo>
            </PostHeader>
          </Col>
        </Row>
        {posts.map((post) => (
          <Article
            key={post.fields.slug}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            slug={post.fields.slug}
            timeToRead={post.timeToRead}
            title={post.frontmatter.title}
            banner={post.frontmatter.banner}
            category={post.frontmatter.category}
            subTitle={post.frontmatter.subTitle}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default TagTemplate;
