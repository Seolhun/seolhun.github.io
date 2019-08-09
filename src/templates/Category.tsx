import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import {
  Layout,
  Wrapper,
  Header,
  Subline,
  Article,
  SectionTitle,
  Content
} from "../components";
import config from "../../config/SiteConfig";
import kebabCase from "lodash/kebabCase";
import PageProps from "../models/PageProps";

const Category = ({ pathContext }: PageProps) => {
  const { posts, categoryName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${categoryName}"`;

  return (
    <Layout>
      <Helmet title={`${categoryName} | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <SectionTitle>Category &ndash; {categoryName}</SectionTitle>
        <Subline sectionTitle light={true}>
          {subline} (See <Link to="/categories">all categories</Link>)
        </Subline>
      </Header>
      <Wrapper>
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
      </Wrapper>
    </Layout>
  );
};

export default Category;
