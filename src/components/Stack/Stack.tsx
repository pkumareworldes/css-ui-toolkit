import {
    Stack as MUIStack, StackProps
} from "@mui/material";


export interface CustomStackProps extends StackProps {
    children: React.ReactNode | string;
}

const Stack = ({ children, ...rest }: CustomStackProps) => (
    <MUIStack {...rest}>{children}</MUIStack>
);

Stack.defaultProps = {

};

export default Stack;
