import { createMuiTheme } from '@material-ui/core/styles';

const defaultDLType = 'dark';
const {
  palette: { getContrastText },
  typography: { pxToRem },
  breakpoints,
} = createMuiTheme();

const getUtility = (savedTheme) => {
  return {
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
    // Other
    '.divider-line': {
      borderBottom: `1px solid ${savedTheme.palette.divider}!important`,
      backgroundClip: 'padding-box!important',
    },
    '.cursor-pointer': {
      cursor: 'pointer!important',
    },
    '.separator': {
      display: 'block',
      borderLeft: `1px dotted ${savedTheme.palette.action.selected}`,
      height: '32px',
      width: '1px',
    },
  };
};

const getPaletteCustom = (type) => {
  const background =
    type === 'dark'
      ? {
          default: '#1c1e21',
          paper: '#303237',
          secondary: '#25282c',
        }
      : {
          /* keep default light backgroud */
        };

  return {
    palette: {
      primary: {
        light: '#67a4ff',
        main: '#0076f5',
        dark: '#004cc1',
        contrastText: getContrastText('#0076f5'),
      },
      secondary: {
        light: '#ff5a8b',
        main: '#f5005e',
        dark: '#bb0035',
        contrastText: getContrastText('#f5005e'),
      },
      type,
      background,
    },
  };
};

const getTheme = (type) => {
  const savedTheme = createMuiTheme({
    typography: { htmlFontSize: 16 },
    ...getPaletteCustom(type),
  });
  return createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            'font-size': savedTheme.typography.htmlFontSize,
          },
          ...getUtility(savedTheme),
        },
      },
    },
    typography: { htmlFontSize: 16 },
    palette: savedTheme.palette,
  });
};

const defaultTheme = getTheme(defaultDLType);
const darkTheme = getTheme('dark');
const lightTheme = getTheme('light');

export { defaultDLType, defaultTheme, darkTheme, lightTheme, getTheme };
