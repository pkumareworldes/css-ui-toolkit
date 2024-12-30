import Chip from "@mui/material/Chip";
import { IChip } from "../../types/IChip";

/**
 *
 * @param props
 * @returns
 */
export default function MUIChip(props: IChip) {
  console.log(props);
  return (
    <Chip
      label={props.title}
      variant={props.variant}
      sx={{ fontWeight: "bold", border: "solid", maxWidth: "fit-content" }}
      {...props}
    />
  );
}
