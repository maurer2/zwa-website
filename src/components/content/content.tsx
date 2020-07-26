import React, { FC, PropsWithChildren } from 'react';

import * as Styles from './content.styles';
import * as Types from './content.types';

const Content: FC<PropsWithChildren<Types.ContentProps>> = ({ children }) => (
  <Styles.Content>
    { children }
  </Styles.Content>
);

export default Content;
