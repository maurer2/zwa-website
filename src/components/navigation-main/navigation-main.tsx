import React, { FC, useContext, Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Context } from '../../context/context';

import * as Styles from './navigation-main.styles';
import * as Types from './navigation-main.types';

const NavigationMain: FC<Types.NavigationMainProps> = () => {
  const { language } = useContext(Context);
  const data = useStaticQuery(graphql`
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
  `);

  const [, ...menuEntries] = data.site.siteMetadata.mainNavEntries;

  return (
    <Styles.NavigationContainer>
      {menuEntries.map(({ link, names }: { link: string, names: any}) => (
        <Fragment key={link}>
          <Styles.NavigationLink to={link} activeClassName="active">
            {names[language]}
          </Styles.NavigationLink>
        </Fragment>
      ))}
    </Styles.NavigationContainer>
  );
};

export default NavigationMain;
