// Storybook configuration file
import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from "../Header";
import { HeaderProps } from "../../../types/IHeader";
import { headerThemeConfig } from "./headerProps";
import Typography from "../../Typography/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
// Define Storybook metadata
export default {
  title: "Layout/Header",
  component: Header,
  argTypes: {
    footerTheme: { ...headerThemeConfig },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  appTitle: "CSS",
  headerTheme: { ...headerThemeConfig },
  headerLeftPanel: <Typography title="Left panle" />,
  headerRightPanel: <Typography title="Right panle" />,
  sidebarFooter: <Typography title="Right panle" />,
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
