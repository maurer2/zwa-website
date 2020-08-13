import styled from 'styled-components';
import { Link } from 'gatsby';

export const Logo = styled.div`
  margin: 0;
`;

export const LogoImage = styled.img`
  display: block;
`;

export const LogoLink = styled(Link)`
  display: block;
  padding: 1rem;
  text-decoration: none;
  box-shadow: none;
  color: white;

  &.active {
    color: red;
  }
`;
