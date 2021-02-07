/* eslint-disable camelcase */
import React, { FC, Fragment } from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

const Home: FC = ({ data }) => {
  const { prismicFaqPage } = data;

  const {
    description, entries, title, title_group_1,
  } = prismicFaqPage.data;

  return (
    <div className="wrapper">
      <RichText
        render={title.raw}
      />
      <RichText
        render={description.raw}
      />
      <RichText
        render={title_group_1.raw}
      />
      <dl>
        {entries.map((entry: any) => (
          <Fragment key={entry.question.text}>
            <dt>
              <RichText
                render={entry.question.raw}
              />
            </dt>
            <dd>
              <RichText
                render={entry.answer.raw}
              />
            </dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
};

export default Home;

export const pageQuery = graphql`
  query prismicFaqPage {
    prismicFaqPage {
      data {
        title {
          raw
        }
        description {
          raw
        }
        title_group_1 {
          raw
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
      }
    }
  }
`;
