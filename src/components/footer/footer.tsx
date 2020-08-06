import React, { FC } from 'react';

import Logo from '../logo/logo';
import NavigationFooter from '../navigation-footer/navigation-footer';

import * as Styles from './footer.styles';
import * as Types from './footer.types';

const Footer: FC<Types.FooterProps> = () => (
  <Styles.Footer>
    <Logo isLarge={false} />

    <NavigationFooter />

  </Styles.Footer>
);

export default Footer;
