import {SidebarProps} from './ISidebar';

export interface MobilePortalProps extends SidebarProps {
    isOpen: boolean;
    toggleDrawer: (open: boolean) => void;
    RightNavigation?: React.ReactNode;
}