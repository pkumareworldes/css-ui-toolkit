import React from "react";
import { Radio, FormControlLabel } from "@mui/material";
import { RadioWrapperProps } from "../../types/IRadio";

const RadioWrapper: React.FC<RadioWrapperProps> = ({
  label,
  checked,
  onChange,
  disabled,
  ...rest
}) => {
  return (
    <FormControlLabel
      control={
        <Radio
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default RadioWrapper;
