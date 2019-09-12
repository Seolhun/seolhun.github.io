import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';
import { kebabCase } from 'lodash';

import { Article, Content, PostHeader, SectionTitle } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'config/SiteConfig';

const Category = ({ pathContext }: PageProps) => {
  const { posts, categoryName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${categoryName}"`;

  return (
    <Layout>
      <Helmet title={`${categoryName} | ${config.siteTitle}`} />
      <PostHeader>
        <Link to='/'>{config.siteTitle}</Link>
        <SectionTitle>Category &ndash; {categoryName}</SectionTitle>
        <div>
          {subline} (See <Link to='/categories'>all categories</Link>)
        </div>
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
