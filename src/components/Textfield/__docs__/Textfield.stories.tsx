import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextField from "../Textfield.Component";

export default {
  title: "TextField",
  component: TextField,
} as Meta<typeof TextField>;

export const Playground: StoryObj<typeof TextField> = {
  args: {
    label: "Name",
    value: "",
    placeholder: "Enter your name",
    onChange: (event) => console.log(event.target.value),
    type: "text",
    helperText: "This is a required field.",
    variant: "outlined",
    size: "medium", // Medium size
  },
};

export const Disabled: StoryObj<typeof TextField> = {
  args: {
    label: "Disabled Field",
    value: "",
    onChange: () => {},
    placeholder: "Disabled input",
    type: "text",
    disabled: true,
    variant: "standard",
    size: "small", // Medium size
    
  },
};

export const WithHelperText: StoryObj<typeof TextField> = {
  args: {
    label: "Email",
    value: "",
    placeholder: "Enter your email",
    onChange: (event) => console.log(event.target.value),
    type: "email",
    helperText: "We'll never share your email.",
    variant: "filled",
    size: "medium", // Medium size
  },
};

export const Multiline: StoryObj<typeof TextField> = {
  args: {
    label: "Description",
    value: "",
    placeholder: "Enter a detailed description",
    onChange: (event) => console.log(event.target.value),
    multiline: true, // Enables multiline input
    rows: 4, // Sets the number of rows for multiline input
    helperText: "You can write multiple lines.",
    variant: "outlined",
    size: "medium", // Medium size
    margin: "none", // Set margin to dense
  },
};

export const ControlledSelect: StoryObj<typeof TextField> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
      console.log(`Selected value: ${event.target.value}`);
    };

    return (
      <TextField
        label="Controlled Select"
        value={selectedValue} // Controlled value
        onChange={handleChange} // Update state on change
        select // Enables the select dropdown
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        helperText="Please select an option."
        variant="outlined"
      />
    );
  },
};

export const CustomSize: StoryObj<typeof TextField> = {
  args: {
    label: "Custom Size",
    value: "",
    placeholder: "Custom width and height",
    onChange: (event) => console.log(event.target.value),
    width: "300px", // Custom width
    height: "50px", // Custom height (Explicitly defined)
    variant: "outlined",
  },
};