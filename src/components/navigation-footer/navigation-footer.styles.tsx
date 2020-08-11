import styled from 'styled-components';
import { Link } from 'gatsby';

// color: ${(props) => props.theme.colors.test};

export const NavigationList = styled.ul`
  display: contents;
  list-style: none;
  color: white;
`;

export const NavigationEntry = styled.li`
  margin: 1rem;
  padding: 0;
  min-width: 0; // prevent grid blowout
`;

export const NavigationTitle = styled.h4`
  margin: 0;
  font-weight: bold;
  text-transform: none;
`;

export const SubNavigationList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const SubNavigationEntry = styled.li`
  margin: 0;
`;

export const SubNavigationLink = styled(Link)`
  display: inline-block;
  padding: 0.25rem 0;
  text-decoration: none;
  box-shadow: none;
  color: white;

  &.active {
    color: red;
  }
`;
