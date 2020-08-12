import React, { FC } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Logo from '../logo/logo';
import NavigationFooter from '../navigation-footer/navigation-footer';

import * as Styles from './footer.styles';
import * as Types from './footer.types';

const Footer: FC<Types.FooterProps> = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          copyright {
            text
          }
        }
      }
    }
  `);

  const copyrightText: string = data.site.siteMetadata.copyright.text;
  const year = new Date().getFullYear();

  const copyrightTextWithYear = copyrightText.replace('{year}', year.toString());

  return (
    <Styles.Footer>
      <Styles.LogoWrapper>
        <Logo isLarge={false} />
      </Styles.LogoWrapper>
      <NavigationFooter />
      <Styles.CopyrightText>
        <Link to="/">
          {copyrightTextWithYear}
        </Link>
      </Styles.CopyrightText>
    </Styles.Footer>
  );
};

export default Footer;
