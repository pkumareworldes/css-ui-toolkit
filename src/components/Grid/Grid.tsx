import Grid, { Grid2Props } from "@mui/material/Grid2";

const GridBasic = ({ children, ...props }: Grid2Props) => {
  return <Grid {...props}>{children}</Grid>;
};

export default GridBasic;