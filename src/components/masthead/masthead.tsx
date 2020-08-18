import React, {
  FC, useEffect, useState, useContext,
} from 'react';

import Logo from '../logo/logo';
import Menu from '../menu/menu';
import { Context } from '../../context/context';

import * as Styles from './masthead.styles';
import * as Types from './masthead.types';

const Masthead: FC<Types.MastheadProps> = () => {
  const { isXS, isSM } = useContext(Context);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  const isMobile = isXS || isSM;

  function toggleMobileMenu() {
    setMobileMenuIsVisible((prevMobileMenuIsVisible) => !prevMobileMenuIsVisible);
  }

  return (
    <Styles.Masthead>
      <Logo />
      <Menu
        isMobile={isMobile}
        mobileMenuIsVisible={mobileMenuIsVisible}
        toggleMobileMenuCB={toggleMobileMenu}
      />
      {isMobile && (
        <Styles.MenuToggle onClick={toggleMobileMenu} type="button">Menu</Styles.MenuToggle>
      )}
    </Styles.Masthead>
  );
};

export default Masthead;
