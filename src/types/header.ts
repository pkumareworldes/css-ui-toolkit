export interface RightNavigationItem {
    label: string;
    path?: string;
    icon?: string;
    handler?: () => void;
}

export interface UserMenuData {
    username: string;
    avatar: string;
    settingsMenu: {
        label: string;
        handler: () => void;
    }[];
}

export interface UserMenuProps {
    data: UserMenuData;
}

export interface HeaderProps {
    rightNavigationData: RightNavigationItem[];
    userMenuData: UserMenuData;
    title: string;
    logo: string;
}

export interface RightNavigationProps {
    data: RightNavigationItem[];
}