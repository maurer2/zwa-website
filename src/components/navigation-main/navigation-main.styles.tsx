import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavigationContainer = styled.nav`
  display: contents;
  color: ${(props) => props.theme.colors.test};
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
