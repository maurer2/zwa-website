import React, { FC, useEffect, useState } from 'react';
import { PageProps, Link } from 'gatsby';

import NavigationMain from '../navigation-main/navigation-main';

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
      <Link to="/">
        <figure>Logo</figure>
      </Link>
      {isMobile
        ? <button type="button">Menu</button>
        : (
          <>
            <span>GH</span>
            <span>DE/EN</span>
            <NavigationMain location={location} />
          </>
        )}

    </Styles.Masthead>
  );
};

export default Masthead;
