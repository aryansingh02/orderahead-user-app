import { createMuiTheme } from '@material-ui/core/styles';
// @ts-ignore
import GtBoldTtf from './fonts/GT-Walsheim-Bold.ttf';
// @ts-ignore
import GtRegularTtf from './fonts/GT-Walsheim-Regular.ttf';

// Create a theme instance.

const gtbold = {
  fontFamily: 'GT-Walsheim',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    url(${GtBoldTtf}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8',
};
const gtregular = {
  fontFamily: 'GT-Walsheim',
  fontStyle: 'regular',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${GtRegularTtf}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8',
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(109, 92, 255, 1)',
      light: 'rgba(109, 92, 255, 0.16)',
    },
    secondary: {
      main: '#263238',
      light: 'rgba(151, 151, 151, 1)',
    },
    success: {
      main: '#2ECC71',
    },
    error: {
      main: '#E74C3C',
    },
    warning: {
      main: '#FFBB12',
    },
  },
  typography: {
    fontFamily: 'GT-Walsheim,Roboto',
    h1: {
      fontFamily: 'GT-Walsheim',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'GT-Walsheim',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'GT-Walsheim, Roboto',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '23px',
    },
    h4: {
      fontFamily: 'GT-Walsheim, Roboto',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '21px',
    },
    h5: {
      fontFamily: 'GT-Walsheim, Roboto',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '18px',
    },

    h6: {
      fontFamily: 'GT-Walsheim, Roboto',
      fontWeight: 'normal',
      fontSize: '22px',
    },

    body1: {
      fontFamily: 'GT-Walsheim, Roboto',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    body2: {
      fontFamily: 'GT-Walsheim, roboto',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      textTransform: 'capitalize',
    },
    caption: {
      fontFamily: 'GT-Walsheim, roboto',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '16px',
      color: 'rgba(151, 151, 151, 1)',
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        // @ts-ignore
        '@font-face': [gtbold, gtregular],
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        height: '48px',
        borderRadius: '8px',
        boxShadow:
          '0px 4px 8px rgba(109, 92, 255, 0.14), 0px 8px 16px rgba(109, 92, 255, 0.14)',
        fontFamily: 'GT-Walsheim, roboto',
        fontWeight: 'normal',
        fontSize: '16px',
      },
      endIcon: {
        width: '100%',
      },
    },
    MuiTextField: {
      root: {
        fontFamily: 'GT-Walsheim, roboto',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    MuiBottomNavigationAction: {
      root: {
        maxWidth: '33%',
      },
    },
    MuiChip: {
      root: {
        height: '24px',
        marginRight: '8px',
      },
    },
    MuiAvatar: {
      root: {
        background: 'red',
      },
    },
    MuiInputBase: {
      input: {
        height: 'auto',
      },
    },
  },
});
