import styled, { css } from 'styled-components';

interface MediaObjectStyleProps {
  hasContentFirst: boolean;
}

export const MediaObject = styled.div<MediaObjectStyleProps>`
  display: flex;

  ${(props) => props.hasContentFirst && css`
    flex-direction: row-reverse;
  `}
`;

export const Media = styled.div`
  background: red;
  flex: 1 1 0;
`;

export const Content = styled.div`
  background: green;
  flex: 1 1 0;
`;
