import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import RadioWrapper from "../Radio";
import { RadioWrapperProps } from "../../../types/IRadio";

export default {
  title: "Components/RadioWrapper",
  component: RadioWrapper,
  argTypes: {
    label: {
      control: "text",
      description: "The label for the radio button",
    },
    checked: {
      control: "boolean",
      description: "Whether the radio button is checked",
    },
    onChange: {
      action: "changed",
      description: "Function that handles the change event",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio button is disabled",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<RadioWrapperProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <RadioWrapper {...args} checked={checked} onChange={handleChange} />;
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: "Option 1",
  checked: false,
  disabled: false,
};

// Disabled Story
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

// Checked Story
export const Checked = Template.bind({});
Checked.args = {
  label: "Option 2",
  checked: true,
  disabled: false,
};
