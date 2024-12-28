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

export interface HeaderProps {
    RightNavigation?: React.ReactNode;
    userMenuData?: UserMenuData;
    title: string;
    logo: string;
}

export interface RightNavigationProps {
    data?: RightNavigationItem[];
}