import React, { FC } from 'react'
import { PageProps, Link } from 'gatsby';

type DataProps = {
  location: any,
}

import * as Styles from './navigation-main.styles'

const NavigationMain: FC<PageProps<DataProps>> = ({ location }) => {
  const navEntries = ['Community', 'News', 'FAQ']

  return (
    <Styles.NavigationContainer>
      <Styles.NavigationList>
        {navEntries.map((entry) => (
          <li className='menu-entry' key={entry}>{entry}</li>
        ))}
      </Styles.NavigationList>
    </Styles.NavigationContainer>
  )
}

export default NavigationMain
