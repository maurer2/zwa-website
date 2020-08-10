import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

interface LogoStyleProps {
  isLarge: boolean;
}

export const Logo = styled.figure<LogoStyleProps>`
  display: block;
  margin: 0;

  ${(props) => props.isLarge && css`
    color: red;
  `}
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
