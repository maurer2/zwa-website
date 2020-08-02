import React, { FC, useState, createContext } from 'react';

export type ContextType = {
  language: string,
  setLanguage: (newLanguage: string) => void;
}

// default
const Context = createContext<ContextType>({
  language: 'en',
  setLanguage() {
    //
  },
});

const ContextProvider: FC = ({ children }): JSX.Element => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  function updateLanguage(language: string): void {
    setCurrentLanguage(language);
  }

  const currentContext: ContextType = {
    language: currentLanguage,
    setLanguage: updateLanguage,
  };

  return <Context.Provider value={currentContext}>{children}</Context.Provider>;
};

export {
  Context, ContextProvider,
};
