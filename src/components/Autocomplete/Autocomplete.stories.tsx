import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "./AutoComplete.Component";
import { AutocompleteOption } from "./Autocomplete.Interface.ts";
import { AutocompleteValue, AutocompleteChangeReason } from "@mui/material";

export default {
  title: "Autocomplete",
  component: Autocomplete,
} as Meta<typeof Autocomplete>;

export const Playground: StoryObj<typeof Autocomplete> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event: React.ChangeEvent<{}>, value: string | null) => {
      setSelectedValue(value || "");
      console.log(`Selected value: ${value}`);
    };

    return (
      <Autocomplete
        label="Playground Autocomplete"
        value={selectedValue}
        // onChange={handleChange}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        placeholder="Choose an option"
        helperText="Select a value from the dropdown." onChange={function (event: React.ChangeEvent<{}>, value: AutocompleteValue<any, any, any, any>, reason: AutocompleteChangeReason, details?: any): void {
          throw new Error("Function not implemented.");
        } }      />
    );
  },
};

export const MultipleSelection: StoryObj<typeof Autocomplete> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string|number>("");

    const handleChange = (event: React.ChangeEvent<{}>, value: string|number) => {
      setSelectedValue(value );
      console.log(`Selected values: ${value}`);
    };

    return (
      <Autocomplete
        label="Multiple Selection"
        value={selectedValue}
        onChange={handleChange}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        multiple
        placeholder="Choose multiple options"
        helperText="You can select multiple values."
      />
    );
  },
};

export const GroupedAutocomplete: StoryObj<typeof Autocomplete> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>("");

    
    const handleChange = (
      event: React.ChangeEvent<{}>,
      value: any,
      reason: AutocompleteChangeReason,
      details?: any
    ) => {
       setSelectedValue(value);
      console.log("Selected value:", value);
    };

    const groupedOptions = [
      { value: "fruit1", label: "Apple", group: "Fruits" },
      { value: "fruit2", label: "Banana", group: "Fruits" },
      { value: "veg1", label: "Carrot", group: "Vegetables" },
      { value: "veg2", label: "Broccoli", group: "Vegetables" },
    ];

    return (
      <Autocomplete
        label="Grouped Autocomplete"
        value={selectedValue}
        onChange={handleChange}
        options={groupedOptions}
        placeholder="Select an item"
        groupBy={(option: { group: any; }) => option.group}
        helperText="Items are grouped by category."
      />
    );
  },
};




