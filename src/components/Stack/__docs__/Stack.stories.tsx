import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { styled } from '@mui/material/styles';

import { Stack } from "../index";
import { Divider, Paper } from "@mui/material";

export default {
  title: "MUI-Stack",
  component: Stack,
} as Meta<typeof Stack>;



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const Basic: ComponentStory<typeof Stack> = () => (
  <div >
    <h2>Column Stack</h2>
    <Stack
      direction="column"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  </div>
);
