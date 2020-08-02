import { useMediaQuery } from '@material-ui/core';

function useMediaInfo() {
  const uMQ = useMediaQuery;
  const result = {};
  const keys = ['sm', 'md', 'lx', 'xl'];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result[`is${key.toUpperCase()}`] = {
      up: uMQ((theme) => theme.breakpoints.up(key)),
      down: uMQ((theme) => theme.breakpoints.down(key)),
    };
  }
  return result;
}

function getCardNumber(space) {
  const uMQ = useMediaQuery;
  const gridSpace = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
  };

  if (space === 'eco') {
    const isLg = uMQ((theme) => theme.breakpoints.up('lg'));
    const isMd = uMQ((theme) => theme.breakpoints.up('md'));
    if (isLg) {
      gridSpace.lg = 3;
    } else if (isMd) {
      gridSpace.md = 4;
    }
  }

  return gridSpace;
}

const getMediaScreen = (theme) => {
  return Object.values(theme.breakpoints.values).reverse();
};

export { useMediaInfo, getCardNumber, getMediaScreen };
