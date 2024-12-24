export interface ChipInterface {
  title: string;
  maxWidth: string | number;
  outline: boolean;
  filled: boolean;
  borderColor: string | number;
  spacing: string | number;
  direction: "row" | "row-reverse"; // row column
  variant: "outlined" | "filled"; // Restrict variants to MUI types
  cssProps: {
    width?: string | number; // Can be a string (e.g., '500px') or a number (e.g., 500)
    height?: string | number; // Can be a string (e.g., '300px') or a number (e.g., 300)
    color?: string; // Optional color for the buttons, e.g., 'blue' or '#FF0000'
  };
}
export interface ChipPropInterface {
  eleProps: ChipInterface;
}
