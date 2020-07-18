import React from 'react';
import { Radio } from '@material-ui/core';
import { useStyle } from './styled';

export default function (props) {
  const classes = useStyle();
  return <Radio {...props} classes={classes} />;
}
