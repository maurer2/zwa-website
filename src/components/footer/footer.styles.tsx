import styled from 'styled-components';

export const Footer = styled.footer`
  grid-column: 1/-1;
  // grid-area: footer;

  align-items: center;
  background-image: linear-gradient(to right, #80cdec 29%, #c00f2d 126%, #c00f2d 126%);

  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
