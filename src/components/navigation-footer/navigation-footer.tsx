import React, { FC, useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
      }}
    />
  );
};

export default NavigationFooter;
