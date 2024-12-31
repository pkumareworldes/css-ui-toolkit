import * as React from "react";
import type { PaletteMode } from "@mui/material";
import type { Branding, Navigation, Router, UserData } from "../types/ICommon";

export const BrandingContext = React.createContext<Branding | undefined>(undefined);

export const UserDataContext = React.createContext<UserData | undefined>(undefined);

export const NavigationContext = React.createContext<Navigation>([]);

export const PaletteModeContext = React.createContext<{
  paletteMode: PaletteMode;
  setPaletteMode: (mode: PaletteMode) => void;
  isDualTheme: boolean;
}>({
  paletteMode: "light",
  setPaletteMode: () => {},
  isDualTheme: false,
});

export const RouterContext = React.createContext<Router | null>(null);

export const WindowContext = React.createContext<Window | undefined>(undefined);
