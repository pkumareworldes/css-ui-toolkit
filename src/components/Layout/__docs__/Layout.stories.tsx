import React from "react";
import { Meta, Story } from "@storybook/react";
import Layout from "..";
import RightNavigation from "../components/Header/components/RightNavigation";
import { rightNavigationData } from '../components/Header/data';

const headerData = {

  userMenuData: {
    username: "John Doe",
    avatar: "",
    settingsMenu: [
      { label: "Profile", handler: () => alert("Profile clicked") },
      { label: "Logout", handler: () => alert("Logout clicked") },
    ],
    loginHandler: () => alert("Login clicked")
  },
  title: "Eworld Header",
  logo: "/favicon.svg",
  headerUrl: '/test',
};

const footerData = {
  termsLabel: "Terms and Conditions",
  termsUrl: "#",
  buildVersionLabel: "Build Version",
  buildVersion: "1.0.0",
  contactLabel: "Contact Us",
  contactDetails: "test@test.com",
};

const sidebarData = [
  { label: "Dashboard", path: "/dashboard", icon: "Dashboard" },
  { label: "Settings", path: "/settings", icon: "Settings" },
  { label: "Help", path: "/help", icon: "Help" },
];

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
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
    RightNavigation: <RightNavigation data={rightNavigationData} />,
  },
  footerData,
  sidebarData,
};
