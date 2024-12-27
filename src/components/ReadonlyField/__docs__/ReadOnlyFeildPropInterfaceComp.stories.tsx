// ROF.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import ReadOnlyField from "../index";
import { IReadOnlyFeildProp } from "../readOnlyFieldInterface";
import {
  defaultROFProps,
  LinkROFProps,
  IconROFProps,
  ChipROFProps,
  IconChipROFProps,
} from "../readOnlyFieldSchema";
// import { FaBeer } from "react-icons/fa"; // Example icon from react-icons

// Define Storybook metadata
export default {
  title: "Components/ReadOnlyField", // Storybook section and component name
  component: ReadOnlyField, // The component we're documenting
  argTypes: {
    eleProps: {
      control: "object",
      description: "Props to configure the ROF component",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<IReadOnlyFeildProp> = (args) => (
  <ReadOnlyField {...args} />
);

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  eleProps: defaultROFProps,
};

// Define a second variant (without link and icon)
export const FieldWithLink = Template.bind({});
FieldWithLink.args = {
  eleProps: LinkROFProps,
};

export const FieldWithIcon = Template.bind({});
FieldWithIcon.args = {
  eleProps: IconROFProps,
};

export const FeildWithChip = Template.bind({});
FeildWithChip.args = {
  eleProps: ChipROFProps,
};

export const FeildWithIconAndChip = Template.bind({});
FeildWithIconAndChip.args = {
  eleProps: IconChipROFProps,
};
