import { makeStyles } from '@material-ui/core';

const modalLoading = makeStyles(() => {
  const container = (isFullScreen) => {
    if (isFullScreen) return {};
    return {
      position: 'relative',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    };
  };
  return {
    root: ({ isFullScreen }) => container(isFullScreen),
  };
});

const circleLoading = makeStyles(() => {
  const container = (pos, gapSize) => {
    let justifyContent = 'center';
    if (pos === 'center') justifyContent = 'center';
    else if (pos === 'left') justifyContent = 'flex-start';
    else if (pos === 'right') justifyContent = 'flex-end';
    return {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      padding: `${gapSize}rem 0` || 0,
      justifyContent,
    };
  };
  return {
    root: ({ pos, gapSize }) => container(pos, gapSize),
  };
});

export { modalLoading, circleLoading };
