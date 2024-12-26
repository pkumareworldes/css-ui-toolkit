import React from "react";
import { Meta, Story } from "@storybook/react";
import BasicChips from "../Chip";
import { ChipPropInterface } from "../chipInterface";

// Default metadata for the story
export default {
  title: "Components/BasicChips", // Title that will appear in Storybook's sidebar
  component: BasicChips, // Component to showcase in the story
  argTypes: {
    eleProps: {
      control: 'object', // Allows the props to be controlled as an object in the UI
      description: 'Props to configure the Chip component',
    },
  },
} as Meta;

// Template to generate a story for BasicChips component
const Template: Story<ChipPropInterface> = (args) => <BasicChips {...args} />;

// Default story for BasicChips component with sample props
export const DefaultChip = Template.bind({});
DefaultChip.args = {
  eleProps: {
    direction: "row", // The direction of the Stack (horizontal)
    spacing: 1, // Spacing between chips
    title: "Default Chip", // Label for the chip
    variant: "filled", // Variant style of the chip (filled or outlined)
  },
};

// A story demonstrating chips in a column direction
export const ColumnChips = Template.bind({});
ColumnChips.args = {
  eleProps: {
    direction: "column", // Chips arranged in a vertical stack
    spacing: 2, // More spacing between chips
    title: "Column Chip", // Label for the chip
    variant: "outlined", // Use outlined variant for chips
  },
};

// A story demonstrating a different variant of chips
export const OutlinedChip = Template.bind({});
OutlinedChip.args = {
  eleProps: {
    direction: "row", // Chips arranged in horizontal direction
    spacing: 1, // Default spacing
    title: "Outlined Chip", // Label for the chip
    variant: "outlined", // Outlined variant of the chip
  },
};
