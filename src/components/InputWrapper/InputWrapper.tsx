import React from 'react';
import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import { InputFieldWrapperProps } from '../../types/IInputWrapperProps';

const InputFieldWrapper: React.FC<InputFieldWrapperProps> = ({ label, required, info, children, ...rest }) => {
  return (
    <FormControl fullWidth required={required} {...rest}>
      <FormLabel>
        {label}
        {required = false && <span style={{ color: 'red' }}>*</span>}
        {info && <span style={{ color: 'gray', marginLeft: 4 }}>({info})</span>}
      </FormLabel>
      {children}
    </FormControl>
  );
};

export default InputFieldWrapper;
