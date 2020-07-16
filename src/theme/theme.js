import { createMuiTheme } from '@material-ui/core/styles';

const defaultDLType = 'dark';
const theme = createMuiTheme();
const typo = theme.typography;

const utility = {
  // Spacing
  '.ml': {
    marginLeft: `${typo.pxToRem(10)}!important`,
    [theme.breakpoints.down('xs')]: {
      marginLeft: `${typo.pxToRem(5)}!important`,
    },
  },
  '.mr': {
    marginRight: `${typo.pxToRem(10)}!important`,
    [theme.breakpoints.down('xs')]: {
      marginRight: `${typo.pxToRem(5)}!important`,
    },
  },
  '.mt': {
    marginTop: `${typo.pxToRem(10)}!important`,
    [theme.breakpoints.down('xs')]: {
      marginTop: `${typo.pxToRem(5)}!important`,
    },
  },
  '.mb': {
    marginBottom: `${typo.pxToRem(10)}!important`,
    [theme.breakpoints.down('xs')]: {
      marginBottom: `${typo.pxToRem(5)}!important`,
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
  // Other
  '.divider-line': {
    borderBottom: `1px solid ${theme.palette.divider}!important`,
    backgroundClip: 'padding-box!important',
  },
  '.cursor-pointer': {
    cursor: 'pointer!important',
  },
};

const getTheme = (type) =>
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            'font-size': theme.typography.htmlFontSize,
          },
          ...utility,
        },
      },
    },
    palette: { type },
  });

const defaultTheme = getTheme(defaultDLType);
const darkTheme = getTheme('dark');
const lightTheme = getTheme('light');

export { defaultDLType, defaultTheme, darkTheme, lightTheme, getTheme };
