import React, { FC } from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../../components/layout/layout';
import MediaObject from '../../components/media-object/media-object';
// import SEO from '../../components/seo';

import * as Types from './index.types';

const Home: FC<PageProps<Types.IndexPageProps>> = ({ data, path, location }) => {
  const pageTitle = 'Home';

  return (
    <Layout location={location} title={pageTitle}>
      <h1>{pageTitle}</h1>

      <MediaObject hasContentFirst={false} />

      <MediaObject hasContentFirst />
    </Layout>
  );
};

export default Home;
