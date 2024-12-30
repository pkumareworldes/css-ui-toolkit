import { Box, BoxProps } from "@mui/material";

const BoxBasic = ({ children, ...props }: BoxProps) => {
  return <Box {...props}>{children}</Box>;
};

export default BoxBasic;
