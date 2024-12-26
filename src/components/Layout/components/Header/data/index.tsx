const rightNavigationData = [
    {
        label: "Dashboard",
        icon: "Dashboard",
        path: "/dashboard"
    },
    {
        label: "Profile",
        icon: "Person",
        path: "/profile"
    },
    {
        label: "Settings",
        icon: "Settings",
        path: "/settings",
        handler: () => alert("Settings Clicked!")
    },
    {
        label: "Help",
        icon: "Help",
        path: "/help"
    },
    {
        label: "About",
        icon: "Info",
        handler: () => alert("About Clicked!")
    }
];

const userMenuData = {
    username: 'Test',
    avatar: '',
    settingsMenu: [{
        label: 'Profile',
        handler: () => { }
    }, {
        label: 'Logout',
        handler: () => { }
    }]
};

const headerData = {
    rightNavigationData, 
    userMenuData,
    title:"Eworld Header",
    logo:"/media/meta-icons/favicon.ico"
  }

export {
    headerData,
    rightNavigationData,
    userMenuData
}