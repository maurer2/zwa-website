import React, { FC } from 'react';
import { PageProps, Link } from 'gatsby';

import * as Styles from './navigation-main.styles';
import * as Types from './navigation-main.types';

const NavigationMain: FC<PageProps & Types.NavigationMainProps> = () => {
  const navEntries = ['Community', 'News', 'FAQ'];

  return (
    <Styles.NavigationContainer>
      <Styles.NavigationList>
        {navEntries.map((entry) => (
          <li className="menu-entry" key={entry}>{entry}</li>
        ))}
      </Styles.NavigationList>
    </Styles.NavigationContainer>
  );
};

export default NavigationMain;
