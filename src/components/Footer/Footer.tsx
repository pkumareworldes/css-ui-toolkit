import {Box} from '../Box';
import Container from '@mui/material/Container';
import { FooterProps } from './IFooter';
import useCreateTheme from "../../hooks/useCreateTheme";
import ThemeProvider from "../AppLayout/ThemeProvider";

const Footer = ({children, footerTheme}: FooterProps) => {
    const theme = useCreateTheme(footerTheme);
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="footer"
                sx={{
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="xl" sx={{py:0, px:0,}}>
                    {children}                
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Footer;