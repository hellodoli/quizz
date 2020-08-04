import { makeStyles } from '@material-ui/core';

const settingView = makeStyles((theme) => {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      padding: 16,
      background: theme.palette.background.secondary,
      zIndex: theme.zIndex.appBar,
      '& > .separator': {
        display: 'none',
        height: 'auto',
        margin: '0 2rem',
      },
      // Tablet
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 24,
      },
      // Desktop
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        '& > .separator': {
          display: 'block',
        },
      },
      // Spacing
      '& > $item': {
        marginTop: '1.5rem',
        [theme.breakpoints.only('sm')]: {
          flex: '0 0 50%',
          maxWidth: '50%',
          '&:nth-of-type(-n + 2)': {
            marginTop: 0,
          },
        },
        [theme.breakpoints.up('md')]: {
          margin: '0 2rem',
        },
      },
      '& > $item:first-of-type': {
        marginTop: 0,
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
    },
    itemTitle: {
      fontSize: '.875rem',
      fontWeight: 700,
      color: theme.palette.action.disabled,
      textTransform: 'uppercase',
      letterSpacing: '.8px',
      marginBottom: '1rem',
    },
    itemBody: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '.75rem',
      color: theme.palette.action.disabled,
      textTransform: 'uppercase',
      '& > :not(:last-child)': {
        marginBottom: '.75rem',
      },
      // Radio or checkbox label
      '& .MuiTypography-body1': {
        fontSize: '.75rem',
        fontWeight: 700,
        letterSpacing: '1.6px',
        transition: 'color .1s',
      },
      '& .quizz-active-option .MuiTypography-body1': {
        color: theme.palette.action.active,
      },
    },
  };
});

const layoutPreview = makeStyles((theme) => {
  const bg = theme.palette.background;
  const getCSSVar = ({ view, space, cardNumber }) => {
    const isCardView = !!(view === 'card');

    const layoutWidth = 120;
    const layoutGap = space === 'eco' ? 12 : 16;
    const cardGap = space === 'roomy' ? 4 : 2;

    const cardListContainer = layoutWidth - 2 * layoutGap + 2 * cardGap;
    const cardWidth = cardListContainer / cardNumber - 2 * cardGap;

    return {
      '--layout-width': `${layoutWidth}px`,
      '--layout-height': '80px',
      '--layout-gap': `${layoutGap}px`,
      '--flex-direction': isCardView ? 'row' : 'column',
      '--card-gap-list': isCardView ? `-${cardGap}px` : 0,
      '--card-gap-item': isCardView ? `${cardGap}px` : 0,
      '--card-width': `${cardWidth}px`,
      '--card-height': isCardView ? `${cardWidth}px` : '8px',
      '--card-border': isCardView ? '4px' : '2px',
    };
  };
  return {
    layoutPreviewCSSVar: (props) => getCSSVar(props),
    layoutPreview: {
      width: 'var(--layout-width)',
      padding: 'var(--layout-gap)',
      background: bg.default,
      borderRadius: '8px',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
      },
    },
    layoutPreviewTop: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '0 -1.5px 8px',
      '& > span': {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: bg.paper,
        margin: '0 1.5px',
      },
    },
    layouttPreviewPost: {
      display: 'flex',
      flexDirection: 'var(--flex-direction)',
      flexWrap: 'wrap',
      margin: 'var(--card-gap-list)',
      '& > span': {
        width: 'var(--card-width)',
        height: 'var(--card-height)',
        borderRadius: 'var(--card-border)',
        background: theme.palette.primary.main,
        margin: 'var(--card-gap-item)',
        marginBottom: ({ view }) => view === 'row' && '4px',
      },
    },
  };
});

const formControlLabel = makeStyles((theme) => ({
  root: {
    marginLeft: '-7px',
    marginRight: 0,
    '&:hover': {
      '& .MuiTypography-body1': {
        color: theme.palette.action.active,
      },
    },
    '& .MuiRadio-root': {
      padding: '5px',
      marginRight: '.5rem',
    },
  },
}));

const preferencesLayout = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle',
  },
  switch: {
    marginRight: '0.5rem',
  },
}));

export { settingView, layoutPreview, formControlLabel, preferencesLayout };
