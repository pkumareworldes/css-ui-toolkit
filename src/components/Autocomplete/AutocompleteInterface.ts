import { AutocompleteChangeReason, AutocompleteValue } from "@mui/material";

export interface AutocompleteOption {
    value: string | number;
    label: string;
  }
  
  export default interface AutocompleteProps {
    options: AutocompleteOption[]; // List of options for the Autocomplete
    label?: string; // Optional label for the input
    value: string | number; // Controlled value of the Autocomplete
    onChange: (event: React.ChangeEvent<{}>, value: AutocompleteValue<any, any, any, any>, reason: AutocompleteChangeReason,details?: any) => void; // Change handler
   
    placeholder?: string; // Optional placeholder text
    disabled?: boolean; // Optional: Disable the input
    multiple?: boolean; // Allow multiple selections
    size?: "small" | "medium"; // Size of the Autocomplete
    helperText?: string; // Optional helper text below the Autocomplete
    [key: string]: any; // Allow additional props
  }
  