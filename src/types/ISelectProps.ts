import { SelectChangeEvent, StandardSelectProps } from '@mui/material';

export interface SelectWrapperProps extends Omit<StandardSelectProps, 'value' | 'onChange'> {
  label?: string;
  options: { value: string | number; label: string }[]; 
  helperText?: string;
  multiple?: boolean;
  value: string | number | (string | number)[]; 
  onChange: (event: SelectChangeEvent<unknown>) => void; 
}
