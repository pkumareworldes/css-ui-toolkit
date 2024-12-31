import {
  Switch as MuiSwitch,
  FormControlLabel,
  FormHelperText,
} from "@mui/material"; 
import ToggleProps from "./Toogle.Interface.ts";


const Toggle = ({ checked, label, onChange,helperText, disabled, ...rest }: ToggleProps) => (
  <div>
  <FormControlLabel
    control={<MuiSwitch checked={checked} onChange={onChange} disabled={disabled} {...rest} />}
    label={label}
  />
  {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </div>
);

Toggle.defaultProps = {
  color: "primary",
  size: "medium",
};

export default Toggle;
