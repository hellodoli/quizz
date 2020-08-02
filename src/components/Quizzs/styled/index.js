import { makeStyles } from '@material-ui/core/styles';

export const quizzGeneral = makeStyles((theme) => {
  return {
    main: {
      position: 'relative',
      width: '100%',
      // general Style
      '& .quizz-board-item': {
        '& .quizz-board-item-link img': {
          transition: 'transform .4s ease-out, opacity 0.1s ease-in-out',
        },
      },
    },
    // All other style in $wrapperMain
    inner: {
      padding: `${theme.typography.pxToRem(80)} 0`,
    },
    hasCardAnimation: {
      '& .quizz-board-item': {
        '& .quizz-board-item-link': {
          '&:hover img.loaded': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  };
});

// QuizzBoardItem Card (classes)
export const quizzBoardItemCard = makeStyles((theme) => {
  return {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& .MuiLink-root, & .MuiLink-root > .MuiCardActionArea-root': {
        height: '100%',
      },
      '& .MuiLink-root': {
        '& > .MuiCardActionArea-root': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        },
        '& .MuiTypography-root': {
          textAlign: 'center',
        },
      },
      '& .MuiCardActions-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `1px solid ${theme.palette.background.default}`,
      },
    },
  };
});

// QuizzBoardItem Row
export const quizzBoardItemRow = makeStyles((theme) => {
  return {
    root: {
      position: 'relative',
      width: '100%',
      // padding: '.875rem 1.5rem',
      overflow: 'hidden',
      background: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.background.default}`,
      borderRadius: 0,
      cursor: 'pointer',
      '&:first-child': {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      },
      '&:last-child': {
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
      },
      '& .MuiCardContent-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      '&:hover $reveal': {
        transform: 'translateX(-60px)',
      },
      '&:hover $reveal$loveWrapp': {
        transform: 'translateX(-100%)',
      },
    },
    typoWrapp: {
      flex: 1,
    },
    reveal: {
      transition: 'transform .2s ease-out',
    },
    loveWrapp: {
      position: 'absolute',
      top: 0,
      left: '100%',
      height: '100%',
      padding: '.75rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.background.default,
      '&:hover $iconWrapp': {
        color: theme.palette.primary.secondary,
      },
    },
    iconWrapp: {
      display: 'inline-flex',
      margin: '.5rem',
    },
    subTitleWrapp: {
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
    },
    currentItem: {
      '& + $currentItem': {
        marginLeft: '.5rem',
      },
    },
  };
});

export const quizzBoardItemActions = makeStyles((theme) => {
  return {
    containWrapp: {
      display: 'flex',
      alignItems: 'center',
      '& > :not(:first-child)': {
        marginLeft: '.5rem',
      },
      '& .MuiTypography-root': {
        fontStyle: 'italic',
        color: theme.palette.text.secondary,
      },
    },
  };
});
