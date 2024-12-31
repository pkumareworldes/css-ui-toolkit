import React from "react";
import {ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import Toggle from "./Toogle";


export default {
  title: "Toggle",
  component: Toggle,
} as Meta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  checked: true,
  label: "Enable Notifications",
  color: "primary",
  size: "medium",
  onChange: (event, checked) => console.log(`Toggle is now ${checked ? "ON" : "OFF"}`),
};

export const Variants: ComponentStory<typeof Toggle> = () => (
  //<Stack spacing={2} maxWidth={300}>
  <> 
  <Toggle checked color="primary" label="Primary" onChange={() => {}} />
    <Toggle checked color="secondary" label="Secondary" onChange={() => {}} />
    <Toggle checked color="success" label="Success" onChange={() => {}} />
    <Toggle checked color="error" label="Error" onChange={() => {}} />
    </>
 // </Stack>
);

export const Colors: ComponentStory<typeof Toggle> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Toggle checked color="primary" label="Primary Color" onChange={() => {}} />
    <Toggle checked color="secondary" label="Secondary Color" onChange={() => {}} />
    <Toggle checked color="success" label="Success Color" onChange={() => {}} />
    <Toggle checked color="error" label="Error Color" onChange={() => {}} />
  </Stack>
);

export const Sizes: ComponentStory<typeof Toggle> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Toggle checked size="small" label="Small Size" onChange={() => {}} />
    <Toggle checked size="medium" label="Medium Size" onChange={() => {}} /> 
  </Stack>
);

export const Controlled: ComponentStory<typeof Toggle> = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Stack spacing={2} maxWidth={300}>
      <Toggle
        checked={isChecked}
        onChange={handleChange}
        label={`The toggle is ${isChecked ? "ON" : "OFF"}`}
        disabled={false}
        helperText="This toggle enables notifications."
      />
    </Stack>
  );
};
