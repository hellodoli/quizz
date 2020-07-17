import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import switchViewClass from './styled';

function SwitchView(props) {
  const { leftIcon: LeftIcon, rightIcon: RightIcon, isActive, ...rest } = props;
  const classes = switchViewClass({ isActive, ...rest });

  const iconLeftStyle = clsx(classes.icon, !isActive && classes.iconActive);
  const iconRightStyle = clsx(classes.icon, isActive && classes.iconActive);
  return (
    <div className={classes.rootSwitchView} {...rest}>
      <div className={classes.slider} />
      <div className={classes.holder} />
      <span className={iconLeftStyle}>
        <LeftIcon />
      </span>
      <span className={iconRightStyle}>
        <RightIcon />
      </span>
    </div>
  );
}

SwitchView.defaultProps = {
  leftIcon: () => (
    <svg version="1.1" viewBox="0 0 24 24">
      <path
        pid="0"
        d="M6 4h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 10h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2zM16 4h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2zm0 10h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z"
        _fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  ),
  rightIcon: () => (
    <svg version="1.1" viewBox="0 0 24 24">
      <path
        pid="0"
        d="M5 17h14a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1zM5 4h9a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm13 0h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V5a1 1 0 011-1zM5 10.5h14a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1z"
        _fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  ),
  width: 112,
  height: 32,
  isActive: false,
};

SwitchView.propTypes = {
  isActive: PropTypes.bool,
  leftIcon: PropTypes.func,
  rightIcon: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SwitchView;