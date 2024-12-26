import React from "react";
import { Meta, Story } from "@storybook/react";
import Layout from "..";
import RightNavigation from "../components/Header/components/RightNavigation";

const headerData = {
  rightNavigationData: [
    { label: "Home", path: "/", icon: "Home" },
    { label: "", path: "/about", icon: "Notifications" },
  ],
  userMenuData: {
    username: "John Doe",
    avatar: "",
    settingsMenu: [
      { label: "Profile", handler: () => alert("Profile clicked") },
      { label: "Logout", handler: () => alert("Logout clicked") },
    ],
  },
  title: "Eworld Header",
  logo: "/favicon.svg",
};

const footerData = {
  content: "Footer Content",
};

const sidebarData = [
  { label: "Dashboard", path: "/dashboard", icon: "Dashboard" },
  { label: "Settings", path: "/settings", icon: "Settings" },
  { label: "Help", path: "/help", icon: "Help" },
];

const pageheaderData = {
  title: "Page Title",
  secondaryTitle: "Secondary Title",
  infoText: "Information about this page",
  infoSecondaryText: "More detailed info",
  breadcrumbs: [
    { linkText: "Home", link: "/" },
  ],
};

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {
    children: { control: "text" },
  },
} as Meta<typeof Layout>;

const Template: Story<typeof Layout> = (args) => (
  <Layout {...args}>
    <div>Main Content</div>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  headerData: {
    ...headerData,
    RightNavigation: <RightNavigation data={headerData.rightNavigationData} />,
  },
  footerData,
  sidebarData,
  pageheaderData,
};
