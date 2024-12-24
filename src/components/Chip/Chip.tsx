import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { ChipPropInterface } from "./chipInterface";
export default function BasicChips({ eleProps }: ChipPropInterface) {
  return (
    <Stack direction={eleProps.direction} spacing={eleProps.spacing}>
      <Chip label={eleProps.title} variant={eleProps.variant} />
    </Stack>
  );
}
