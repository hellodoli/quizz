import { makeStyles } from '@material-ui/core';

const switchViewClass = makeStyles((theme) => {
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
      background: theme.palette.primary.main,
      zIndex: -1,
      transform: ({ isActive }) => isActive && 'translateX(100%)',
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
    },
    iconActive: {
      color: theme.palette.action.active,
      transform: 'scale(1.2)',
      pointerEvents: 'none',
    },
  };
});

export default switchViewClass;
