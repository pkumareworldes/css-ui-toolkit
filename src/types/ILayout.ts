import { ReactNode } from "react";
import { SidebarItem } from './ISidebar';
import { HeaderProps } from './IHeader';
import { PageHeaderProps } from './IPageHeader';

export interface LayoutProps {
    children?: ReactNode;
    headerData: HeaderProps;
    footerData?: {
        // props for the Footer
    };
    sidebarData: SidebarItem[],
    pageheaderData?: PageHeaderProps;
}