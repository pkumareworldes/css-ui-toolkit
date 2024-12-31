export interface SelectOption {
  value: string | number;
  label: string;
}

export default interface TextFieldProps {
  label: string; // Label for the TextField
  value: string; // Value of the TextField
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  placeholder?: string; // Optional placeholder text
  type?: string; // Type of input (e.g., text, password, email)
  disabled?: boolean; // Optional: Disable the TextField
  helperText?: string; // Optional helper text below the TextField
  variant?: "standard" | "filled" | "outlined"; // Optional: TextField variant
  multiline?: boolean; // Enable multiline input
  rows?: number; // Number of rows for the multiline input
  select?: boolean; // Enable select dropdown
  options?: SelectOption[]; // Options for the select dropdown
  size?: "small" | "medium"; // Size of the TextField
  margin?: "none" | "dense" | "normal"; // Margin around the TextField
  width?: string | number; // Width of the TextField
  height?: string | number; // Height of the TextField
  //[key: string]: any; // Allow additional props
}
