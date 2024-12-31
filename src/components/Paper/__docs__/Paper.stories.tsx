import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

import { Paper } from "../index";
import { Grid } from "../../Grid";

export default {
  title: "MUI-paper",
  component: Paper,
} as Meta<typeof Paper>;


export const Basic: ComponentStory<typeof Paper> = () => (
  <Stack spacing={2} >
    <Grid container spacing={2}>
      <Paper elevation={1}>
        Elevation 1
      </Paper>
      <Paper elevation={20}>
        Elevation 20
      </Paper>

    </Grid>
  </Stack>
);
