import React, { FC, useContext } from 'react';
// import { Link } from 'gatsby';

import { Context } from '../../context/context';

import * as Styles from './language-switcher.styles';
import * as Types from './language-switcher.types';

const LanguageSwitcher: FC<Types.LanguageSwitcherProps> = () => {
  const { language, setLanguage } = useContext(Context);

  function updateLanguage(newLanguage: string): void {
    setLanguage(newLanguage);
  }

  return (
    <Styles.LanguageSwitcher>
      <Styles.LanguageButton
        type="button"
        onClick={() => updateLanguage('en')}
        disabled={language === 'en'}
        isActive={language === 'en'}
      >
        EN
      </Styles.LanguageButton>
      <Styles.LanguageButton
        type="button"
        onClick={() => updateLanguage('de')}
        disabled={language === 'de'}
        isActive={language === 'de'}
      >
        DE
      </Styles.LanguageButton>
    </Styles.LanguageSwitcher>
  );
};

export default LanguageSwitcher;
