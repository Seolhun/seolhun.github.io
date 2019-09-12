import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { kebabCase } from 'lodash';

import { Article, Content, PostHeader } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import SiteConfig from 'config/SiteConfig';

const Category = ({ pathContext }: PageProps) => {
  const { posts, categoryName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${categoryName}"`;

  return (
    <Layout>
      <Helmet title={`${categoryName} | ${SiteConfig.siteTitle}`} />
      <PostHeader>
        <Typo type='h1' weight={800} isHighlight>
          Category &ndash; {categoryName}
        </Typo>
        <Typo type='small' weight={500}>
          {subline} (See <Link to='/categories'>all categories</Link>)
        </Typo>
      </PostHeader>
      <Container>
        <Content>
          {posts.map((post: any, index) => (
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

export default Category;
