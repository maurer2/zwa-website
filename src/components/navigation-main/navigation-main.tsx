import React, { FC } from "react"
import { PageProps, Link } from "gatsby"

type DataProps = {
  location: any,
}

const NavigationMain: FC<PageProps<DataProps>> = ({ location }) => {
  const navEntries = ['Community', 'News', 'FAQ']

  return (
    <nav
      className='navigation-main'
    >
      <ul className='menu'>
        {navEntries.map((entry) => (
          <li className='menu-entry' key={entry}>{entry}</li>
        ))}
      </ul>

    </nav>
  )
}

export default NavigationMain
