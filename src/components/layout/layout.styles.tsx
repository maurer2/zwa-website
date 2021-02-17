import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from 'twin.macro';

export function GlobalStylesComponent() {
  return <GlobalStyles />;
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:
    150px
    1fr
    minmax(250px, auto);
  // height: 100%;
  min-height: 100vh;
`;
