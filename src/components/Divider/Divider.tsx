import {
    Divider as MUIDivider,
    DividerProps
} from "@mui/material";

const Divider = ({ children, ...rest }: DividerProps) => (
    <MUIDivider {...rest} />
);

Divider.defaultProps = {
};

export default Divider;
