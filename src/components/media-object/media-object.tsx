import React, { FC, useContext, PropsWithChildren } from 'react';
// import { Link } from 'gatsby';

import { Context } from '../../context/context';

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
