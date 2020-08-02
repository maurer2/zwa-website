import React, {
  FC, useEffect, useState, useContext,
} from 'react';
import { PageProps, Link } from 'gatsby';

import { Context } from '../../context/context';
import NavigationMain from '../navigation-main/navigation-main';

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

  const LanguageSwitcher = () => {
    function updateLanguage(newLanguage: string) {
      globalContext.setLanguage(newLanguage);
    }

    return (
      <div className="button-group">
        <button
          type="button"
          onClick={() => updateLanguage('en')}
          disabled={globalContext.language === 'en'}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => updateLanguage('de')}
          disabled={globalContext.language === 'de'}
        >
          DE
        </button>
      </div>
    );
  };

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
            <NavigationMain location={location} />
          </>
        )}

    </Styles.Masthead>
  );
};

export default Masthead;
