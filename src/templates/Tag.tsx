import Link from 'gatsby-link';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Col, Container, Row } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';

import { Article, PostHeader, SEO } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'siteMetadata';

const TagTemplate = ({ pathContext }: PageProps) => {
  const { posts, tagsName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tagsName}"`;

  return (
    <Layout>
      <SEO isPostSEO={false} />
      <Helmet title={`${tagsName} | ${config.siteTitle}`} />
      <Container>
        <Row>
          <Col xs={24}>
            <PostHeader>
              <Typo type="h1" weight={800} isHighlight>
                Category &ndash; {tagsName}
              </Typo>
              <Typo type="small" weight={500}>
                {subline} (See <Link to="/categories">all categories</Link>)
              </Typo>
            </PostHeader>
          </Col>
        </Row>
        <Row flexDirection="column">
          {posts.map((post) => (
            <Col xs={24} key={post.fields.slug}>
              <Article
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
                timeToRead={post.timeToRead}
                slug={post.fields.slug}
                category={post.frontmatter.category}
                banner={post.frontmatter.banner}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default TagTemplate;
