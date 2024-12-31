import {
    Grid2 as MUIGrid,
    Grid2Props as GridProps,
} from "@mui/material";


export interface CustomGridProps extends GridProps {
    children: React.ReactNode;
}

const Grid = ({ children, ...rest }: CustomGridProps) => (
    <MUIGrid {...rest}>{children}</MUIGrid>
);

Grid.defaultProps = {

};

export default Grid;
