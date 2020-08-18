import { makeStyles } from '@material-ui/core';

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

export { circleLoading };
