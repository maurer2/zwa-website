import React, { FC, useContext } from 'react';
import { PageProps, StaticQuery, graphql } from 'gatsby';

import { Context } from '../../context/context';

import * as Styles from './navigation-main.styles';
import * as Types from './navigation-main.types';

const NavigationMain: FC<PageProps & Types.NavigationMainProps> = () => {
  const globalContext = useContext(Context);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              mainNavEntries {
                link
                names {
                  en
                  de
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const currentLanguage = 'en';
        // menu entries without home
        const [, ...menuEntries] = data.site.siteMetadata.mainNavEntries;

        return (
          <Styles.NavigationContainer>
            <Styles.NavigationList>
              {menuEntries.map(({ link, names }) => (
                <Styles.NavigationEntry key={link}>
                  <Styles.NavigationLink to={link} activeClassName="active">
                    {names[currentLanguage]}
                  </Styles.NavigationLink>
                </Styles.NavigationEntry>
              ))}
            </Styles.NavigationList>
          </Styles.NavigationContainer>
        );
      }}
    />
  );
};

export default NavigationMain;
