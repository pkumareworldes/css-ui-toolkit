import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { IChipProp } from "./chipInterface";
export default function BasicChips({ eleProps }: IChipProp) {
  return eleProps.map((prop, index) => (
    <Stack
      key={index}
      style={{
        display: prop.alignRow ? "grid" : "inline",
      }}
      padding={prop.spacing}
      maxWidth="fit-content"
    >
      <Chip
        label={prop.title}
        variant={prop.variant}
        style={{ ...prop.cssProps }}
      />
    </Stack>
  ));
}
