import React, { FC, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Context } from '../../context/context';
import NavigationMain from '../navigation-main/navigation-main';
import LanguageSwitcher from '../language-switcher/language-switcher';

import * as Styles from './menu.styles';
import * as Types from './menu.types';

const Menu: FC<Types.MenuProps> = ({ isMobile }) => {
  const { language } = useContext(Context);

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
    <Styles.Menu isMobileMenu>
      {isMobile ? (
        <>
          <NavigationMain />
          <Styles.GithubLink href={githubLink.link}>
            <img src={image.publicURL} alt={image.name} />
          </Styles.GithubLink>
          <LanguageSwitcher />
        </>
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
