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
      '& .MuiLink-root': {
        '&:hover': {
          '& > .MuiCardActionArea-root > img': {
            transform: 'scale(1.025)',
          },
        },
      },
      '& .MuiLink-root, & .MuiLink-root > .MuiCardActionArea-root': {
        height: '100%',
      },
      '& .MuiLink-root > .MuiCardActionArea-root': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      '& .MuiLink-root > .MuiCardActionArea-root > img': {
        transition: 'transform .4s ease-out',
      },
      '& .MuiLink-root .MuiTypography-root': {
        textAlign: 'center',
      },
      '& .MuiCardActions-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
      },
    },
  };
});

export const quizzBoardItemRow = makeStyles((theme) => {
  return {
    rowWrapp: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minHeight: '94px',
      padding: '14px 24px',
      overflow: 'hidden',
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.background.default}`,
      cursor: 'pointer',
      '&:first-child': {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
      },
      '&:last-child': {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
      },
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
    },
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  };
});

export const quizzBoardItemActions = makeStyles((theme) => {
  return {
    containWrapp: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiTypography-root': {
        fontStyle: 'italic',
        color: theme.palette.text.secondary,
      },
    },
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  };
});
