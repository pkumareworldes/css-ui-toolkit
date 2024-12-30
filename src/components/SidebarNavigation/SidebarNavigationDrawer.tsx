import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SidebarNavigation from "./SidebarNavigation";
import {
  getDrawerWidthTransitionMixin,
  getDrawerSxTransitionMixin,
} from "../../utils";
import { SidebarNavigationDrawerProps } from "../../types/ILayout";

const SidebarNavigationDrawer = ({
  sidebarExpandedWidth = 320,
  disableCollapsibleSidebar = false,
  isDesktopNavigationExpanded,
  isMobileNavigationExpanded,
  isNavigationExpanded,
  hasDrawerTransitions,
  isNavigationFullyExpanded,
  sidebarFooter,
  handleNavigationLinkClick,
  handleSetNavigationExpanded,
  selectedItemIdRef,
  layoutRef,
  navigation,
}: SidebarNavigationDrawerProps) => {
  const isDesktopMini =
    !disableCollapsibleSidebar && !isDesktopNavigationExpanded;
  const isMobileMini =
    !disableCollapsibleSidebar && !isMobileNavigationExpanded;
  const getDrawerSharedSx = React.useCallback(
    (isMini: boolean, isTemporary: boolean) => {
      const drawerWidth = isMini ? 64 : sidebarExpandedWidth;

      return {
        displayPrint: "none",
        width: drawerWidth,
        flexShrink: 0,
        ...getDrawerWidthTransitionMixin(isNavigationExpanded),
        ...(isTemporary ? { position: "absolute" } : {}),
        [`& .MuiDrawer-paper`]: {
          position: "absolute",
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundImage: "none",
          ...getDrawerWidthTransitionMixin(isNavigationExpanded),
        },
      };
    },
    [isNavigationExpanded, sidebarExpandedWidth],
  );

  const getDrawerContent = React.useCallback(
    (isMini: boolean, viewport: "phone" | "tablet" | "desktop") => (
      <React.Fragment>
        <Toolbar />
        <Box
          component="nav"
          aria-label={`${viewport.charAt(0).toUpperCase()}${viewport.slice(1)}`}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "auto",
            pt: navigation[0]?.kind === "header" && !isMini ? 0 : 2,
            ...(hasDrawerTransitions
              ? getDrawerSxTransitionMixin(isNavigationFullyExpanded, "padding")
              : {}),
          }}
        >
          <SidebarNavigation
            subNavigation={navigation}
            onLinkClick={handleNavigationLinkClick}
            isMini={isMini}
            isFullyExpanded={isNavigationFullyExpanded}
            hasDrawerTransitions={hasDrawerTransitions}
            selectedItemId={selectedItemIdRef.current}
          />
          {sidebarFooter ? sidebarFooter : null}
        </Box>
      </React.Fragment>
    ),
    [
      sidebarFooter,
      handleNavigationLinkClick,
      hasDrawerTransitions,
      isNavigationFullyExpanded,
      navigation,
      sidebarFooter,
    ],
  );

  return (
    <>
      <Drawer
        container={layoutRef.current}
        variant="temporary"
        open={isMobileNavigationExpanded}
        onClose={handleSetNavigationExpanded(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: "block",
            sm: disableCollapsibleSidebar ? "block" : "none",
            md: "none",
          },
          ...getDrawerSharedSx(false, true),
        }}
      >
        {getDrawerContent(false, "phone")}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            sm: disableCollapsibleSidebar ? "none" : "block",
            md: "none",
          },
          ...getDrawerSharedSx(isMobileMini, false),
        }}
      >
        {getDrawerContent(isMobileMini, "tablet")}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          ...getDrawerSharedSx(isDesktopMini, false),
        }}
      >
        {getDrawerContent(isDesktopMini, "desktop")}
      </Drawer>
    </>
  );
};

export default SidebarNavigationDrawer;
