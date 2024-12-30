import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { SelectWrapperProps } from '../../types/ISelectProps'; 

const SelectWrapper: React.FC<SelectWrapperProps> = ({ label, options, helperText, multiple = false, value, onChange, ...rest }) => {
  return (
    <FormControl fullWidth>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        multiple={multiple} 
        value={value}
        onChange={onChange}
        {...rest}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SelectWrapper;
