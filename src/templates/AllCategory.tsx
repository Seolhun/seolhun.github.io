import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';
import { kebabCase } from 'lodash';

import { Content, PostHeader, SectionTitle, Title } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'config/SiteConfig';

export default class AllCategoryTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <Layout>
          <Helmet title={`Categories | ${config.siteTitle}`} />
          <PostHeader>
            <Link to='/'>{config.siteTitle}</Link>
            <SectionTitle>Categories</SectionTitle>
          </PostHeader>
          <Container>
            <Content>
              {categories.map((category, index: number) => (
                <Title key={index}>
                  <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
                </Title>
              ))}
            </Content>
          </Container>
        </Layout>
      );
    }
  }
}
