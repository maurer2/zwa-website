/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React, {
  FC, useEffect, useState, useRef, createRef,
} from 'react';
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

  const [slugLookupTable, setSlugLookupTable] = useState<Map<string, string>>(new Map());
  const questionDomElementRefs = useRef(entries!.map(() => createRef<HTMLElement>()));

  useEffect(() => {
    const mappedSlugs = (entries as PrismicFaqPageEntriesGroupType[])
      .flatMap((entry) => {
        const { text } = entry!.question!;

        if (!text) {
          return [];
        }

        const slug = kebabCase(text);

        return [[
          text,
          slug,
        ]] as [string, string][];
      });

    setSlugLookupTable((prevSlugLookupTable) => new Map([...prevSlugLookupTable, ...mappedSlugs]));
  }, [entries]);

  function scrollToAnchor(event: React.MouseEvent, anchorNumber: number): void {
    event.preventDefault();

    const targetElement = questionDomElementRefs.current[anchorNumber];

    if (!targetElement.current) {
      return;
    }

    targetElement.current.scrollIntoView({ behavior: 'smooth' });
  }

  if (!slugLookupTable.size) {
    return <></>;
  }

  return (
    <Layout>
      <>
        <nav>
          <h2>Navigation</h2>
          <ul>
            {(entries as PrismicFaqPageEntriesGroupType[]).map((entry, index) => {
              const { question } = entry;

              if (!question || !question.text) {
                return null;
              }

              const slug = slugLookupTable.get(question!.text);

              return (
                <li key={slug}>
                  <a href={`#${slug}`} onClick={(event) => scrollToAnchor(event, index)}>
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
          {(entries as PrismicFaqPageEntriesGroupType[]).map((entry, index) => {
            const { question } = entry;

            if (!question || !question.text) {
              return null;
            }

            const slug = slugLookupTable.get(question!.text);

            return (
              <details key={slug} id={`${slug}`}>
                <summary ref={questionDomElementRefs.current[index]}>{entry!.question!.text}</summary>
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
