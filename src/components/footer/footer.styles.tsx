import styled from 'styled-components';

export const Footer = styled.footer`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background-image: linear-gradient(to right, #80cdec 29%, #c00f2d 126%, #c00f2d 126%);

  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const LogoWrapper = styled.div`
  grid-column: span 2;
  grid-row: 1;
  align-self: center;

  @media (min-width: 576px) {
    grid-column: span 1;
    grid-row: span 3;
  }

  @media (min-width: 768px) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

export const CopyrightText = styled.small`
  grid-column: 1/-1;
  margin: 1rem;
  text-align: center;
  color: white;

  > a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    text-align: left;
  }
`;
