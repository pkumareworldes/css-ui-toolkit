import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { Divider } from '../index'

export default {
  title: "MUI-Divider",
  component: Divider,
} as Meta<typeof Divider>;


export const Basic: ComponentStory<typeof Divider> = () => (
  <Stack spacing={2} >
    <h2>Basic divider</h2>
    <Divider />
  </Stack>
);
