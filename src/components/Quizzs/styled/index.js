import { makeStyles } from '@material-ui/core/styles';

export const quizzWrapp = makeStyles((theme) => {
  return {
    wrapperMain: {
      position: 'relative',
      width: '100%',
    },
    wrapperInner: {
      padding: `${theme.typography.pxToRem(80)} 0`,
    },
  };
});

export const quizzBoardGrid = makeStyles((theme) => {
  return {
    test: {
      color: 'red',
      [theme.breakpoints.up('xs')]: {
        color: 'yellow',
      },
    },
  };
});

export const quizzBoardItem = makeStyles((theme) => {
  return {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& .MuiButtonBase-root': {
        height: '100%',
      },
    },
  };
});
