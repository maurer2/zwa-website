/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React, { FC, Fragment } from 'react';
import { graphql, PageProps } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { kebabCase } from 'lodash-es';
// import { Link } from 'gatsby';

import { PrismicFaqPageEntriesGroupType } from '../../types/graphql';
import Layout from '../../components/layout/layout';

import * as Types from './faq.types';
// import * as Styles from './faq.styles';

const FaqPage: FC<PageProps<Types.FaqPageProps>> = ({ data, location }): JSX.Element => {
  const { prismicFaqPage } = data;

  const {
    description, entries, title, title_group_1,
  } = prismicFaqPage!.data!;

  const slugLookupTable: Map<string, string> = new Map();
  for (const entry of entries as PrismicFaqPageEntriesGroupType[]) {
    const { text } = entry!.question!;

    if (text) {
      const slug = kebabCase(text);

      slugLookupTable.set(text, slug);
    }
  }

  function scrollToAnchor() {
    // scrollIntoView
  }

  return (
    <Layout>
      <>
        <nav>
          <h2>Navigation</h2>
          <ul>
            {(entries as PrismicFaqPageEntriesGroupType[]).map((entry) => {
              const { question } = entry;

              if (!question || !question.text) {
                return null;
              }

              const slug = slugLookupTable.get(question!.text);

              return (
                <li key={slug}>
                  <a href={`#${slug}`}>
                    {question.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

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
          {(entries as PrismicFaqPageEntriesGroupType[]).map((entry) => {
            const { question } = entry;

            if (!question || !question.text) {
              return null;
            }

            const slug = slugLookupTable.get(question!.text);

            return (
              <details key={`${entry!.question!.text}`} id={`${slug}`}>
                <summary>{entry!.question!.text}</summary>
                <div>
                  <RichText
                    render={entry!.answer!.raw}
                  />
                </div>
              </details>
            );
          })}
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
