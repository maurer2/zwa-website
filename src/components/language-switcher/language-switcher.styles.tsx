import styled, { css } from 'styled-components';

interface LanguageButtonStyleProps {
  isActive: boolean;
}

export const LanguageSwitcher = styled.div`
  display: flex;
  padding: 1rem;

  &:before {
    content: '|';
    order: 0;
    color: #fff;
  }
`;

export const LanguageButton = styled.button<LanguageButtonStyleProps>`
  display: block;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: #fff;
  opacity: .7;

  &:first-child {
    order: -1;
  }

  &:focus {
    outline: 0;
  }

  &:focus-visible {
    outline: 2px solid red;
  }

  ${(props) => props.isActive && css`
    opacity: 1;
  `}
`;
