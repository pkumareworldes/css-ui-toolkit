export interface SidebarItem {
    label: string;
    path?: string;
    icon?: string;
    handler?: () => void;
}

export interface SidebarProps {
    data: SidebarItem[];
}