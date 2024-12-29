import { ReactNode } from "react";
import { SidebarItem } from './ISidebar';
import { HeaderProps } from './IHeader';
import { FooterProps } from './IFooter';
import { PageHeaderProps } from './IPageHeader';

export interface LayoutProps {
    children?: ReactNode;
    headerData: HeaderProps;
    footerData?: FooterProps;
    sidebarData: SidebarItem[],
    pageheaderData?: PageHeaderProps;
}