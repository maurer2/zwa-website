import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  color: ${(props) => props.theme.colors.test};
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;
