import { IReadOnlyFeild } from "./IReadOnlyField";
import BoxBasic from "../Box/Box";
import Typography from "../Typography/Typography";
import { Chip } from "../Chip";
/**
 *
 * @param props
 * @returns
 */
const ReadOnlyField = ({
  direction = "column",
  fieldName,
  fieldValue,
  fontColor,
  isChip = false,
  ...props
}: IReadOnlyFeild) => {
  return (
    <BoxBasic
      component="section"
      sx={{ p: 2, display: "flex", flexDirection: direction }}
    >
      <Typography
        variant="body1"
        title={fieldName}
        color={fontColor || "primary"}
        gutterBottom
        sx={{
          pr: direction == "row" ? 2 : 0,
          fontWeight: props.mode,
          alignContent: "center",
        }}
      />
      {isChip ? (
        <Chip title={fieldValue} variant={"filled"} />
      ) : (
        <Typography
          variant="body1"
          title={fieldValue}
          color={fontColor || "primary"}
          gutterBottom
          sx={{
            p: 0,
            m: 0,
            fontWeight: props.mode == "bold" ? "light" : "bold",
          }}
        />
      )}
    </BoxBasic>
  );
};

export default ReadOnlyField;
