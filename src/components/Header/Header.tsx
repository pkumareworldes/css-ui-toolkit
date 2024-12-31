import React, { memo } from "react";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, Typography } from "@mui/material";

import { HeaderProps } from "../../types/IHeader";

const AppBar = styled(MuiAppBar)(({ theme }: any) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
}));

const Header = ({
  toggleNavigationExpanded,
  disableCollapsibleSidebar,
  hideNavigation,
  headerLeftPanel,
  headerRightPanel,
  isMobileNavigationExpanded,
  isDesktopNavigationExpanded,
  branding,
}: HeaderProps) => {

  const HeaderLeftPanel = headerLeftPanel ?? null;
  const HeaderRightPanel = headerRightPanel ?? null;

  const getMenuIcon = React.useCallback(
    (isExpanded: boolean) => {
      const expandMenuActionText = "Expand";
      const collapseMenuActionText = "Collapse";

      return (
        <Tooltip
          title={`${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`}
          enterDelay={1000}
        >
          <div>
            <IconButton
              aria-label={`${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`}
              onClick={toggleNavigationExpanded}
            >
              {isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </Tooltip>
      );
    },
    [toggleNavigationExpanded],
  );

  return (
    <>
      <AppBar color="inherit" position="absolute" sx={{ displayPrint: "none" }}>
        <Toolbar sx={{ backgroundColor: "inherit", mx: { xs: -0.75, sm: -1.5 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
              {!hideNavigation ? (
                <>
                  <Box
                    sx={{
                      mr: { sm: disableCollapsibleSidebar ? 0 : 1 },
                      display: { md: "none" },
                    }}
                  >
                    {getMenuIcon(isMobileNavigationExpanded)}
                  </Box>
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        md: disableCollapsibleSidebar ? "none" : "block",
                      },
                      mr: disableCollapsibleSidebar ? 0 : 1,
                    }}
                  >
                    {getMenuIcon(isDesktopNavigationExpanded)}
                  </Box>
                </>
              ) : null}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" },
                  flex: 1,
                  mt: { xs: 1, md: 0 },
                  pl: { xs: 0, md: 2 },
                }}
              >
                {branding?.appLogo && (
                  <a
                    href={branding.appHomeUrl || "#"}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={branding.appLogo as string}
                      alt={branding.appTitle}
                      style={{
                        height: "40px",
                        marginRight: "8px",
                      }}
                    />
                  </a>
                )}
                {branding?.appTitle && (
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href={branding.appHomeUrl || "#"}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: "bold",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {branding.appTitle}
                  </Typography>
                )}
              </Box>
              {HeaderLeftPanel && (
                <div className="flex flex-grow flex-shrink-0">
                  {HeaderLeftPanel}
                </div>
              )}
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              {HeaderRightPanel && (
                <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                  {HeaderRightPanel}
                </div>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default memo(Header);
