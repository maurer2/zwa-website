import React from 'react';
import { ContextProvider } from './src/context/context';

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"

export const wrapRootElement = ({ element }) => (
  <ContextProvider>
    {element}
  </ContextProvider>
);
