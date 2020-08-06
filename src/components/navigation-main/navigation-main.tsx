import React, { FC, useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Context } from '../../context/context';

import * as Styles from './navigation-main.styles';
import * as Types from './navigation-main.types';

const NavigationMain: FC<Types.NavigationMainProps> = () => {
  const { language } = useContext(Context);

  return (
    <StaticQuery
      query={graphql`
        query SiteMainNavQuery {
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
        // menu entries without home
        const [, ...menuEntries] = data.site.siteMetadata.mainNavEntries;

        return (
          <Styles.NavigationContainer>
            <Styles.NavigationList>
              {menuEntries.map(({ link, names }: { link: string, names: any}) => (
                <Styles.NavigationEntry key={link}>
                  <Styles.NavigationLink to={link} activeClassName="active">
                    {names[language]}
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
