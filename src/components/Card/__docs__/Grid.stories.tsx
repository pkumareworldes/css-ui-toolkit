import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import Card from "../Card";
import { CardContent, Typography } from "@mui/material";

export default {
  title: "MUI-Card",
  component: Card,
} as Meta<typeof Card>;


export const Basic: ComponentStory<typeof Card> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Card sx={{ minWidth: 275 }}>
      <h2>Card content below</h2>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">

        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  </Stack>
);
