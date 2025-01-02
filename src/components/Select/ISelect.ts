import { SelectChangeEvent, StandardSelectProps } from "@mui/material";

export interface SelectWrapperProps
  extends Omit<StandardSelectProps, "value" | "onChange"> {
  label?: string;
  options: { value: string | number; label: string }[]; // Options with value and label properties
  helperText?: string;
  multiple?: boolean; // New prop to handle multiple selection
  value: string | number | (string | number)[]; // Conditionally allow single or multiple values
  onChange: (event: SelectChangeEvent<unknown>) => void; // Updated onChange event type
}
