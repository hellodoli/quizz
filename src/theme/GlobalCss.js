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
      // Left
      '.ml-0': { marginLeft: 0 },
      '.ml-1': { marginLeft: '.25rem!important' },
      '.ml-2': { marginLeft: '.5rem!important' },
      '.ml-3': { marginLeft: '1rem!important' },
      '.ml-4': { marginLeft: '1.5rem!important' },
      '.ml-5': { marginLeft: '3rem!important' },
      // Right
      '.mr-0': { marginRight: 0 },
      '.mr-1': { marginRight: '.25rem!important' },
      '.mr-2': { marginRight: '.5rem!important' },
      '.mr-3': { marginRight: '1rem!important' },
      '.mr-4': { marginRight: '1.5rem!important' },
      '.mr-5': { marginRight: '3rem!important' },
      // Top
      // Bottom
      // Other spacing
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
      '.text-center': {
        textAlign: 'center!important',
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
