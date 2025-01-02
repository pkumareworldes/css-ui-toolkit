// Storybook configuration file
import React from "react";
import { Meta, Story } from "@storybook/react";
import Footer from "../Footer";
import {Stack} from "../../Stack";
import { FooterProps } from "../IFooter";
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
const Template: Story<FooterProps> = (args) => {
  const FooterView = () => {
    return (
      <>
       <Stack  direction="row" alignItems="center">
          <h6>Left</h6>
          <h6>right</h6>
        </Stack>
        <Stack  direction="row" alignItems="center">
          <h6>Left</h6>
          <h6>right</h6>
        </Stack>
      </>
     
    )
  }
  return (
    <Footer {...args} > 
      <FooterView/>
    </Footer>
  )
};

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  footerTheme: { ...footerThemeConfig },
  footerLeftPanel: <Typography title="Left panle" />,
  footerRightPanel: <Typography title="Right panle" />,
};
