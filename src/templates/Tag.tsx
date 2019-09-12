import Link from 'gatsby-link';
import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { kebabCase } from 'lodash';

import { Article, Content, PostHeader } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'config/SiteConfig';

const TagTemplate = ({ pathContext }: PageProps) => {
  const { posts, tagsName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tagsName}"`;

  return (
    <Layout>
      <Helmet title={`${'Tags'} | ${config.siteTitle}`} />
      <PostHeader>
        <Typo type='h1' weight={800} isHighlight>
          Category &ndash; {tagsName}
        </Typo>
        <Typo type='small' weight={500}>
          {subline} (See <Link to='/categories'>all categories</Link>)
        </Typo>
      </PostHeader>
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
