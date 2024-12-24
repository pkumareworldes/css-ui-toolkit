export interface ROFInterface {
  fieldName: string;
  fieldValue: string;
  link: string;
  underline: "none" | "hover" | "always";
  isLink: boolean;
  alignRow: boolean;
  fieldColor: string;
  valueColor: string;
  iconComp: React.ComponentType | null;
  cssProps: {
    width?: string | number; // Can be a string (e.g., '500px') or a number (e.g., 500)
    height?: string | number; // Can be a string (e.g., '300px') or a number (e.g., 300)
    color?: string; // Optional color for the buttons, e.g., 'blue' or '#FF0000'
  };
}
export interface ROFPropInterface {
  eleProps: ROFInterface;
}
