/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React, { FC, Fragment } from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import * as Types from './faq-prismic.types';
import * as Styles from './faq-prismic.styles';

const FaqPage = ({ data }: Types.FaqPageProps): JSX.Element => {
  const { prismicFaqPage } = data;

  const {
    description, entries, title, title_group_1,
  } = prismicFaqPage!.data!;

  return (
    <div className="wrapper">
      {!!title && (
        <RichText
          render={title.raw}
        />
      )}
      {!!description && (
        <RichText
          render={description.raw}
        />
      )}
      {!!title_group_1 && (
        <RichText
          render={title_group_1.raw}
        />
      )}
      {!!entries && (
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
      )}
    </div>
  );
};

export default FaqPage;

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
