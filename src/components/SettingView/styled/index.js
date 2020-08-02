import { makeStyles } from '@material-ui/core';

const settingView = makeStyles((theme) => {
  const { pxToRem } = theme.typography;
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      overflow: 'hidden',
      padding: `${pxToRem(24)} ${pxToRem(16)}`,
      background: theme.palette.background.secondary,
      zIndex: theme.zIndex.appBar,
      '& > *': {
        margin: '0 2rem',
      },
      '& > .separator': {
        height: 'auto',
        margin: '0 1.5rem',
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
      '& .MuiTypography-body1': {
        fontSize: '.75rem',
        fontWeight: 700,
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
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-start',
      width: 'var(--layout-width)',
      padding: 'var(--layout-gap)',
      background: bg.default,
      borderRadius: '8px',
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

const formControlLabel = makeStyles(() => ({
  root: {
    marginLeft: '-7px',
    '& .MuiRadio-root': {
      padding: '5px',
      marginRight: '5px',
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
