export interface IReadOnlyFeild {
  fieldName: string;
  fieldValue: string;
  link?: string;
  underline?: "none" | "hover" | "always";
  direction?: "row" | "column";
  fontColor?: string;
  mode?: "light" | "bold";
  iconComp?: React.ComponentType | null;
  isChip?: boolean;
  iconSpacing?: string;
  cssProps?: React.CSSProperties;
}
