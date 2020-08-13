import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as Styles from './logo.styles';
import * as Types from './logo.types';

const Logo: FC<Types.LogoProps> = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const [homeLink] = data.site.siteMetadata.mainNavEntries;
  const image = data.allFile.edges[0].node;

  return (
    <Styles.Logo>
      <Styles.LogoLink
        to={homeLink.link}
        activeClassName="active"
      >
        <Styles.LogoImage src={image.publicURL} alt={image.name} />
      </Styles.LogoLink>
    </Styles.Logo>
  );
};

export default Logo;
