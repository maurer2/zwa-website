import tw from 'twin.macro';

export const Wrapper = tw.div`
  grid
  grid-cols-3
  auto-rows-max
`;

export const Content = tw.div`
  col-span-2
`;

export const Navigation = tw.nav`
  sticky
  col-span-1
`;

export const PageTitle = tw.h1`
  mb-8
  text-3xl
`;

export const PageDescription = tw.h1`
  mb-8
`;

export const PageSection = tw.section`
  mb-8
`;

export const SectionTitle = tw.h2`
  mb-8
  text-2xl
`;

export const Accordion = tw.div`
  mb-8
`;

export const AccordionEntry = tw.details`
  mb-8
`;

export const Question = tw.summary`
  mb-8
  cursor-pointer
`;

export const Answer = tw.summary`
  mb-8
`;

export const NavTitle = tw.h2`
  mb-8
  text-2xl
`;
