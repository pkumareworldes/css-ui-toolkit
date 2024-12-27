import React from "react";
import { Meta, Story } from "@storybook/react";
import BasicChips from "../index";
import { IChipProp } from "../chipInterface";
import { DefaultChipProps, MultiChip } from "../chipSchema";
// Default metadata for the story
export default {
  title: "Components/BasicChips", // Title that will appear in Storybook's sidebar
  component: BasicChips, // Component to showcase in the story
  argTypes: {
    eleProps: {
      control: "object", // Allows the props to be controlled as an object in the UI
      description: "Props to configure the Chip component",
    },
  },
} as Meta;

// Template to generate a story for BasicChips component
const Template: Story<IChipProp> = (args) => <BasicChips {...args} />;

// Default story for BasicChips component with sample props
export const DefaultChip = Template.bind({});
DefaultChip.args = {
  eleProps: DefaultChipProps,
};

// A story demonstrating chips in a column direction
export const MultipleChip = Template.bind({});
MultipleChip.args = {
  eleProps: MultiChip,
};
