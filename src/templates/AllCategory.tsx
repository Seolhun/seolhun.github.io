import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import config from 'config/SiteConfig';
import { Container, Header, Title, SectionTitle, Content } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';

export default class AllCategoryTemplate extends React.PureComponent<
  PageProps
> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <Layout>
          <Helmet title={`Categories | ${config.siteTitle}`} />
          <Header>
            <Link to='/'>{config.siteTitle}</Link>
            <SectionTitle>Categories</SectionTitle>
          </Header>
          <Container>
            <Content>
              {categories.map((category, index: number) => (
                <Title key={index}>
                  <Link to={`/categories/${kebabCase(category)}`}>
                    {category}
                  </Link>
                </Title>
              ))}
            </Content>
          </Container>
        </Layout>
      );
    }
  }
}
