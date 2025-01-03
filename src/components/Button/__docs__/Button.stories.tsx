import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import Button from "../Button";

export default {
  title: "MUI-Button",
  component: Button,
} as Meta<typeof Button>;

const Template: Meta<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  label: "Click me!",
  variant:"contained",
  color:"success",
  size: "medium"

};

export const Variants: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="text" label="Text Button" />
    <Button variant="contained" label="Contained Button" />
    <Button variant="outlined" label="Outlined Button" />
  </Stack>
);

export const Colors: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" label="Primary" />
    <Button variant="contained" color="secondary" label="Secondary" />
    <Button variant="contained" color="success" label="Success" />
    <Button variant="contained" color="error" label="Error" />
  </Stack>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" size="small" label="Small" />
    <Button variant="contained" size="medium" label="Medium" />
    <Button variant="contained" size="large" label="Large" />
  </Stack>
);
