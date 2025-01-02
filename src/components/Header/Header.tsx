import React, { memo, useCallback } from "react";
import { AppBar, Box, IconButton, Stack, Toolbar, Tooltip } from "@mui/material";
import {styled} from "@mui/material/styles";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderProps } from "./IHeader";

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
  sxStyle
}) => {
  const ToolbarView = toolbarView ?? null;
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
      <AppBarStyled 
        position="absolute" 
        sx={{ displayPrint: "none", ...sxStyle }}
      >
        <Toolbar sx={{ backgroundColor: "inherit", mx: { xs: -0.75, sm: -1.5 } }}>
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
            ) : null
          }
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              flexWrap: "wrap",
              width: "100%",
            }}
          >
              {ToolbarView && ( ToolbarView )}
          </Stack>
        </Toolbar>
      </AppBarStyled>
  );
};

export default memo(Header);
