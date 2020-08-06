import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }

  body {
    min-height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 150px 1fr 250px;
  // height: 100%;
  min-height: 100vh;

  grid-template-areas:
    "header"
    "content"
    "footer"
    "overlay";
`;
