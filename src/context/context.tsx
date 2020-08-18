import React, { FC, useState, createContext } from 'react';

import useMQs from '../hooks/useMQs';

export type ContextType = {
  language: string,
  setLanguage: (newLanguage: string) => void;
  isXS: boolean;
  isSM: boolean;
  isMD: boolean;
  isLG: boolean;
  isXL: boolean;
  isXXL: boolean;
}

// default
const Context = createContext<ContextType>({
  language: 'en',
  setLanguage: () => {
    //
  },
  isXS: true,
  isSM: false,
  isMD: false,
  isLG: false,
  isXL: false,
  isXXL: false,
});

const ContextProvider: FC = ({ children }): JSX.Element => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isXS, isSM, isMD, isLG, isXL, isXXL] = useMQs();

  function updateLanguage(language: string): void {
    setCurrentLanguage(language);
  }

  const currentContext: ContextType = {
    language: currentLanguage,
    setLanguage: updateLanguage,
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
    isXXL,
  };

  return <Context.Provider value={currentContext}>{children}</Context.Provider>;
};

export {
  Context, ContextProvider,
};
