import React, { FC, useContext } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import { Context } from '../../context/context';

import * as Styles from './logo.styles';
import * as Types from './logo.types';

const Logo: FC<Types.LogoProps> = () => {
  const { language } = useContext(Context);

  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
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
        const [homeLink] = data.site.siteMetadata.mainNavEntries;

        return (
          <Styles.Logo isLarge>
            <Styles.LogoLink
              to={homeLink.link}
              activeClassName="active"
            >
              {homeLink.names[language]}
            </Styles.LogoLink>
          </Styles.Logo>
        );
      }}
    />
  );
};

export default Logo;
