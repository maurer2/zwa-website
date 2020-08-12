import styled from 'styled-components';
// import { Link } from 'gatsby';

export const Masthead = styled.header`
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, #80cdec 29%,#c00f2d 126%, #c00f2d 126%);

  > figure {
    margin-right: auto;
  }
`;

export const GithubLink = styled.a`
  display: block;
`;
