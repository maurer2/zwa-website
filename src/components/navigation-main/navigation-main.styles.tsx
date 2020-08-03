import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavigationContainer = styled.nav`
  color: ${(props) => props.theme.colors.test};
`;

export const NavigationList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`;

export const NavigationEntry = styled.li`
  margin: 0;
  padding: 0;
`;

export const NavigationLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  box-shadow: none;
  color: white;

  &.active {
    color: red;
  }
`;
