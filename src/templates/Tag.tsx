import React from "react";
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";

import {
  Article,
  Content,
  Header,
  Layout,
  SectionTitle,
  Subline,
  Wrapper
} from "../components";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import PageProps from "../models/PageProps";

const TagTemplate = ({ pathContext }: PageProps) => {
  const { posts, tagName } = pathContext;
  const totalCount = posts ? posts.length : 0;
  const subline = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tagName}"`;

  return (
    <Layout>
      <Helmet title={`${"Tags"} | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <SectionTitle>Tag &ndash; {tagName}</SectionTitle>
        <Subline sectionTitle light={true}>
          {subline} (See <Link to="/tags">all tags</Link>)
        </Subline>
      </Header>
      <Wrapper>
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
      </Wrapper>
    </Layout>
  );
};

export default TagTemplate;
