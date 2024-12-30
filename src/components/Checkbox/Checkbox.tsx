import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckboxWrapperProps } from '../../types/ICheckboxProps'; 
const CheckboxWrapper: React.FC<CheckboxWrapperProps> = ({
    label,
    checked,
    onChange,
    disabled = false,
    size = 'medium',
    color = 'primary',
    ...rest
  }) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            size={size}
            color={color}
            {...rest} 
          />
        }
        label={label}
      />
    );
  };

export default CheckboxWrapper;
