import { Branding, UserData } from "../../types/ICommon";

export interface HeaderProps {
  branding?: Branding;
  userData?: UserData;
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
