import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import switchViewClass from './styled';

function SwitchView(props) {
  const {
    leftIcon: LeftI,
    rightIcon: RightI,
    barIcon: BarI,
    isActive,
    defaultPos,
    circleBar,
    width,
    height,
    ...rest // onClick, className, ...
  } = props;

  const classes = switchViewClass({
    isActive,
    defaultPos,
    circleBar,
    isHasIcon: !!(LeftI || RightI),
    width,
    height,
  });

  const activeIconLeftClass = () => {
    if (LeftI) {
      if (defaultPos === 'right' && isActive) return true;
      if (defaultPos === 'left' && !isActive) return true;
      return false;
    }
    return false;
  };
  const activeIconRightClass = () => {
    if (RightI) {
      if (defaultPos === 'right' && !isActive) return true;
      if (defaultPos === 'left' && isActive) return true;
      return false;
    }
    return false;
  };
  const renderIcon = () => {
    if (BarI) return null;
    return (
      <>
        {LeftI && (
          <span
            className={clsx(classes.icon, {
              [classes.iconActive]: activeIconLeftClass(),
            })}
          >
            <LeftI />
          </span>
        )}
        {RightI && (
          <span
            className={clsx(classes.icon, {
              [classes.iconActive]: activeIconRightClass(),
            })}
          >
            <RightI />
          </span>
        )}
      </>
    );
  };

  return (
    <div className={classes.rootSwitchView} {...rest}>
      <div className={classes.slider} />
      <div className={classes.holder}>{BarI && 'Bar has IconBar'}</div>
      {/* render Icon */}
      {renderIcon()}
    </div>
  );
}

SwitchView.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  barIcon: false,
  width: 112,
  height: 32,
  isActive: false,
  defaultPos: 'left',
  circleBar: false,
};

SwitchView.propTypes = {
  isActive: PropTypes.bool,
  defaultPos: PropTypes.oneOf(['left', 'right']),
  circleBar: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([false, null]),
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([false, null]),
  ]),
  barIcon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([false, null]),
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SwitchView;
