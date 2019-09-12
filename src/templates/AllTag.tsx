import { Link } from 'gatsby';
import React, { FC } from 'react';
import Helmet from 'react-helmet';

import { Container } from '@seolhun/localize-components';
import { Typo } from '@seolhun/localize-components-atomic';
import { kebabCase } from 'lodash';

import { Content, PostHeader, Title } from '@/components';
import { Layout } from '@/containers';
import PageProps from '@/models/PageProps';
import config from 'config/SiteConfig';

const AllTagTemplate: FC<PageProps> = ({ pathContext }) => {
  const { tags } = pathContext;

  if (!tags) {
    return null;
  }
  return (
    <Layout>
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <PostHeader>
        <Typo type='h1' weight={800} isHighlight>
          Tags
        </Typo>
      </PostHeader>
      <Container>
        <Content>
          {tags.map((tag, index: number) => (
            <Title key={index}>
              <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
            </Title>
          ))}
        </Content>
      </Container>
    </Layout>
  );
};

export default AllTagTemplate;
