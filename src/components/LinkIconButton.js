// @flow
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import type { Node } from 'react';

type Props = {|
  href: string,
  children: Node,
|}

const LinkIconButton = ({ href, children }: Props) => (
  <IconButton color="primary" href={href} target="_blank">
    { children }
  </IconButton>
)

export default LinkIconButton;
