import * as React from "react";
import type { PaletteMode } from "@mui/material";

export const PaletteModeContext = React.createContext<{
  paletteMode: PaletteMode;
  setPaletteMode: (mode: PaletteMode) => void;
  isDualTheme: boolean;
}>({
  paletteMode: "light",
  setPaletteMode: () => {},
  isDualTheme: false,
});
