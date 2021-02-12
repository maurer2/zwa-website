/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React, { FC, Fragment } from 'react';
import { graphql, PageProps } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { kebabCase } from 'lodash-es';

import { PrismicFaqPageEntriesGroupType } from '../../types/graphql';
import Layout from '../../components/layout/layout';

import * as Types from './faq-prismic.types';
// import * as Styles from './faq-prismic.styles';

const FaqPage: FC<PageProps<Types.FaqPageProps>> = ({ data, location }): JSX.Element => {
  const { prismicFaqPage } = data;

  const {
    description, entries, title, title_group_1,
  } = prismicFaqPage!.data!;

  return (
    <Layout>
      <>
        {!!title && (
          <h1>{title.text}</h1>
        )}
        {!!description && (
        <RichText
          render={description.raw}
        />
        )}
        {!!title_group_1 && (
          <h2>{title_group_1.text}</h2>
        )}
        {!!entries && (
        <dl>
          {(entries as PrismicFaqPageEntriesGroupType[]).map((entry: PrismicFaqPageEntriesGroupType) => (
            <Fragment key={`${entry!.question!.text}`}>
              <details>
                <summary>{entry!.question!.text}</summary>
                <div>
                  <RichText
                    render={entry!.answer!.raw}
                  />
                </div>
              </details>
            </Fragment>
          ))}
        </dl>
        )}
      </>
    </Layout>
  );
};

export default FaqPage;

export const pageQuery = graphql`
  query prismicFaqPage {
    prismicFaqPage {
      data {
        title {
          text
          raw
        }
        description {
          text
          raw
        }
        title_group_1 {
          text
          raw
        }
        entries {
          answer {
            text
            raw
          }
          question {
            raw
            text
          }
        }
      }
    }
  }
`;
