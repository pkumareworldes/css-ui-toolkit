// Storybook configuration file
import React from "react";
import { Meta, Story } from "@storybook/react";
import SidebarNavigationDrawer from "../SidebarNavigationDrawer";
import { SidebarNavigationDrawerProps } from "../../../types/ILayout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
// Define Storybook metadata
export default {
  title: "Layout/Sidebar",
  component: SidebarNavigationDrawer,
} as Meta;

// Template function to create the component with different args
const Template: Story<SidebarNavigationDrawerProps> = (args) => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const handleSetNavigationExpanded = (value) => {
    console.log("handle", value);
  };
  return (
    <SidebarNavigationDrawer
      {...args}
      handleSetNavigationExpanded={handleSetNavigationExpanded}
      selectedItemIdRef={ref}
      layoutRef={ref}
    />
  );
};

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  isNavigationExpanded: true,
  isDesktopNavigationExpanded: true,
  isMobileNavigationExpanded: false,
  hasDrawerTransitions: false,
  isNavigationFullyExpanded: true,
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
