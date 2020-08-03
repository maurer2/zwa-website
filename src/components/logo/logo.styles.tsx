import styled, { css } from 'styled-components';

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
