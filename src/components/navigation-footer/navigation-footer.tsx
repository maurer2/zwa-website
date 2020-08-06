import React, { FC, useContext } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import { Context } from '../../context/context';

import * as Styles from './navigation-footer.styles';
import * as Types from './navigation-footer.types';

const NavigationFooter: FC<Types.NavigationFooterProps> = () => {
  const { language } = useContext(Context);

  return (
    <StaticQuery
      query={graphql`
        query SiteFooterNavQuery {
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
        }
      `}
      render={(data) => {
        const menuEntries = data.site.siteMetadata.footerNavEntries;

        return (
          <Styles.NavigationContainer>
            <Styles.NavigationList>
              {menuEntries.map((entry) => {
                const { id, titles, links } = entry;
                console.log(entry.links);

                return (
                  <div key={id} data-id={id}>
                    <h6>{titles[language]}</h6>
                    <ul>
                      {links.map(({ link, names }) => (
                        <li key={link}>
                          <Link to={link} activeClassName="active">
                            {names[language]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </Styles.NavigationList>
          </Styles.NavigationContainer>
        );
      }}
    />
  );
};

export default NavigationFooter;
