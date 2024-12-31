import { ReactNode } from "react";
import { Theme } from "@mui/material/styles";
import { SidebarItem } from "./ISidebar";
import { HeaderProps } from "./IHeader";
import { PageHeaderProps } from "./IPageHeader";
import { Branding, Navigation, Router } from "./ICommon";
import { Session, Authentication } from "./IAuth";
import { SxProps } from "@mui/material";

export type AppTheme = Theme | { light: Theme; dark: Theme };

export interface LayoutProps {
  children?: ReactNode;
  headerData: HeaderProps;
  footerData?: {
    // props for the Footer
  };
  sidebarData: SidebarItem[];
  pageheaderData?: PageHeaderProps;
}

export interface AppLayoutProviderProps {
  children: React.ReactNode;
  theme?: AppTheme;
  branding?: Branding | null;
  navigation?: Navigation;
  router?: Router;
  session?: Session | null;
  authentication?: Authentication | null;
  window?: Window;
}

export interface AppLayoutProps {
  children: React.ReactNode;
  disableCollapsibleSidebar?: boolean;
  defaultSidebarCollapsed?: boolean;
  hideNavigation?: boolean;
  sidebarExpandedWidth?: number;
  footerBottomPanel?: any,
  // slots?: AppLayoutSlots;
  // slotProps?: AppLayoutSlotProps;
  sx?: SxProps;
}

export interface SidebarNavigationProps {
  subNavigation: Navigation;
  basePath?: string;
  depth?: number;
  onLinkClick: () => void;
  isMini?: boolean;
  isFullyExpanded?: boolean;
  hasDrawerTransitions?: boolean;
  selectedItemId: string;
}

export interface SidebarNavigationDrawerProps {
  sidebarExpandedWidth: number;
  disableCollapsibleSidebar?: boolean;
  isDesktopNavigationExpanded: boolean;
  isMobileNavigationExpanded: boolean;
  isNavigationExpanded: boolean;
  hasDrawerTransitions: boolean;
  isNavigationFullyExpanded: boolean;
  sidebarFooter?: React.ReactNode;
  handleNavigationLinkClick: any;
  handleSetNavigationExpanded: any;
  selectedItemIdRef: any;
  layoutRef: any;
  navigation: Navigation;
}
