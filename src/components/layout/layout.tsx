import React, { FC } from "react"
import { PageProps, Link } from "gatsby"

import { Normalize } from 'styled-normalize';

import NavigationMain from '../navigation-main/navigation-main'

type DataProps = {
  site: {
    location: string,
    title: any,
    children: any,
  }
}

import * as Styles from './layout.styles';


const Layout: FC<PageProps<DataProps>> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isHomePage = location.pathname === rootPath

  return (
    <>
      <Normalize />
      <Styles.Wrapper>
        <NavigationMain location={location} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with22
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Styles.Wrapper>
    </>
  )
}

export default Layout
