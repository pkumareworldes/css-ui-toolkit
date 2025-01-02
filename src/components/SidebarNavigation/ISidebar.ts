
import { Navigation } from "../../types/ICommon";

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