import React, { FC } from "react"
import { PageProps, Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

import NavigationMain from '../navigation-main/navigation-main'

type DataProps = {
  site: {
    location: string,
    title: any,
    children: any,
  }
}

const Layout: FC<PageProps<DataProps>> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const isHomePage = location.pathname === rootPath
  let header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <NavigationMain />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with22
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
