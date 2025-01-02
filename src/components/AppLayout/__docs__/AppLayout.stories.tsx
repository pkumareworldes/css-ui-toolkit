import React from "react";
import { Meta, Story } from "@storybook/react";
import { createTheme } from "@mui/material/styles";
import AppLayoutProvider from "../AppLayoutProvider";
import { AppLayoutProviderProps } from "../ILayout";
import { Branding, Navigation } from "../../../types/ICommon";
import { headerThemeConfig } from "./layoutProps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import AppLayout from "../AppLayout";
import { UserData } from "../../../types/ICommon";

const sampleUserData: UserData = {
  isLoggedIn: true,
  userDetails: {
    firstname: "John",
    lastname: "Doe",
    icon: "",
    settingsMenu: [
      {
        label: "Profile",
        handler: () => alert("Navigating to profile"),
      },
      {
        label: "Logout",
        handler: () => alert("Logging out"),
      },
    ],
  },
  loginHandler: () => alert("Logging in"),
  logoutHandler: () => alert("Logging in"),
};

const branding = {
  appTitle: "Test Application",
  appLogo: "favicon.svg",
  appHomeUrl: "/test",
};

const footer = [
  {
    label: "Contact Us",
    value: "test@test.com",
    isLink: false,
  },
];

const Theme = {
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#FFFFFF"
    }
  }
};

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-eworldes-template-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#FFFFFF"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const NAVIGATION: Navigation = [
  {
    segment: "home",
    title: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    segment: "calender",
    title: "Calender",
    icon: <CalendarMonthIcon />,
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "abc",
        title: "abc",
        icon: <DescriptionIcon />,
      },
      {
        segment: "xyz",
        title: "xyx",
        icon: <DescriptionIcon />,
      },
    ],
  },
];

// Define Storybook metadata
export default {
  title: "Layout/AppLayout",
  component: AppLayoutProvider,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    footerTheme: { ...headerThemeConfig },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<AppLayoutProviderProps> = (args) => {
  return (
    <AppLayoutProvider {...args} theme={theme} navigation={NAVIGATION} branding={branding}>
      <AppLayout 
      hideNavigation={false} 
      defaultSidebarCollapsed={true} 
      footerBottomPanel={footer} 
      headerTheme={{palette: {
        background: {
          paper: "#0C44AE",
          default: "#f6f7f9",
        },
      }}}
      footerView={<h6>Footer</h6>}>
        <h1> The standard Lorem Ipsum passage, used since the 1500s</h1>
      </AppLayout>
    </AppLayoutProvider>
  );
};

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  navigation: [
    {
      kind: "header",
      title: "Main items",
    },
    {
      segment: "dashboard",
      title: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      segment: "orders",
      title: "Orders",
      icon: <ShoppingCartIcon />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Analytics",
    },
    {
      segment: "reports",
      title: "Reports",
      icon: <BarChartIcon />,
      children: [
        {
          segment: "sales",
          title: "Sales",
          icon: <DescriptionIcon />,
        },
        {
          segment: "traffic",
          title: "Traffic",
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: "integrations",
      title: "Integrations",
      icon: <LayersIcon />,
    },
  ],
};
