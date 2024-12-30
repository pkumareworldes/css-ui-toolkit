import React, { memo } from "react";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material";

import _ from "../../@lodash/@lodash";
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
  isDesktopNavigationExpanded
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
        <Toolbar
          sx={{ backgroundColor: "inherit", mx: { xs: -0.75, sm: -1.5 } }}
        >
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
