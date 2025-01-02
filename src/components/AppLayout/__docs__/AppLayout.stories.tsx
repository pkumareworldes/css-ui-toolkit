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
import { Stack } from "../../Stack";

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
    mode: "light",
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#000000"
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
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#000000"
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

const View = () => {
  return (
    <>
     <Stack  direction="row" alignItems="center">
        <h6>Left</h6>
      </Stack>
      <Stack  direction="row" alignItems="center">
        <h6>Right</h6>
      </Stack>
    </>
   
  )
}

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
    <AppLayoutProvider {...args} theme={theme} navigation={NAVIGATION}>
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
        footerView={<View/>}
        toolbarView={<View/>}
      >
       Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.
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
