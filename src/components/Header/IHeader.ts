import { Branding } from "../../types/ICommon";
import { SxProps } from "@mui/material";
export interface HeaderProps {
  branding?: Branding;
  hideNavigation: boolean;
  toggleNavigationExpanded: () => void;
  disableCollapsibleSidebar: boolean;
  defaultSidebarCollapsed: boolean;
  isMobileNavigationExpanded: boolean;
  isDesktopNavigationExpanded: boolean;
  headerTheme?: any;
  toolbarView?: React.ReactNode;
  sxStyle?: SxProps;
}
