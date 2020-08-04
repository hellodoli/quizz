import { makeStyles } from '@material-ui/core';

const header = makeStyles((theme) => {
  return {
    headerRoot: {
      display: 'flex',
      width: '100%',
      height: 'var(--header-height)',
      backgroundColor: theme.palette.background.default,
      borderBottom: `1px solid ${theme.palette.divider}`,
      zIndex: theme.zIndex.appBar,
    },
    wrapp: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };
});

export { header };
