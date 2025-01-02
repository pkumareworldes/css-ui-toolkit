import { lightBlue, red } from "@mui/material/colors";
const skyBlue = {
  50: "#e4fafd",
  100: "#bdf2fa",
  200: "#91e9f7",
  300: "#64e0f3",
  400: "#43daf1",
  500: "#22d3ee",
  600: "#1eceec",
  700: "#19c8e9",
  800: "#14c2e7",
  900: "#0cb7e2",
  A100: "#ffffff",
  A200: "#daf7ff",
  A400: "#a7ecff",
  A700: "#8de6ff",
  contrastDefaultColor: "dark",
};

const dark = {
  50: "#e5e6e8",
  100: "#bec1c5",
  200: "#92979f",
  300: "#666d78",
  400: "#464e5b",
  500: "#252f3e",
  600: "#212a38",
  700: "#1b2330",
  800: "#161d28",
  900: "#0d121b",
  A100: "#5d8eff",
  A200: "#2a6aff",
  A400: "#004af6",
  A700: "#0042dd",
  contrastDefaultColor: "light",
};

const lightText = {
  primary: "rgb(17, 24, 39)",
  secondary: "rgb(107, 114, 128)",
  disabled: "rgb(149, 156, 169)",
};

const darkText = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(229, 231, 235)",
  disabled: "rgb(156, 163, 175)",
};

export const footerThemeConfig = {
  palette: {
    type: "dark",
    text: lightText,
    common: {
      black: "rgb(17, 24, 39)",
      white: "rgb(255, 255, 255)",
    },
    primary: dark,
    secondary: {
      light: skyBlue[100],
      main: skyBlue[500],
      dark: skyBlue[900],
    },
    background: {
      paper: "#FFFFFF",
      default: "#f6f7f9",
    },
    error: red,
  },
};
