import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export interface TypographyProps extends MuiTypographyProps {
  title: string;
}
/**
 *
 * @param TypographyProps
 * @returns
 */

const Typography = ({ title, ...rest }: TypographyProps) => (
  <MuiTypography {...rest}>{title}</MuiTypography>
);

Typography.defaultProps = {
  variant: "inherit",
  color: "primary",
  gutterBottom: false,
  align: "left",
};

export default Typography;
