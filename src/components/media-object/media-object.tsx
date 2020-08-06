import React, { FC, PropsWithChildren } from 'react';

import * as Styles from './media-object.styles';
import * as Types from './media-object.types';

const MediaObject: FC<PropsWithChildren<Types.MediaObjectProps>> = ({
  children,
  hasContentFirst,
}) => {
  const hasContentFirst2 = false;

  return (
    <Styles.MediaObject hasContentFirst={hasContentFirst}>
      <Styles.Media>
        Media
      </Styles.Media>
      <Styles.Content>
        Content
      </Styles.Content>
    </Styles.MediaObject>
  );
};

export default MediaObject;
