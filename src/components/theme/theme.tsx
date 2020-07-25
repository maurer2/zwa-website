import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from './theme.styles';
import * as Types from './theme.types';

const theme = { colors };

const Theme: FC<PropsWithChildren<Types.ThemeProps>> = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
