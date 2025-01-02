import Chip from "./MUIChip";
import { Stack } from "@mui/material";
import { IChipProp } from "./IChip";

/**
 *
 * @param param0
 * @returns
 */
export default function BasicChips({
  direction = "row",
  varient = "outlined",
  ...props
}: IChipProp) {
  return (
    <Stack direction={direction} useFlexGap spacing={{ xs: 1, sm: 2, md: 4 }}>
      {props.values &&
        props.values.length > 0 &&
        props.values.map((prop) => (
          <Chip {...prop} key={prop.title} variant={varient} />
        ))}
    </Stack>
  );
}
