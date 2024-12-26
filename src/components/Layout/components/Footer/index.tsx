import React from "react";
import {
    Box,
    Typography,
} from "@mui/material";


const Footer: React.FC = () => {

    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
        >
            <Typography variant="body2" color="text.secondary">
                Footer Placeholder
            </Typography>
        </Box>
    );

};

export default Footer;