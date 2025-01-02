import React, { memo, useCallback } from "react";
import { AppBar, Box, IconButton, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderProps } from "./IHeader";
import { ThemeProvider, styled } from "../AppLayout";
import useCreateTheme from "../../hooks/useCreateTheme";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
}));

const Header: React.FC<HeaderProps> = ({
  toggleNavigationExpanded,
  disableCollapsibleSidebar,
  hideNavigation,
  toolbarView,
  isMobileNavigationExpanded,
  isDesktopNavigationExpanded,
  headerTheme,
  branding,
  sxStyle
}) => {
  const ToolbarView = toolbarView ?? null;
  const theme = useCreateTheme(headerTheme || undefined);
  const getMenuIcon = useCallback(
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
    <ThemeProvider theme={theme}>
      <AppBarStyled 
        position="absolute" 
        sx={{ displayPrint: "none", ...sxStyle }}
      >
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
            <Stack direction="row" alignItems="center">
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
                </Stack>
                <Stack direction="row" justifyContent="justify-between" alignItems ="center">
                  {ToolbarView && (
                    <div className="flex flex-grow flex-shrink-0">
                      {ToolbarView}
                    </div> 
                  )}
                </Stack>
          </Stack>
        </Toolbar>
      </AppBarStyled>
    </ThemeProvider>
  );
};

export default memo(Header);
