import { withStyles } from '@material-ui/core';

export default withStyles((theme) => {
  const {
    breakpoints,
    typography: { pxToRem },
    palette,
  } = theme;
  return {
    '@global': {
      // Spacing
      '.ml': {
        marginLeft: `${pxToRem(10)}!important`,
        [breakpoints.down('xs')]: {
          marginLeft: `${pxToRem(5)}!important`,
        },
      },
      '.mr': {
        marginRight: `${pxToRem(10)}!important`,
        [breakpoints.down('xs')]: {
          marginRight: `${pxToRem(5)}!important`,
        },
      },
      '.mt': {
        marginTop: `${pxToRem(10)}!important`,
        [breakpoints.down('xs')]: {
          marginTop: `${pxToRem(5)}!important`,
        },
      },
      '.mb': {
        marginBottom: `${pxToRem(10)}!important`,
        [breakpoints.down('xs')]: {
          marginBottom: `${pxToRem(5)}!important`,
        },
      },
      // Text
      '.font-weight-bold': {
        fontWeight: 'bold!important',
      },
      '.font-style-italic': {
        fontStyle: 'italic!important',
      },
      '.text-right': {
        textAlign: 'right!important',
      },
      '.text-uppercase': {
        textTransform: 'uppercase!important',
      },
      '.text-mute': {
        opacity: '.5!important',
      },
      // Display
      '.d-inline-flex': {
        display: 'inline-flex',
      },
      // Other
      '.divider-line': {
        borderBottom: `1px solid ${palette.divider}!important`,
        backgroundClip: 'padding-box!important',
      },
      '.cursor-pointer': {
        cursor: 'pointer!important',
      },
      '.separator': {
        display: 'block',
        borderLeft: `1px dotted ${palette.action.selected}`,
        height: '32px',
        width: '1px',
      },
    },
  };
})(() => null);
