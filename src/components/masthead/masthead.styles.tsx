import styled from 'styled-components';

export const Masthead = styled.header`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr auto;
  align-items: center;
  background-image: linear-gradient(to right, #80cdec 29%, #c00f2d 126%, #c00f2d 126%);

  @media (min-width: 768px) {
    grid-template-columns: 1fr repeat(5, min-content);
  }
`;

export const GithubLink = styled.a`
  display: block;
  padding: 1rem;
`;

export const MenuButton = styled.button`
  display: block;
  padding: 1rem;
`;
