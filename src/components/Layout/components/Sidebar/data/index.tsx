const sidebarData = [
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


  export {sidebarData};