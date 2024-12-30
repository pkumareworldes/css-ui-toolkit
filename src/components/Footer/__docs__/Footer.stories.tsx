// Storybook configuration file
import React from "react";
import { Meta, Story } from "@storybook/react";
import Footer from "../Footer";
import { FooterProps } from "../../../types/IFooter";
import { footerThemeConfig } from "./footerProps";
import Typography from "../../Typography/Typography";

// Define Storybook metadata
export default {
  title: "Layout/Footer",
  component: Footer,
  argTypes: {
    footerTheme: { ...footerThemeConfig },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<FooterProps> = (args) => <Footer {...args} />;

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  footerTheme: { ...footerThemeConfig },
  footerLeftPanel: <Typography title="Left panle" />,
  footerRightPanel: <Typography title="Right panle" />,
};
