import { Branding } from "./ICommon";

export interface RightNavigationItem {
  label: string;
  path?: string;
  icon?: string;
  handler?: () => void;
}

export interface UserMenuData {
  username?: string;
  avatar?: string;
  settingsMenu?: {
    label: string;
    handler: () => void;
  }[];
  loginHandler?: () => void;
}

export interface UserMenuProps {
  data?: UserMenuData;
}

export interface RightNavigationProps {
  data?: RightNavigationItem[];
}

export interface SidebarFooterProps {
  mini: boolean;
}

export interface HeaderProps {
  branding?: Branding;
  hideNavigation: boolean;
  toggleNavigationExpanded: () => void;
  disableCollapsibleSidebar: boolean;
  defaultSidebarCollapsed: boolean;
  isMobileNavigationExpanded: boolean;
  isDesktopNavigationExpanded: boolean;
  headerTheme?: any;
  headerLeftPanel?: React.ReactNode;
  headerRightPanel?: React.ReactNode;
}
