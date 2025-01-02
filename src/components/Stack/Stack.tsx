import { Stack, StackProps } from "@mui/material";

const StackBasic = ({ children, ...props }: StackProps) => {
  return <Stack {...props}>{children}</Stack>;
};

export default StackBasic;
