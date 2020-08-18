import React, { FC, useState, createContext } from 'react';

import useMQs from '../hooks/useMQs';

export type ContextType = {
  language: string,
  setLanguage: (newLanguage: string) => void;
  isXS: boolean;
}

// default
const Context = createContext<ContextType>({
  language: 'en',
  setLanguage() {
    //
  },
  isXS: false,
});

const ContextProvider: FC = ({ children }): JSX.Element => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isXS] = useMQs();

  function updateLanguage(language: string): void {
    setCurrentLanguage(language);
  }

  const currentContext: ContextType = {
    language: currentLanguage,
    setLanguage: updateLanguage,
    isXS,
  };

  return <Context.Provider value={currentContext}>{children}</Context.Provider>;
};

export {
  Context, ContextProvider,
};
