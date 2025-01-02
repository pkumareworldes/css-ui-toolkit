import {ThemeProvider} from "@mui/material/styles"

const MUIThemeProvider = (props: any) => {
    const {theme, children}= props;
    return (
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    );
}

export default MUIThemeProvider;