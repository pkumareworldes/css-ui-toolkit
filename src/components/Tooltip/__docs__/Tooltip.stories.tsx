import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

import { Tooltip } from "../index";
import { Grid } from "../../Grid";


export default {
  title: "MUI-tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;


export const Basic: ComponentStory<typeof Tooltip> = () => (
  <Stack spacing={2} >
    <Grid container spacing={2}>
      <Tooltip title="Tooltip 1">
        <span> Tooltip 1</span>
      </Tooltip>
    </Grid>
  </Stack>
);
