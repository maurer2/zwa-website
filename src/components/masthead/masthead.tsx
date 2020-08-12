import React, { FC, useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import NavigationMain from '../navigation-main/navigation-main';
import LanguageSwitcher from '../language-switcher/language-switcher';
import Logo from '../logo/logo';

import * as Styles from './masthead.styles';
import * as Types from './masthead.types';

const Masthead: FC<Types.MastheadProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  const data = useStaticQuery(graphql`
    query GithubQuery {
      site {
        siteMetadata {
          githubLink {
            link
            names {
              de
              en
            }
          }
        }
      }
      allFile(filter: {extension: {eq: "svg"}, name: {eq: "github-icon"}}) {
        edges {
          node {
            id
            relativePath
            publicURL
            name
            root
            extension
          }
        }
      }
    }
  `);

  const { githubLink } = data.site.siteMetadata;
  const image = data.allFile.edges[0].node;

  useEffect(() => {
    const mq: MediaQueryList = window.matchMedia('(max-width: 767px)');

    function mqCB(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    mq.addListener(mqCB);

    // call manually once on page load
    setIsMobile(mq.matches);

    return () => {
      mq.removeListener(mqCB);
    };
  }, []);

  return (
    <Styles.Masthead>
      <Logo isLarge />
      {isMobile
        ? <button type="button">Menu</button>
        : (
          <>
            <NavigationMain />
            <Styles.GithubLink href={githubLink.link}>
              <img src={image.publicURL} alt={image.name} />
            </Styles.GithubLink>
            <LanguageSwitcher />
          </>
        )}

    </Styles.Masthead>
  );
};

export default Masthead;
