import React, { FC } from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

type DataProps = {
  site: {
    buildTime: string,
    siteMetadata: any,
    allMarkdownRemark: any,
  }
}

const Home: FC<PageProps<DataProps>> = ({ data, path, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const [faqsDE, faqEN] = data.allFile.edges;

  const pageTitle = faqEN.node.childFaqJson.section_main.headline.title;
  const { sections } = faqEN.node.childFaqJson.section_main;

  console.log(sections);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>{pageTitle}</h1>

      {sections.map(({ title: sectionTitle, accordion }) =>
        // console.log(sectionTitle, accordion)
        (
          <React.Fragment key={sectionTitle}>
            <h2>{sectionTitle}</h2>
            <div>
              {accordion.map(({ title: accordionTitle, textblock }) => (
                <details key={accordionTitle}>
                  <summary>{accordionTitle}</summary>
                  <div dangerouslySetInnerHTML={{ __html: textblock }} />
                  .
                </details>
              ))}
            </div>
          </React.Fragment>
        ))}

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default Home;

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
    # allFile(filter: {name: {eq: "en"}, sourceInstanceName: {eq: "faq"}}) {
    allFile(filter: {sourceInstanceName: {eq: "faq"}}, sort: {fields: name}) {
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
                  textblock
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
`;
