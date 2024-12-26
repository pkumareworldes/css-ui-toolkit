import { ReactNode } from "react";
import { SidebarItem } from './sidebar';
import { HeaderProps } from './header';
import { PageHeaderProps } from './page-header';

export interface LayoutProps {
    children?: ReactNode;
    headerData: HeaderProps;
    footerData?: {
        // props for the Footer
    };
    sidebarData: SidebarItem[],
    pageheaderData: PageHeaderProps;
}