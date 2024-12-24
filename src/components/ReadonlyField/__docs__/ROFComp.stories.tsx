// ROF.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import ROF from "../ROF";
import { ROFPropInterface } from "../rofInterface";
// import { FaBeer } from "react-icons/fa"; // Example icon from react-icons

// Define Storybook metadata
export default {
  title: "Components/ROF", // Storybook section and component name
  component: ROF, // The component we're documenting
  argTypes: {
    eleProps: {
      control: "object",
      description: "Props to configure the ROF component",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<ROFPropInterface> = (args) => <ROF {...args} />;

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  eleProps: {
    fieldName: "Field Label",
    fieldValue: "Click Me",
    fieldColor: "#1976d2", // Blue color for the text
    isLink: true,
    link: "https://example.com",
    underline: "hover", // Underline on hover for the link
    alignRow: true, // Display in grid layout
    iconComp: null, // Icon to be displayed in the beginning
    cssProps: {
      fontSize: "16px",
    },
  },
};

// Define a second variant (without link and icon)
export const NoLinkNoIcon = Template.bind({});
NoLinkNoIcon.args = {
  eleProps: {
    fieldName: "Static Field",
    fieldValue: "Just a value",
    fieldColor: "#333", // Dark gray color for the text
    isLink: false, // No link
    alignRow: false, // Flex layout instead of grid
    iconComp: null, // No icon
    cssProps: {
      fontSize: "14px",
      padding: "10px",
    },
  },
};
