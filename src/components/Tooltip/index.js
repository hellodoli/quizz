import { Tooltip, withStyles } from '@material-ui/core';

export default withStyles((theme) => {
  const { type, common } = theme.palette;
  const bg = type === 'dark' ? common.white : common.black;
  const color = type === 'dark' ? common.black : common.white;
  return {
    tooltip: {
      backgroundColor: bg,
      color,
      boxShadow: theme.shadows[1],
      fontSize: '.6875rem',
    },
    arrow: {
      color: bg,
    },
  };
})(Tooltip);
