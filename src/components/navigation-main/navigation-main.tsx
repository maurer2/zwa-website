import React, { FC } from "react"
import { PageProps, Link } from "gatsby"

type DataProps = {}

const NavigationMain: FC<PageProps<DataProps>> = ({ location, title, children }) => {
  const navEntries = ['Community', 'News', 'FAQ']

  return (
    <nav
      className='navigation-main'
    >
      <ul className='menu'>
        {navEntries.map((entry) => {
          <li className='menu-entry'>{entry}</li>
        })}
      </ul>

    </nav>
  )
}

export default NavigationMain
