import styled, { css } from 'styled-components';

interface LanguageButtonStyleProps {
  isActive: boolean;
}

export const LanguageSwitcher = styled.div`
  display: flex;

  &:before {
    content: '/';
    order: 0;
  }
`;

export const LanguageButton = styled.button<LanguageButtonStyleProps>`
  display: block;
  background: transparent;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:focus-visible {
    outline: 2px solid red;
  }

  &:first-child {
    order: -1;
  }

  ${(props) => props.isActive && css`
    color: red;
  `}
`;
