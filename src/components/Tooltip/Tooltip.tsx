import {
    Tooltip as MUITooltip, TooltipProps
} from "@mui/material";


export interface CustomTooltipProps extends TooltipProps {
    
}

const Tooltip = ({ children, ...rest }: CustomTooltipProps) => (
    <MUITooltip {...rest}>{children}</MUITooltip>
);

Tooltip.defaultProps = {

};

export default Tooltip;
