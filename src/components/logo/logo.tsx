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
            <Link to={homeLink.link}>{homeLink.names[language]}</Link>
          </Styles.Logo>
        );
      }}
    />
  );
};

export default Logo;
