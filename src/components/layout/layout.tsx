import React, { FC } from "react"
import { PageProps } from 'gatsby'

import { Normalize } from 'styled-normalize';

import Masthead from '../masthead/masthead'
import Theme from '../theme/theme'

type DataProps = {
  site: {
    location: string,
    title: any,
    children: any,
  }
}

import * as Styles from './layout.styles';

const Layout: FC<PageProps<DataProps>> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isHomePage = location.pathname === rootPath

  return (
    <Theme>
      <Normalize />
      <Styles.Wrapper>
        <Masthead/>
        <main>{children}</main>
      </Styles.Wrapper>
    </Theme>
  )
}

export default Layout
