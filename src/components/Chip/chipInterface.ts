export interface IChip {
  title: string;
  spacing: string | number;
  alignRow: boolean; // row column
  variant: "outlined" | "filled"; // Restrict variants to MUI types
  cssProps?: React.CSSProperties;
}
export interface IChipProp {
  eleProps: IChip[];
}
