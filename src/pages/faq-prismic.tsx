import React, { FC } from 'react';
import { PageProps, Link, graphql } from 'gatsby';

const Home: FC = ({ data }) => {
  console.log(data);

  return (
    <h1>Test</h1>
  );
};

export default Home;

export const pageQuery = graphql`
  query faqPage {
    prismicFaqPage {
      data {
        title {
          html
          raw
          text
        }
        entries {
          answer {
            html
            text
            raw
          }
          question {
            html
            raw
            text
          }
        }
        description {
          html
          raw
          text
        }
        title_group_1 {
          html
          raw
          text
        }
      }
    }
  }
`;
