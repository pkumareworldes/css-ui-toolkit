import { createTheme } from "@mui/material";
import colors from './colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: colors.white,
      paper: colors.lightGray,
    },
    primary: {
      main: colors.primaryBlue,
    },
    secondary: {
      main: colors.secondaryBlue,
    },
    text: {
      primary: colors.black,
      secondary: colors.darkGray,
    },
    divider: colors.mediumGray,
  },
  typography: {
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      fontSize: '0.875rem',
    },
  },
});