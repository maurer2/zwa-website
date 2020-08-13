import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import NavigationMain from '../navigation-main/navigation-main';
import LanguageSwitcher from '../language-switcher/language-switcher';

import * as Styles from './menu.styles';
import * as Types from './menu.types';

const Menu: FC<Types.MenuProps> = ({ isMobile, mobileMenuIsVisible, toggleMobileMenuCB }) => {
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

  return (
    <Styles.Menu
      isMobile={isMobile}
      mobileMenuIsVisible={mobileMenuIsVisible}
    >
      {isMobile ? (
        <Styles.MenuMobileWrapper>
          <Styles.MenuMobileCloseButton onClick={toggleMobileMenuCB} type="button">
            Close
          </Styles.MenuMobileCloseButton>
          <NavigationMain />
          <Styles.GithubLink href={githubLink.link}>
            <img src={image.publicURL} alt={image.name} />
          </Styles.GithubLink>
          <LanguageSwitcher />
        </Styles.MenuMobileWrapper>
      ) : (
        <>
          <NavigationMain />
          <Styles.GithubLink href={githubLink.link}>
            <img src={image.publicURL} alt={image.name} />
          </Styles.GithubLink>
          <LanguageSwitcher />
        </>
      )}
    </Styles.Menu>
  );
};

export default Menu;
