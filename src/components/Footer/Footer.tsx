import { AppBar, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { memo } from "react";
import { FooterProps } from "../../types/IFooter";
import _ from "../../@lodash/@lodash";

const Footer = (props: FooterProps) => {
  const { footerTheme, footerLeftPanel, footerRightPanel } = props;
  console.log("props", props);
  const theme = createTheme(footerTheme);
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        id="footer"
        className={"relative z-20 shadow-md"}
        color="default"
        style={{ backgroundColor: footerTheme.palette.background.paper }}
      >
        <Toolbar className="min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex items-center overflow-x-auto">
          {footerLeftPanel && (
            <div className="flex flex-grow flex-shrink-0">
              {footerLeftPanel}
            </div>
          )}
          {footerRightPanel && (
            <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
              {footerRightPanel}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default memo(Footer);
