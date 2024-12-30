import React from "react";
import { Meta, Story } from "@storybook/react";
import { MultiChip, Chip } from "../index";
import { IChipProp } from "../../../types/IChip";
import { DefaultChipProps, multiChipsList } from "./chipSchema";
// Default metadata for the story
export default {
  title: "Components/BasicChips", // Title that will appear in Storybook's sidebar
  component: MultiChip, // Component to showcase in the story
  argTypes: {
    eleProps: {
      control: "object", // Allows the props to be controlled as an object in the UI
      description: "Props to configure the Chip component",
    },
  },
} as Meta;

// Template to generate a story for BasicChips component
const Template: Story<IChipProp> = (args) => <MultiChip {...args} />;

const ChipTemplate: Story<IChipProp> = (args) => <Chip {...args} />;
// Default story for BasicChips component with sample props
export const DefaultChip = ChipTemplate.bind({});

DefaultChip.args = {
  ...DefaultChipProps,
};

// A story demonstrating chips in a column direction
export const MultipleChip = Template.bind({});
MultipleChip.args = {
  direction: "row",
  varient: "outlined",
  values: multiChipsList,
};
