import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import SelectWrapper from "../Select";
import { SelectWrapperProps } from "../../../types/ISelect";

// Define Storybook metadata
export default {
  title: "Components/SelectWrapper",
  component: SelectWrapper,
  argTypes: {
    label: {
      control: "text",
      description: "The label for the select dropdown",
    },
    options: {
      control: "array",
      description: "The list of options to be displayed in the select dropdown",
    },
    value: {
      control: "array",
      description:
        "The current selected values in the dropdown (array for multiple select)",
    },
    onChange: {
      action: "changed",
      description: "Function that handles the change event",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the select dropdown",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select dropdown is disabled",
    },
    fullWidth: {
      control: "boolean",
      description:
        "Whether the select component takes up the full width of its container",
    },
    multiple: {
      control: "boolean",
      description: "Whether the select allows multiple selections",
    },
    variant: {
      control: {
        type: "select",
        options: ["standard", "outlined", "filled"],
      },
      description: "Variant of the select component",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
      description: "Size of the select component",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<SelectWrapperProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <SelectWrapper {...args} value={selectedValue} onChange={handleChange} />
  );
};

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  label: "Select a Fruit",
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
  value: "apple",
  helperText: "Please select your favorite fruit.",
  disabled: false,
  fullWidth: false,
  multiple: false,
  variant: "standard",
  size: "medium",
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: "Select Fruits",
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
  value: ["apple", "banana"],
  helperText: "Select multiple fruits.",
  disabled: false,
  fullWidth: false,
  multiple: true,
  variant: "standard",
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const OutlinedSelect = Template.bind({});
OutlinedSelect.args = {
  label: "Select Fruits (Outlined)",
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
  value: "apple",
  helperText: "Please select your favorite fruit.",
  disabled: false,
  fullWidth: false,
  multiple: false,
  variant: "outlined",
  size: "medium",
};

export const SmallSizeSelect = Template.bind({});
SmallSizeSelect.args = {
  label: "Select a Fruit (Small Size)",
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
  value: "apple",
  helperText: "Please select your favorite fruit.",
  disabled: false,
  fullWidth: false,
  multiple: false,
  variant: "standard",
  size: "small",
};

export const FilledSelect = Template.bind({});
FilledSelect.args = {
  label: "Select Fruits (Filled)",
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
  value: "apple",
  helperText: "Please select your favorite fruit.",
  disabled: false,
  fullWidth: false,
  multiple: false,
  variant: "filled",
  size: "medium",
};
