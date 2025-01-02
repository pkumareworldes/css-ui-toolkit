import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";

const useCreateTheme = (theme: object) : Theme=> {
    return theme ? createTheme(theme) : createTheme();
}

export default useCreateTheme;