import React, { FC, useEffect, useState } from 'react';

import Logo from '../logo/logo';
import Menu from '../menu/menu';

import * as Styles from './masthead.styles';
import * as Types from './masthead.types';

const Masthead: FC<Types.MastheadProps> = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  useEffect(() => {
    const mq: MediaQueryList = window.matchMedia('(max-width: 767px)');

    function mqCB(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    mq.addListener(mqCB);

    // call manually once on page load
    setIsMobile(mq.matches);

    return () => {
      mq.removeListener(mqCB);
    };
  }, []);

  function toggleMobileMenu() {
    setMobileMenuIsVisible((prevMobileMenuIsVisible) => !prevMobileMenuIsVisible);
  }

  return (
    <Styles.Masthead>
      <Logo isLarge />
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
