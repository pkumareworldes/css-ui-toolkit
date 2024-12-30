import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import CheckboxWrapper from "../Checkbox";
import { CheckboxWrapperProps } from "../../../types/ICheckbox";
import { Checkbox } from "@mui/material";

export default {
  title: "Components/CheckboxWrapper",
  component: CheckboxWrapper,
  argTypes: {
    label: {
      control: "text",
      description: "The label for the checkbox",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    onChange: {
      action: "changed",
      description: "Function that handles the change event",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
      description: "The size of the checkbox",
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "error"],
      },
      description: "The color of the checkbox",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<CheckboxWrapperProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <CheckboxWrapper {...args} checked={checked} onChange={handleChange} />
  );
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: "Accept Terms & Conditions",
  checked: false,
  disabled: false,
  size: "medium",
  color: "primary",
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
  label: "Remember Me",
  checked: true,
  disabled: false,
  size: "medium",
  color: "primary",
};

// Small Size Checkbox (Direct Usage of Checkbox component)
export const SmallSize = Template.bind({});
SmallSize.args = {
  label: "Small Checkbox",
  checked: false,
  size: "small",
  color: "primary",
};

// Secondary Color Checkbox (Direct Usage of Checkbox component)
export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  label: "Secondary Color",
  checked: false,
  size: "medium",
  color: "secondary",
};

// Error Color Checkbox (Direct Usage of Checkbox component)
export const ErrorColor = Template.bind({});
ErrorColor.args = {
  label: "Error Color",
  checked: false,
  size: "medium",
  color: "error",
};

// **Additional Checkbox Variations using direct Checkbox component**

export const Variations = () => {
  const label = {
    label: "Check Me",
  };

  return (
    <div>
      <div>
        <Checkbox {...label} defaultChecked size="small" />
      </div>
      <div>
        <Checkbox {...label} defaultChecked />
      </div>
      <div>
        <Checkbox
          {...label}
          defaultChecked
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} // Custom font size using sx
        />
      </div>
    </div>
  );
};
