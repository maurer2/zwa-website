import React, { FC } from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

type DataProps = {
  site: {
    buildTime: string,
    siteMetadata: any,
    allMarkdownRemark: any,
  }
}

const Home: FC<PageProps<DataProps>> = ({ data, path, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const faq = data.allFile.edges

  console.log(faq)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>Home</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default Home

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
    allFile(filter: {name: {eq: "en"}, sourceInstanceName: {eq: "faq"}}) {
      edges {
        node {
          id
          name
          sourceInstanceName
          childFaqJson {
            section_main {
              sections {
                id
                title
                accordion {
                  title
                }
              }
              headline {
                title
              }
            }
          }
        }
      }
    }
  }
`
