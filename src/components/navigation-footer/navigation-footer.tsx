import React, { FC, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Context } from '../../context/context';

import * as Styles from './navigation-footer.styles';
import * as Types from './navigation-footer.types';

const NavigationFooter: FC<Types.NavigationFooterProps> = () => {
  const { language } = useContext(Context);

  const data = useStaticQuery(graphql`
    query SiteFooterNavigationQuery {
      site {
        siteMetadata {
          footerNavEntries {
            links {
              link
              names {
                de
                en
              }
            }
            titles {
              de
              en
            }
            id
          }
        }
      }
      allFile(filter: {extension: {eq: "svg"}, name: {eq: "logo"}}) {
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

  const menuEntries = data.site.siteMetadata.footerNavEntries;
  const logo = data.allFile.edges[0].node;

  return (
    <Styles.NavigationList>
      {menuEntries.map((entry) => {
        const { id, titles, links } = entry;

        return (
          <Styles.NavigationEntry key={id} data-id={id}>
            <Styles.NavigationTitle>
              {titles[language]}
            </Styles.NavigationTitle>
            <Styles.SubNavigationList>
              {links.map(({ link, names }) => (
                <Styles.SubNavigationEntry key={link}>
                  <Styles.SubNavigationLink to={link} activeClassName="active">
                    {names[language]}
                  </Styles.SubNavigationLink>
                </Styles.SubNavigationEntry>
              ))}
            </Styles.SubNavigationList>
          </Styles.NavigationEntry>
        );
      })}
    </Styles.NavigationList>
  );
};

export default NavigationFooter;
