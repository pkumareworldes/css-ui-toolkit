import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

import { Grid } from "../index";
import { Paper } from "@mui/material";

export default {
  title: "MUI-Grid",
  component: Grid,
} as Meta<typeof Grid>;



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

export const Basic: ComponentStory<typeof Grid> = () => (
  <Stack spacing={2} >
    <Grid container spacing={2}>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
    </Grid>
  </Stack>
);
