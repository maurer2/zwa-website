import styled from 'styled-components';

export const Masthead = styled.header`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr repeat(5, min-content);
  align-items: center;
  background-image: linear-gradient(to right, #80cdec 29%, #c00f2d 126%, #c00f2d 126%);
`;

export const GithubLink = styled.a`
  display: block;
  padding: 1rem;
`;
