import styled from 'styled-components';
import { Link } from 'gatsby';

// color: ${(props) => props.theme.colors.test};

export const NavigationList = styled.ul`
  display: grid;
  margin-left: auto;
  padding: 0;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  list-style: none;
  color: white;
  flex-basis: 75%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`;

export const NavigationEntry = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0;
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
