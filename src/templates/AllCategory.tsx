import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { kebabCase } from 'lodash';

import { Content, PostHeader, Title } from '@/components';
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
            <Typo type='h1' weight={800} isHighlight>
              Categories
            </Typo>
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
