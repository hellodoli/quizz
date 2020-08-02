import { createMuiTheme } from '@material-ui/core/styles';

const {
  palette: { getContrastText },
} = createMuiTheme();
// Config object theme
const defaultDLType = 'dark';
const theme = {
  palette: {
    type: defaultDLType,
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
    background: {
      dark: {
        default: '#1c1e21',
        paper: '#303237',
        secondary: '#25282c',
      },
      light: {
        /* keep default light backgroud */
        default: '#e9eaec',
        paper: '#ffffff',
        secondary: '#f4f5f6',
      },
    },
  },
};

const getPaletteCustom = (type) => {
  const { background: bg, primary, secondary } = theme.palette;
  const background = type === 'dark' ? bg.dark : bg.light;

  return {
    primary,
    secondary,
    type,
    background,
  };
};

const getTheme = (type) => {
  return createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            'font-size': 16,
          },
          body: {
            fontSize: '1rem',
            lineHeight: 1.5,
          },
        },
      },
    },
    palette: getPaletteCustom(type),
  });
};

const defaultTheme = getTheme(defaultDLType);
const darkTheme = getTheme('dark');
const lightTheme = getTheme('light');

export { defaultDLType, defaultTheme, darkTheme, lightTheme, getTheme };
