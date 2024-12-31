import {
  SwitchProps as MuiSwitchProps,
} from "@mui/material";

type ToggleBaseProps = Pick<MuiSwitchProps, "color" | "size">;

export default interface ToggleProps extends ToggleBaseProps {
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean; // Optional prop to disable the switch
  helperText?: string; // Optional helper text to display below the switch
}