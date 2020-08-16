import React, { FC, PropsWithChildren } from 'react';

import * as Styles from './media-object.styles';
import * as Types from './media-object.types';

const MediaObject: FC<PropsWithChildren<Types.MediaObjectProps>> = ({
  media,
  content,
  hasContentFirst,
}) => (
  <Styles.MediaObject hasContentFirst={hasContentFirst}>
    <Styles.Media>
      {media}
    </Styles.Media>
    <Styles.Content>
      {content}
    </Styles.Content>
  </Styles.MediaObject>
);

export default MediaObject;
