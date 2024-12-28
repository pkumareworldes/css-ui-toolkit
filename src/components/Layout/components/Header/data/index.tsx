const rightNavigationData = [
    {
        label: "Dashboard",
        icon: "Dashboard",
        path: "/dashboard"
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