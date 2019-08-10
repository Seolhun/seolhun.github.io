import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import { Jumbotron } from "@seolhun/localize-components";
import { Button } from "@seolhun/localize-components-atomic";

import { Layout, Wrapper } from "../components";
import config from "../../config/SiteConfig";

const IndexPage = () => {
  return (
    <Layout>
      <Wrapper isFullWidth={true}>
        <Helmet title={`Homepage | ${config.siteTitle}`} />
        <Jumbotron>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
          <Link to="/contents">
            <Button>Contents</Button>
          </Link>
          <Link to="/tags">
            <Button>Tags</Button>
          </Link>
          <Link to="/categories">
            <Button>Categories</Button>
          </Link>
        </Jumbotron>
      </Wrapper>
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
