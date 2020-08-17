import React from 'react';
import { ContextProvider } from './src/context/context';

export const wrapRootElement = ({ element }) => (
  <ContextProvider>
    {element}
  </ContextProvider>
);
