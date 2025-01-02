import { Theme } from "@mui/material/styles";
import { Branding, Navigation, Router } from "../../types/ICommon";
import { Session, Authentication } from "../../types/IAuth";
import { SxProps } from "@mui/material";

export type AppTheme = Theme | { light: Theme; dark: Theme };

export interface AppLayoutProviderProps {
  children: React.ReactNode;
  theme?: AppTheme;
  branding?: Branding | undefined;
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
  footerBottomPanel?: any;
  footerView?: React.ReactNode;
  toolbarView?: React.ReactNode;
  headerTheme?: any;
  footerTheme?: any;
  sx?: SxProps;
}
