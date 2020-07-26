import styled from 'styled-components';

export const Masthead = styled.header`
  display: flex;
  grid-column: 1/-1; // span full row
  // grid-area: header;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, #80cdec 29%,#c00f2d 126%, #c00f2d 126%);

  > figure {
    margin-right: auto;
  }
`;
