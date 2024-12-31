//import React from "react";
import {
  TextField as MuiTextField,
  FormControl,
  FormHelperText,
  MenuItem
} from "@mui/material";
import TextFieldProps from "./Textfield.Interface";

const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  helperText,
  variant = "outlined", // Default to "outlined"
  multiline = false,
  rows,
  select = false,
  options = [],
  size = "medium", // Default size
  margin = "none", // Default margin
  width = "100%", // Default width
  height, // Optional height
  ...rest
}: TextFieldProps) => (
  <FormControl fullWidth
  margin={margin}
  sx={{ width, height }} >
    <MuiTextField
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      variant={variant} // Pass the variant to the Material-UI TextField
      multiline={multiline} // Enables multiline input
      rows={rows} // Sets the number of rows for multiline input
      select={select} // Enables select dropdown
      size={size} // Set size
      margin={margin} // Set margin
      {...rest}
      >
      {select &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </MuiTextField>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default TextField;
