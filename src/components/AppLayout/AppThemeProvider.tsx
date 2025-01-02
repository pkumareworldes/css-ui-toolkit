import * as React from "react";
import { PaletteMode, Theme, useMediaQuery } from "@mui/material";
import { ThemeProvider, useColorScheme } from "@mui/material/styles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import CssBaseline from "@mui/material/CssBaseline";
import invariant from "invariant";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { PaletteModeContext } from "../../context/Context";
import type { AppTheme } from "./ILayout";

const COLOR_SCHEME_ATTRIBUTE = "data-eworldes-template-color-scheme";
const COLOR_SCHEME_STORAGE_KEY = "eworldes-template-color-scheme";
const MODE_STORAGE_KEY = "eworldes-template-mode";

function usePreferredMode(window?: Window) {
  const prefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: dark)",
    window && {
      matchMedia: window.matchMedia,
    },
  );
  return prefersDarkMode ? "dark" : "light";
}

type ThemeMode = PaletteMode | "system";

type CssVarsTheme = Theme & { vars: Record<string, string> };

function isCssVarsTheme(theme: AppTheme): theme is CssVarsTheme {
  return "vars" in theme;
}

interface LegacyThemeProviderProps {
  children: React.ReactNode;
  theme: AppTheme;
  window?: Window;
}

function LegacyThemeProvider(props: LegacyThemeProviderProps) {
  const { children, theme, window: appWindow } = props;
  invariant(
    !isCssVarsTheme(theme),
    "This provider only accepts legacy themes.",
  );

  const isDualTheme = "light" in theme || "dark" in theme;

  const preferredMode = usePreferredMode(appWindow);
  const [userMode, setUserMode] = useLocalStorageState<ThemeMode>(
    MODE_STORAGE_KEY,
    "system",
  );

  const paletteMode =
    !userMode || userMode === "system" ? preferredMode : userMode;
  const dualAwareTheme = React.useMemo(
    () =>
      isDualTheme
        ? (theme[paletteMode === "dark" ? "dark" : "light"] ??
          theme[paletteMode === "dark" ? "light" : "dark"])
        : theme,
    [isDualTheme, paletteMode, theme],
  );

  const paletteModeContextValue = React.useMemo(
    () => ({
      paletteMode,
      setPaletteMode: setUserMode,
      isDualTheme,
    }),
    [isDualTheme, paletteMode, setUserMode],
  );

  return (
    <ThemeProvider theme={dualAwareTheme}>
      <PaletteModeContext.Provider value={paletteModeContextValue}>
        <CssBaseline enableColorScheme />
        {children}
      </PaletteModeContext.Provider>
    </ThemeProvider>
  );
}

interface CssVarsPaletteModeProviderProps {
  children: React.ReactNode;
  window?: Window;
}

function CssVarsPaletteModeProvider(props: CssVarsPaletteModeProviderProps) {
  const { children, window: appWindow } = props;

  const preferredMode = usePreferredMode(appWindow);
  const { mode, setMode, allColorSchemes } = useColorScheme();

  const paletteModeContextValue = React.useMemo(() => {
    return {
      paletteMode: !mode || mode === "system" ? preferredMode : mode,
      setPaletteMode: setMode,
      isDualTheme: allColorSchemes.length > 1,
    };
  }, [allColorSchemes, mode, preferredMode, setMode]);

  return (
    <PaletteModeContext.Provider value={paletteModeContextValue}>
      {children}
    </PaletteModeContext.Provider>
  );
}

interface CssVarsThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
  window?: Window;
}

function CssVarsThemeProvider(props: CssVarsThemeProviderProps) {
  const { children, theme, window: appWindow } = props;
  invariant(
    isCssVarsTheme(theme),
    "This provider only accepts CSS vars themes.",
  );

  return (
    <ThemeProvider
      theme={theme}
      documentNode={appWindow?.document}
      colorSchemeNode={appWindow?.document.documentElement}
      disableNestedContext
      colorSchemeStorageKey={COLOR_SCHEME_STORAGE_KEY}
      modeStorageKey={MODE_STORAGE_KEY}
    >
      <InitColorSchemeScript
        attribute={COLOR_SCHEME_ATTRIBUTE}
        colorSchemeStorageKey={COLOR_SCHEME_STORAGE_KEY}
        modeStorageKey={MODE_STORAGE_KEY}
      />
      <CssVarsPaletteModeProvider window={appWindow}>
        <CssBaseline enableColorScheme />
        {children}
      </CssVarsPaletteModeProvider>
    </ThemeProvider>
  );
}

interface AppThemeProviderProps {
  children: React.ReactNode;
  theme: AppTheme;
  window?: Window;
}

function AppThemeProvider(props: AppThemeProviderProps) {
  const { children, theme, ...rest } = props;

  const useCssVarsProvider = isCssVarsTheme(theme);

  return useCssVarsProvider ? (
    <CssVarsThemeProvider theme={theme} {...rest}>
      {children}
    </CssVarsThemeProvider>
  ) : (
    <LegacyThemeProvider theme={theme} {...rest}>
      {children}
    </LegacyThemeProvider>
  );
}

export default AppThemeProvider;
