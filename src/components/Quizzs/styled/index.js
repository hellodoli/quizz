import { makeStyles } from '@material-ui/core/styles';

export const quizzGeneral = makeStyles((theme) => {
  return {
    main: {
      // css variable
      '--pd-inner': '3rem',
    },
    // All other style in $main
    inner: {
      paddingTop: 'var(--pd-inner)',
      paddingBottom: 'var(--pd-inner)',
    },
    layoutDetailWrapp: {
      display: 'flex',
      position: 'relative',
    },
    detailWrapp: {
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        maxWidth: '660px',
      },
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
    // Subtitle
    subTitleWrapp: {
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
    },
    // Bookmark
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

// QuizzDetailItem
export const quizzDetailItem = makeStyles((theme) => {
  const { palette } = theme;
  const getchoiceItemStatus = ({ isDirty, isActive, isRightAns }) => {
    let background = palette.action.hover;
    const pointerEvents = isDirty && 'none';
    const cursor = !isDirty && 'pointer';
    const opacity = isDirty && !isActive ? 0.4 : 1;
    if (isActive) {
      background = isRightAns ? palette.success.main : palette.error.main;
    }
    return {
      cursor,
      pointerEvents,
      opacity,
      background,
      borderRadius: isActive && isRightAns ? '5px' : '30px',
      '&:hover': {
        background: !isDirty && palette.action.disabled,
      },
    };
  };
  return {
    wrapp: {
      '& + $wrapp': {
        marginTop: '1.5rem',
      },
    },
    choiceTitle: {
      marginBottom: '1rem',
    },
    choiceItem: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontWeight: 700,
      width: '100%',
      padding: '10px',
      borderRadius: '30px',
      background: theme.palette.action.disabled,
      '& + $choiceItem': {
        marginTop: '.5rem',
      },
    },
    choiceItemStatus: (props) => getchoiceItemStatus(props),
    // detail
    choiceItemLabel: {
      flex: 'none',
      display: 'block',
      width: '30px',
      height: '30px',
      lineHeight: '30px',
      borderRadius: '50%',
      textAlign: 'center',
      background: palette.background.paper,
      marginRight: '.5rem',
    },
    choiceItemExplain: {
      marginTop: '.5rem',
      color:
        palette.type === 'dark' ? palette.common.black : palette.common.white,
    },
  };
});

// QuizzDetailResult
export const quizzDetailResult = makeStyles((theme) => {
  return {
    wrapper: {
      marginTop: '3rem',
      textAlign: 'center',
    },
    contentResult: {
      padding: '.5rem',
    },
    dividerLine: {
      display: 'block',
      width: '100%',
      height: '4px',
      background: theme.palette.divider,
      margin: '.5rem 0',
    },
    number: {
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: '4px',
    },
    numberSuccess: {
      color: theme.palette.success.main,
    },
    numberTotal: {
      color: theme.palette.error.main,
    },
  };
});

export const quizzDetailSelect = makeStyles((theme) => {
  const getColorText = (isRight) => {
    if (isRight === null) return null;
    if (isRight) return theme.palette.success.main;
    return theme.palette.error.main;
  };
  return {
    root: {
      flex: 0,
      position: 'fixed',
      top: 50,
      width: 240,
      zIndex: 2,
    },
    menuList: {
      background: theme.palette.background.default,
      borderRadius: '8px',
      border: `2px solid ${theme.palette.divider}`,
      maxHeight: '560px',
      overflowY: 'auto',
    },
    menuItem: {
      '&.active': {
        background: theme.palette.action.selected,
      },
      color: ({ isRight }) => getColorText(isRight),
      '& .MuiListItemText-root': {
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
        'text-overflow': 'ellipsis',
        overflow: 'hidden',
        marginTop: 0,
        marginBottom: 0,
      },
    },
    headerSub: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    placeholder: {
      height: 50,
    },
  };
});
