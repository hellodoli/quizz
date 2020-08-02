import React from 'react';
import PropsTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { circleLoading as circleLoadingClass } from './styled';

const CircleLoading = (props) => {
  const { thickness, gapSize, pos, size, ...other } = props;
  const classes = circleLoadingClass({ pos, gapSize });
  return (
    <div className={classes.root}>
      <CircularProgress thickness={thickness} size={size} {...other} />
    </div>
  );
};

CircleLoading.defaultProps = {
  thickness: 4,
  size: 40,
  pos: 'center',
  gapSize: 1.25,
};

CircleLoading.propTypes = {
  thickness: PropsTypes.number,
  size: PropsTypes.number,
  pos: PropsTypes.string,
  gapSize: PropsTypes.number,
};

export default CircleLoading;
