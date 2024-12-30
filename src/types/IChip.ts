import { ChipProps } from "@mui/material";

export interface IChip extends ChipProps {
  title: string;
}
export interface IChipProp {
  direction: "column" | "row";
  varient: "outlined" | "filled";
  values: IChip[];
}
