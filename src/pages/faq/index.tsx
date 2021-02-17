import React, {
  FC, useEffect, useState, useRef, createRef,
} from 'react';
import { graphql, PageProps } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { kebabCase } from 'lodash-es';

import { PrismicFaqPageEntriesGroupType } from '../../types/graphql';
import Layout from '../../components/layout/layout';

import * as Types from './faq.types';
import * as Styles from './faq.styles';

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

  function scrollToElement(event: React.MouseEvent, anchorNumber: number): void {
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
      <Styles.Wrapper>
        <Styles.Content>
          {!!title && (
          <Styles.PageTitle>{title.text}</Styles.PageTitle>
          )}
          {!!description && (
          <Styles.PageDescription>
            <RichText
              render={description.raw}
            />
          </Styles.PageDescription>
          )}
          <Styles.PageSection>
            {!!title_group_1 && (
            <Styles.SectionTitle>{title_group_1.text}</Styles.SectionTitle>
            )}
            {!!entries && (
            <Styles.Accordion>
              {(entries as PrismicFaqPageEntriesGroupType[]).map((entry, index) => {
                const { question } = entry;

                if (!question || !question.text) {
                  return null;
                }

                const slug = slugLookupTable.get(question!.text);

                return (
                  <Styles.AccordionEntry key={slug} id={`${slug}`}>
                    <Styles.Question ref={questionDomElementRefs.current[index]}>{entry!.question!.text}</Styles.Question>
                    <Styles.Answer>
                      <RichText
                        render={entry!.answer!.raw}
                      />
                    </Styles.Answer>
                  </Styles.AccordionEntry>
                );
              })}
            </Styles.Accordion>
            )}
          </Styles.PageSection>
        </Styles.Content>
        <Styles.Navigation>
          <Styles.NavTitle>Navigation</Styles.NavTitle>
          <ul>
            {(entries as PrismicFaqPageEntriesGroupType[]).map((entry, index) => {
              const { question } = entry;

              if (!question || !question.text) {
                return null;
              }

              const slug = slugLookupTable.get(question!.text);

              return (
                <li key={slug}>
                  <a href={`#${slug}`} onClick={(event) => scrollToElement(event, index)}>
                    {question.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </Styles.Navigation>
      </Styles.Wrapper>
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
