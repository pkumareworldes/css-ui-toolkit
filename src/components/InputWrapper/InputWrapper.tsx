import React from 'react';
import {
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputAdornment,
  Tooltip,
  IconButton,
  FormHelperText,
  OutlinedInput
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info'; // Correct import
import { InputFieldWrapperProps } from '../../types/IInputWrapperProps';

const InputFieldWrapper: React.FC<InputFieldWrapperProps> = ({
  label,
  required,
  info,
  placeholder,
  error,
  helperText,
  children,
  ...rest
}) => {
  // Check if children contains a MUI Select component
  const isSelectChild = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === Select
  );

  return (
    <FormControl fullWidth required={required} error={error} {...rest}>
      {/* Render the FormLabel with the required asterisk and info icon */}
      <FormLabel sx={{ '& .MuiFormLabel-asterisk': { display: 'none' } }}>
        {label}
        {required && <span style={{ color: 'red' }}>*</span>} {/* Only show red * if required */}
        {info && (
          <Tooltip title={info} arrow>
            <IconButton sx={{ padding: 0, marginLeft: 1 }}>
              <InfoIcon fontSize="small" color="info" />
            </IconButton>
          </Tooltip>
        )}
      </FormLabel>

      {/* Handle the children and apply logic for placeholder with select */}
      {React.Children.map(children, (child) => {
        // Ensure that the child is a valid React element and not null or undefined
        if (React.isValidElement(child)) {
          // If the child is a Select component and there's a placeholder, add a MenuItem as the placeholder
          if (child.type === Select && placeholder) {
            return React.cloneElement(child, {
              // Ensure that children prop is properly handled for Select component
              children: [
                <MenuItem value="" key="placeholder" disabled>
                  <em>{placeholder}</em> {/* Placeholder text */}
                </MenuItem>,
                ...React.Children.toArray(child.props.children), // Spread the rest of the MenuItems
              ],
              input: <OutlinedInput notched={false} />, // Remove legend from Select
            });
          }

          // Pass the placeholder to other child components (like TextField)
          return React.cloneElement(child, {
            placeholder: placeholder,
          });
        }

        // If it's not a valid React element (like string, number, etc.), just return the child
        return child;
      })}

      {/* Conditionally render error message only if error is true */}
      {error && helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputFieldWrapper;
