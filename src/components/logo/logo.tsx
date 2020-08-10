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
      `}
      render={(data) => {
        const [homeLink] = data.site.siteMetadata.mainNavEntries;
        const image = data.allFile.edges[0].node;

        return (
          <Styles.Logo isLarge>
            <Styles.LogoLink
              to={homeLink.link}
              activeClassName="active"
            >
              <Styles.LogoImage src={image.publicURL} alt={image.name} />
            </Styles.LogoLink>
          </Styles.Logo>
        );
      }}
    />
  );
};

export default Logo;
