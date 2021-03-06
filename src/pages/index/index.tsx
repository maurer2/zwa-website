import React, { FC, useEffect, useState } from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import { throttle } from 'lodash-es';

import Layout from '../../components/layout/layout';
import MediaObject from '../../components/media-object/media-object';
// import SEO from '../../components/seo';

import * as Types from './index.types';
import * as Styles from './index.styles';

const Home: FC<PageProps<Types.IndexPageProps>> = ({ data, path, location }) => {
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const pageTitle = 'Home';

  console.log(data);

  useEffect(() => {
    function handleScroll() {
      const visibilityPositionY = 300;
      const scrollPositionY = window.scrollY;

      setOverlayIsVisible(scrollPositionY > visibilityPositionY);
    }

    // init
    handleScroll();

    const throttledHandleScroll = throttle(handleScroll, 500);

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

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

      <MediaObject
        media={<Avatar gender="male" width="250" height="250" alt="Cat" />}
        content={<LoremIpsum p={4} />}
        hasContentFirst
      />

      <MediaObject
        media={<Avatar gender="male" width="250" height="250" alt="Cat" />}
        content={<LoremIpsum p={4} />}
        hasContentFirst
      />

      <Styles.Overlay isVisible={overlayIsVisible}>
        Overlay
      </Styles.Overlay>
    </Layout>
  );
};

export const pageQuery = graphql`
  query pageQuery {
    allPrismicIndexPage {
      nodes {
        data {
          description {
            html
            raw
            text
          }
          title {
            html
            raw
            text
          }
        }
      }
      edges {
        node {
          data {
            description {
              html
              raw
              text
            }
            title {
              html
              raw
              text
            }
          }
        }
      }
    }
    allPrismicTest {
      nodes {
        data {
          image {
            alt
            copyright
            url
            thumbnails
          }
          text {
            html
            raw
            text
          }
        }
      }
    }
  }
`;

export default Home;
