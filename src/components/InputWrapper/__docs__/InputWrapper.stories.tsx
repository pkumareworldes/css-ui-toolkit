import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import InputFieldWrapper from '../InputWrapper';
import { InputFieldWrapperProps } from '../../../types/IInputWrapperProps'; 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default {
  title: 'Components/InputFieldWrapper',
  component: InputFieldWrapper,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the input field',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input field is required',
    },
    info: {
      control: 'text',
      description: 'Additional information or helper text',
    },
    children: {
      control: 'element',
      description: 'Slot for any MUI component or custom component',
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<InputFieldWrapperProps> = (args) => {
  return <InputFieldWrapper {...args}>{args.children}</InputFieldWrapper>;
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  required: false,
  info: '',
  children: <TextField variant="outlined" fullWidth />,
};

// Required Input Field Story
export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

// Input Field with Info Story
export const WithInfo = Template.bind({});
WithInfo.args = {
  label: 'Email',
  required: false,
  info: 'Enter a valid email address',
  children: <TextField variant="outlined" fullWidth />,
};

// Input Field with Custom Component - Select
export const WithSelectComponent = Template.bind({});
WithSelectComponent.args = {
  label: 'Country',
  required: false,
  info: '',
  children: (
    <Select
      label="Country"
      defaultValue=""
      variant="outlined"
      fullWidth
    >
      <MenuItem value="us">United States</MenuItem>
      <MenuItem value="ca">Canada</MenuItem>
      <MenuItem value="uk">United Kingdom</MenuItem>
    </Select>
  ),
};
