import React, { FC } from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import MediaObject from '../components/media-object/media-object';
import SEO from '../components/seo';

type DataProps = {
  site: {
    buildTime: string,
    siteMetadata: any,
    allMarkdownRemark: any,
  }
}

const Home: FC<PageProps<DataProps>> = ({ data, path, location }) => {
  const pageTitle = 'Home';

  return (
    <Layout location={location} title={pageTitle}>
      <SEO title="All posts" />
      <h1>{pageTitle}</h1>

      <MediaObject hasContentFirst={false} />

      <MediaObject hasContentFirst />
    </Layout>
  );
};

export default Home;
