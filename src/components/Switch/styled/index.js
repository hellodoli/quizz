import { makeStyles } from '@material-ui/core';

const switchViewClass = makeStyles((theme) => {
  const renderTransform = (isActive, defaultPos) => {
    const trans = 'translateX(100%)';
    if (defaultPos === 'left') {
      if (isActive) return trans;
      return null;
    }
    if (defaultPos === 'right') {
      if (isActive) return null;
      return trans;
    }
  };
  const renderBgHolder = (isHasIcon, isActive) => {
    if (isHasIcon) return theme.palette.primary.main;
    if (isActive) return theme.palette.primary.main;
    return theme.palette.action.disabled;
  };
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
        borderRadius: 8,
      },
    },
    slider: {
      right: 0,
      bottom: 0,
      height: '87.5%',
      background: theme.palette.background.default,
      margin: 'auto',
      zIndex: -2,
    },
    holder: {
      width: '50%',
      height: '100%',
      willChange: 'transform',
      transition: 'transform .2s linear',
      background: ({ isHasIcon, isActive }) =>
        renderBgHolder(isHasIcon, isActive),
      zIndex: -1,
      transform: ({ isActive, defaultPos }) =>
        renderTransform(isActive, defaultPos),
      '&:hover': {
        opacity: '0.85',
      },
    },
    icon: {
      width: 20,
      height: 20,
      transformOrigin: 'center',
      transition: 'color .1s linear, transform .2s linear',
      color: theme.palette.action.disabled,
      '& > svg': {
        fill: 'currentColor',
        stroke: 'none',
        transition: 'color .1s linear, transform .2s linear',
      },
      '&:hover': {
        color: theme.palette.action.active,
      },
    },
    iconActive: {
      color: theme.palette.action.active,
      transform: 'scale(1.2)',
      pointerEvents: 'none',
    },
  };
});

export default switchViewClass;
