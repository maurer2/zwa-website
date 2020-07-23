import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from './theme.styles'

const theme = {
  'colors': colors,
};

const Theme: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme
