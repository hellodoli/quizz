import React from 'react';
import { IconButton } from '@material-ui/core';

function withIconButton(WrappedIcon) {
  return (props) => {
    const { iconButton, icon, ...other } = props;
    return (
      <IconButton {...iconButton} {...other}>
        <WrappedIcon {...icon} />
      </IconButton>
    );
  };
}

export default withIconButton;
