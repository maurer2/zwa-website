import styled, { css } from 'styled-components';

interface MenuStyleProps {
  isMobile: boolean;
  mobileMenuIsVisible: boolean;
}

export const Menu = styled.div<MenuStyleProps>`
  display: contents;

  ${(props) => props.isMobile && !props.mobileMenuIsVisible && css`
    display: none;
  `}

  ${(props) => props.isMobile && props.mobileMenuIsVisible && css`
    display: block;
    position: fixed;
    background: black;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `}
`;

export const MenuMobileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

export const MenuMobileCloseButton = styled.button`
  display: inline-block;
`;

export const GithubLink = styled.a`
  display: block;
  padding: 1rem;
`;
