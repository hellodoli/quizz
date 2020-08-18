import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@material-ui/core';

function ModalLoading({ backdropProps, circularProgressProps }) {
  return (
    <Backdrop {...backdropProps}>
      <CircularProgress {...circularProgressProps} />
    </Backdrop>
  );
}

ModalLoading.propTypes = {
  backdropProps: PropTypes.shape({}),
  circularProgressProps: PropTypes.shape({}),
};

ModalLoading.defaultProps = {
  circularProgressProps: {
    thickness: 4,
    size: 40,
  },
  backdropProps: {
    open: true,
    invisible: false,
  },
};

export default ModalLoading;
