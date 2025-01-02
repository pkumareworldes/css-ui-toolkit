import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputFieldWrapper from '../InputWrapper';
import { InputFieldWrapperProps } from '../IInputWrapperProps';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

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
    error: {
      control: 'boolean',
      description: 'Whether there is an error on the field',
    },
    helperText: {
      control: 'text',
      description: 'Error message to display below the field',
    },
    children: {
      control: 'element',
      description: 'Slot for any MUI component or custom component',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text to show inside the input field',
    },
  },
} as Meta;

const Template: Story<InputFieldWrapperProps> = (args) => {
  return <InputFieldWrapper {...args}>{args.children}</InputFieldWrapper>;
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  required: false,
  info: '',
  children: <TextField variant="outlined" fullWidth placeholder="Enter username" />,
};

// Required Field Story
export const Required = Template.bind({});
Required.args = {
  label: 'Username',
  required: true, 
  info: '',
  children: <TextField variant="outlined" fullWidth placeholder="Enter username" />,
};

// Input Field with Info Story
export const WithInfo = Template.bind({});
WithInfo.args = {
  label: 'Email',
  required: false,
  info: 'Enter a valid email address',
  children: <TextField variant="outlined" fullWidth placeholder="Enter email" />,
};

// Input Field with Placeholder
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Username',
  required: false,
  info: '',
  placeholder: 'Enter your username',  
  children: <TextField variant="outlined" fullWidth />,
};

// Input Field with Error Story
export const WithError = Template.bind({});
WithError.args = {
  label: 'Username',
  required: false,
  info: 'Username is required',
  error: true,  
  helperText: 'Please enter a username',  
  children: <TextField variant="outlined" fullWidth placeholder="Enter username" />,
};

// Input Field with Select Component (with Error)
export const WithSelectComponent = Template.bind({});
WithSelectComponent.args = {
  label: 'Country',
  required: false,
  info: '',
  error: false,
  helperText: '',
  placeholder: 'Please select a country', 
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

// Select with Error Story
export const SelectWithError = Template.bind({});
SelectWithError.args = {
  label: 'Country',
  required: true,  // Required select field
  error: true,     // Error state
  helperText: 'Please select a country',
  info: 'Select your country of residence',
  placeholder: 'Please select a country', 
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

// Radio Button Example
export const WithRadio = Template.bind({});
WithRadio.args = {
  label: 'Gender',
  required: true,
  info: '',
  children: (
    <>
      <FormControlLabel
        control={<Radio />}
        label="Male"
        value="male"
      />
      <FormControlLabel
        control={<Radio />}
        label="Female"
        value="female"
      />
    </>
  ),
};
