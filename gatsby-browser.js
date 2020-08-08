import React from 'react';
import { ContextProvider } from './src/context/context';

// custom typefaces

import "prismjs/themes/prism.css"

export const wrapRootElement = ({ element }) => (
  <ContextProvider>
    {element}
  </ContextProvider>
);
