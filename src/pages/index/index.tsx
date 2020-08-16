import React, { FC } from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

import Layout from '../../components/layout/layout';
import MediaObject from '../../components/media-object/media-object';
// import SEO from '../../components/seo';

import * as Types from './index.types';

const Home: FC<PageProps<Types.IndexPageProps>> = ({ data, path, location }) => {
  const pageTitle = 'Home';

  return (
    <Layout location={location} title={pageTitle}>
      <h1>{pageTitle}</h1>

      <MediaObject
        media={<Avatar gender="male" width="250" height="250" alt="Cat" />}
        content={<LoremIpsum p={4} />}
        hasContentFirst={false}
      />

      <MediaObject
        media={<Avatar gender="male" width="250" height="250" alt="Cat" />}
        content={<LoremIpsum p={4} />}
        hasContentFirst
      />
    </Layout>
  );
};

export default Home;
