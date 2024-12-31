import React, { SyntheticEvent } from "react";
import {
  Autocomplete as MuiAutocomplete,
  TextField,
  FormControl,
  FormHelperText,
  AutocompleteChangeReason,
} from "@mui/material";
import AutocompleteProps, { AutocompleteOption } from "./Autocomplete.Interface.ts";

const Autocomplete = ({
  options,
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  multiple = false,
  size = "medium",
  helperText,
  ...rest
}: AutocompleteProps) => (
  <FormControl fullWidth>
    <MuiAutocomplete
      options={options}
      getOptionLabel={(option) => option.label}
    //  value={value}
     onChange={(
      event: SyntheticEvent<Element, Event>,
      value: AutocompleteOption | AutocompleteOption[] | (AutocompleteOption | AutocompleteOption[])[] | null,
      reason: AutocompleteChangeReason,
      details?: any
    ) => {
      if (onChange) {
        onChange(event, value, reason);
      }
    }}
      disabled={disabled}
      multiple={multiple}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          size={size}
        />
      )}
      {...rest}
    />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default Autocomplete;
