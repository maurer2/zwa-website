import React, {
  FC, useEffect, useState, useContext,
} from 'react';
import { PageProps, Link } from 'gatsby';

import { Context } from '../../context/context';
import NavigationMain from '../navigation-main/navigation-main';
import LanguageSwitcher from '../language-switcher/language-switcher';

import * as Styles from './masthead.styles';
import * as Types from './masthead.types';

const Masthead: FC<PageProps & Types.MastheadProps> = ({ location }) => {
  const globalContext = useContext(Context);
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
      <Link to="/">
        <figure>Logo</figure>
      </Link>
      {isMobile
        ? <button type="button">Menu</button>
        : (
          <>
            <span>GH</span>
            <LanguageSwitcher />
            <NavigationMain />
          </>
        )}

    </Styles.Masthead>
  );
};

export default Masthead;
