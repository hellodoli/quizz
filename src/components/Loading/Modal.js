import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { modalLoading as modalLoadingClass } from './styled';

function ModalLoading(props) {
  const {
    invisible,
    open,
    isFullScreen,
    thickness,
    size,
    ...otherForProgress
  } = props;
  const classes = modalLoadingClass({
    isFullScreen,
  });
  return (
    <Backdrop open={open} invisible={invisible} classes={classes}>
      <CircularProgress
        thickness={thickness}
        size={size}
        {...otherForProgress}
      />
    </Backdrop>
  );
}

ModalLoading.propTypes = {
  open: PropTypes.bool,
  invisible: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  thickness: PropTypes.number,
  size: PropTypes.number,
};

ModalLoading.defaultProps = {
  open: true,
  invisible: false,
  isFullScreen: true,
  thickness: 4,
  size: 50,
};

export default ModalLoading;
