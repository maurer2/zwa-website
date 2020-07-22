import React, { FC } from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string,
    siteMetadata: any,
    allMarkdownRemark: any,
  }
}

const FAQ: FC<PageProps<DataProps>> = ({ data, path, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>FAQ</h1>

    </Layout>
  )
}

export default FAQ

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
