import { IChipProp, IChip } from "../Chip/chipInterface";

export interface IReadOnlyFeild {
  fieldName: string;
  fieldValue?: string;
  link?: string;
  underline?: "none" | "hover" | "always";
  alignRow: boolean;
  fieldColor: string;
  valueColor?: string;
  fieldFontWeight: string | number;
  valueFontWeight?: string | number;
  iconComp?: React.ComponentType | null;
  chipComp?: IChipComponent;
  iconSpacing?: string;
  cssProps?: React.CSSProperties;
}

export interface IChipComponent {
  component: React.ComponentType<IChipProp> | null;
  props: IChip[];
}
export interface IReadOnlyFeildProp {
  eleProps: IReadOnlyFeild;
}
