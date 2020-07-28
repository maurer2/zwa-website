import React, { FC, useState } from 'react';

const Context = React.createContext('en');

const ContextProvider: FC = ({ children }): JSX.Element => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  function updateLanguage(language: string) {
    setCurrentLanguage(language);
  }

  return <Context.Provider value={currentLanguage}>{children}</Context.Provider>;
};

export {
  Context, ContextProvider,
};
