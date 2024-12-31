import * as React from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import type {} from "@mui/material/themeCssVarsAugmentation";
import {
  BrandingContext,
  NavigationContext,
  WindowContext,
} from "../../context";

import { AppLayoutProps } from "../../types/ILayout";
import { Header } from "../Header";
import { SidebarNavigationDrawer } from "../SidebarNavigation";

export interface SidebarFooterProps {
  mini: boolean;
}

const AppLayout = (props: AppLayoutProps) => {
  const {
    children,
    disableCollapsibleSidebar = false,
    defaultSidebarCollapsed = false,
    hideNavigation = false,
    sidebarExpandedWidth = 320,
    sx,
  } = props;

  const theme = useTheme();

  const brandingContext = React.useContext(BrandingContext);
  const navigationContext = React.useContext(NavigationContext);
  const appWindowContext = React.useContext(WindowContext);

  const branding = brandingContext;
  const navigation = navigationContext;

  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] =
    React.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] =
    React.useState(false);

  const isUnderMdViewport = useMediaQuery(
    theme.breakpoints.down("md"),
    appWindowContext && {
      matchMedia: appWindowContext.matchMedia,
    },
  );
  const isOverSmViewport = useMediaQuery(
    theme.breakpoints.up("sm"),
    appWindowContext && {
      matchMedia: appWindowContext.matchMedia,
    },
  );

  const isNavigationExpanded = isUnderMdViewport
    ? isMobileNavigationExpanded
    : isDesktopNavigationExpanded;

  const setIsNavigationExpanded = React.useCallback(
    (newExpanded: boolean) => {
      if (isUnderMdViewport) {
        setIsMobileNavigationExpanded(newExpanded);
      } else {
        setIsDesktopNavigationExpanded(newExpanded);
      }
    },
    [isUnderMdViewport],
  );

  const [isNavigationFullyExpanded, setIsNavigationFullyExpanded] =
    React.useState(isNavigationExpanded);

  React.useEffect(() => {
    if (isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyExpanded(true);
      }, theme.transitions.duration.enteringScreen);

      return () => clearTimeout(drawerWidthTransitionTimeout);
    }

    setIsNavigationFullyExpanded(false);

    return () => {};
  }, [isNavigationExpanded, theme]);

  const selectedItemIdRef = React.useRef("");

  const handleSetNavigationExpanded = React.useCallback(
    (newExpanded: boolean) => () => {
      setIsNavigationExpanded(newExpanded);
    },
    [setIsNavigationExpanded],
  );

  const toggleNavigationExpanded = React.useCallback(() => {
    setIsNavigationExpanded(!isNavigationExpanded);
  }, [isNavigationExpanded, setIsNavigationExpanded]);

  const handleNavigationLinkClick = React.useCallback(() => {
    selectedItemIdRef.current = "";
    setIsMobileNavigationExpanded(false);
  }, [setIsMobileNavigationExpanded]);

  React.useMemo(() => {
    if (navigation) {
      selectedItemIdRef.current = "";
    }
  }, [navigation]);

  const hasDrawerTransitions =
    isOverSmViewport && (disableCollapsibleSidebar || !isUnderMdViewport);

  const layoutRef = React.useRef<Element | null>(null);

  console.log("branding", branding);
  return (
    <Box
      ref={layoutRef}
      sx={{
        position: "relative",
        display: "flex",
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        ...sx,
      }}
    >
      <Header
        hideNavigation={hideNavigation}
        disableCollapsibleSidebar={disableCollapsibleSidebar}
        defaultSidebarCollapsed={defaultSidebarCollapsed}
        toggleNavigationExpanded={toggleNavigationExpanded}
        isDesktopNavigationExpanded={isDesktopNavigationExpanded}
        isMobileNavigationExpanded={isMobileNavigationExpanded}
      />

      {!hideNavigation && (
        <SidebarNavigationDrawer
          sidebarExpandedWidth={sidebarExpandedWidth}
          disableCollapsibleSidebar={disableCollapsibleSidebar}
          isDesktopNavigationExpanded={isDesktopNavigationExpanded}
          isMobileNavigationExpanded={isMobileNavigationExpanded}
          isNavigationExpanded={isNavigationExpanded}
          hasDrawerTransitions={hasDrawerTransitions}
          isNavigationFullyExpanded={isNavigationFullyExpanded}
          sidebarFooter
          handleNavigationLinkClick={handleNavigationLinkClick}
          handleSetNavigationExpanded={handleSetNavigationExpanded}
          selectedItemIdRef={selectedItemIdRef}
          layoutRef={layoutRef}
          navigation={navigation}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
        }}
      >
        <Toolbar sx={{ displayPrint: "none" }} />
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            overflow: "auto",
          }}
        >
          {children}
        </Box>
        {/* TODO Add Footer */}
      </Box>
    </Box>
  );
};

export default AppLayout;
