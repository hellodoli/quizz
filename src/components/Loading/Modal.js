import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { modalLoading as modalLoadingClass } from './styled';

function ModalLoading(props) {
  const { invisible, open, color, isFullScreen } = props;
  const classes = modalLoadingClass({
    isFullScreen,
  });
  return (
    <Backdrop open={open} invisible={invisible} classes={classes}>
      <CircularProgress color={color} />
    </Backdrop>
  );
}

ModalLoading.propTypes = {
  open: PropTypes.bool,
  invisible: PropTypes.bool,
  color: PropTypes.string,
  isFullScreen: PropTypes.bool,
};

ModalLoading.defaultProps = {
  open: true,
  invisible: false,
  color: 'inherit',
  isFullScreen: true,
};

export default ModalLoading;
