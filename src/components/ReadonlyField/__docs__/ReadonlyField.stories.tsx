// ROF.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import ReadOnlyField from "../ReadOnlyField";
import { IReadOnlyFeild } from "../IReadOnlyField";
import {
  defaultROFProps,
  LinkROFProps,
  IconROFProps,
} from "./readOnlyFieldSchema";
// import { FaBeer } from "react-icons/fa"; // Example icon from react-icons

// Define Storybook metadata
export default {
  title: "Components/ReadOnlyField", // Storybook section and component name
  component: ReadOnlyField, // The component we're documenting
} as Meta;

// Template function to create the component with different args
const Template: Story<IReadOnlyFeild> = (args) => <ReadOnlyField {...args} />;

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  ...defaultROFProps,
};

// Define a second variant (without link and icon)
export const FieldWithLink = Template.bind({});
FieldWithLink.args = {
  ...LinkROFProps,
};

export const FieldWithIcon = Template.bind({});
FieldWithIcon.args = {
  ...IconROFProps,
};
