import styled, { css } from 'styled-components';

interface MediaObjectStyleProps {
  hasContentFirst: boolean;
}

export const MediaObject = styled.div<MediaObjectStyleProps>`
  display: flex;
  margin-left: -1rem;
  margin-right: -1rem;

  ${(props) => props.hasContentFirst && css`
    flex-direction: row-reverse;
  `}
`;

export const Media = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  flex: 0 1 0;
`;

export const Content = styled.div`
  flex: 1 1 0;
`;
