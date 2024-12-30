import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import Typography from "../Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as Meta<typeof Typography>;

const Template: Meta<typeof Typography> = (args) => <Typography {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  label: "Click me!",
  variant: "contained",
  color: "success",
  size: "medium",
};

export const Variants: ComponentStory<typeof Typography> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Typography variant="h1" title="h1. Heading" />
    <Typography variant="h2" title="h2. Heading" />
    <Typography variant="h3" title="h3. Heading" />
    <Typography variant="h4" title="h4. Heading" />
    <Typography variant="h5" title="h5. Heading" />
    <Typography variant="h6" title="h6. Heading" />
    <Typography
      variant="subtitle1"
      gutterBottom
      title=" subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur"
    />
    <Typography
      variant="subtitle2"
      gutterBottom
      title=" subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur"
    />
    <Typography
      variant="body1"
      gutterBottom
      title=" body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <Typography
      variant="body2"
      gutterBottom
      title=" body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <Typography
      variant="button"
      gutterBottom
      sx={{ display: "block" }}
      title="button text"
    />
    <Typography
      variant="caption"
      gutterBottom
      sx={{ display: "block" }}
      title="caption text"
    />
    <Typography
      variant="overline"
      gutterBottom
      sx={{ display: "block" }}
      title=" overline text"
    />
  </Stack>
);
