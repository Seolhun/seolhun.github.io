import Link from 'gatsby-link';
import React from 'react';
import Helmet from 'react-helmet';

import { kebabCase } from 'lodash';

import { Article, Container, Content, Header, SectionTitle } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'config/SiteConfig';

const TagTemplate = ({ pathContext }: PageProps) => {
  const { posts, tagName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tagName}"`;

  return (
    <Layout>
      <Helmet title={`${'Tags'} | ${config.siteTitle}`} />
      <Header>
        <Link to='/'>{config.siteTitle}</Link>
        <SectionTitle>Tag &ndash; {tagName}</SectionTitle>
        <div>
          {subline} (See <Link to='/tags'>all tags</Link>)
        </div>
      </Header>
      <Container>
        <Content>
          {posts.map((post: any, index: number) => (
            <Article
              key={index}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              slug={kebabCase(post.frontmatter.title)}
              timeToRead={post.timeToRead}
              category={post.frontmatter.category}
              banner={post.frontmatter.banner}
            />
          ))}
        </Content>
      </Container>
    </Layout>
  );
};

export default TagTemplate;
