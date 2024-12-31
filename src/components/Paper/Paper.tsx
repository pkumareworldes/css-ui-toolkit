import {
    Paper as MUIPaper, PaperProps
} from "@mui/material";


export interface CustompaperProps extends PaperProps {
    children: React.ReactNode | string;
}

const Paper = ({ children, ...rest }: CustompaperProps) => (
    <MUIPaper {...rest}>{children}</MUIPaper>
);

Paper.defaultProps = {

};

export default Paper;
