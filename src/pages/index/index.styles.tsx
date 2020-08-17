import styled, { css } from 'styled-components';

interface OverlayStyleProps {
  isVisible: boolean;
}

export const Overlay = styled.div<OverlayStyleProps>`
  display: none;
  position: fixed;
  inset: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 200px;
  background: #fff;

  ${(props) => props.isVisible && css`
    display: block;
  `}
`;
