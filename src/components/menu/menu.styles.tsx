import styled, { css } from 'styled-components';

interface MenuStyleProps {
  isMobileMenu: boolean;
}

export const Menu = styled.div<MenuStyleProps>`
  display: contents;

  ${(props) => props.isMobile && css`
    display: contents;
  `}
`;

export const GithubLink = styled.a`
  display: block;
  padding: 1rem;
`;
