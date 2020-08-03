import React, { FC, useEffect, useState } from 'react';
import { PageProps, Link } from 'gatsby';

import NavigationMain from '../navigation-main/navigation-main';
import LanguageSwitcher from '../language-switcher/language-switcher';
import Logo from '../logo/logo';

import * as Styles from './masthead.styles';
import * as Types from './masthead.types';

const Masthead: FC<PageProps & Types.MastheadProps> = ({ location }) => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <Styles.Masthead>
      <Logo />
      {isMobile
        ? <button type="button">Menu</button>
        : (
          <>
            <NavigationMain />
            <span>GH</span>
            <LanguageSwitcher />
          </>
        )}

    </Styles.Masthead>
  );
};

export default Masthead;
