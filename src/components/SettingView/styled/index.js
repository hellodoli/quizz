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
        margin: `0 1rem`,
      },
      '& > .separator': {
        height: 'auto',
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
      fontSize: '.75rem',
      color: theme.palette.action.disabled,
      textTransform: 'uppercase',
      '& .MuiTypography-body1': {
        fontSize: '.75rem',
        fontWeight: 700,
      },
    },
  };
});

const layoutPreview = makeStyles((theme) => {
  const bg = theme.palette.background;
  return {
    layoutPreview: {
      display: 'flex',
      width: '120px',
      height: '80px',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: '12px 12px 0',
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
    layouttPreviewPostCard: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '-2px',
      '& > span': {
        width: '16px',
        height: '16px',
        borderRadius: '4px',
        background: theme.palette.primary.main,
        margin: '2px',
      },
    },
    layouttPreviewPostRow: {
      display: 'flex',
      flexFlow: 'column nowrap',
      '& > span': {
        width: '100%',
        height: '8px',
        borderRadius: '2px',
        background: theme.palette.primary.main,
        '& + span': {
          marginTop: '4px',
        },
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
    marginRight: '5px',
  },
}));

export { settingView, layoutPreview, formControlLabel, preferencesLayout };
