import { makeStyles } from '@material-ui/core';

const switchViewClass = makeStyles((theme) => {
  // Bar
  const getTransformHolder = ({ isActive, defaultPos }) => {
    const trans = 'translateX(100%)';
    if (defaultPos === 'right') {
      if (isActive) return null;
      return trans;
    }
    if (isActive) return trans;
    return null;
  };
  const getBgHolder = ({ isActive, isHasIcon }) => {
    if (isHasIcon || isActive) return theme.palette.primary.main;
    return theme.palette.action.disabled;
  };
  const getBorderRadiusHolder = ({ width, circleBar }) =>
    circleBar ? '50%' : parseInt(width / 10, 10);
  // Slider
  const getBorderRadiusSlider = ({ width, circleBar }) => {
    let bRadius = parseInt(width / 10, 10);
    if (circleBar && bRadius < 7) bRadius = 7;
    return bRadius;
  };
  // Icon
  const getWidthIcon = ({ width }) => parseInt(width / 3, 10);
  return {
    rootSwitchView: {
      position: 'relative',
      width: ({ width }) => width || 112,
      height: ({ height }) => height || 32,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      cursor: 'pointer',
      zIndex: 1,
      '& $slider, $holder': {
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },
    slider: {
      right: 0,
      bottom: 0,
      width: '98%',
      height: '87.5%',
      margin: 'auto',
      background: theme.palette.background.default,
      borderRadius: (props) => getBorderRadiusSlider(props),
      zIndex: -2,
    },
    holder: {
      width: '50%',
      height: '100%',
      willChange: 'transform',
      transition: 'transform .2s linear',
      background: (props) => getBgHolder(props),
      transform: (props) => getTransformHolder(props),
      borderRadius: (props) => getBorderRadiusHolder(props),
      zIndex: -1,
      '&:hover': {
        opacity: '0.85',
      },
    },
    icon: {
      width: (props) => getWidthIcon(props),
      height: (props) => getWidthIcon(props),
      transformOrigin: 'center',
      transition: 'color .1s linear, transform .2s linear',
      color: theme.palette.action.disabled,
      '& > svg': {
        fill: 'currentColor',
        stroke: 'none',
        transition: 'color .1s linear, transform .2s linear',
      },
      '&:hover:not($iconActive)': {
        color: theme.palette.action.active,
      },
    },
    iconActive: {
      color: theme.palette.action.active,
      transform: 'scale(1.25)',
      pointerEvents: 'none',
    },
  };
});

export default switchViewClass;
