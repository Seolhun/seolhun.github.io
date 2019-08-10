import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import {
  Container,
} from "../components";
import {
  Layout,
} from "../containers";
import config from "../../config/SiteConfig";

import HomeView from "../views/HomeView";
import StoryView from "../views/StoryView";
import TechView from "../views/TechView";
import ContactView from "../views/ContactView";

const IndexPage = () => {
  return (
    <Layout>
      <Container isFullWidth>
        <Helmet title={`Homepage | ${config.siteTitle}`} />
        <HomeView />
        <StoryView />
        <TechView />
        <ContactView />
      </Container>
    </Layout>
  );
};

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;

export default IndexPage;
