import React from "react";
import {
    Breadcrumbs,
    Link,
    Typography,
    Box,
    Container,
    Chip,
} from "@mui/material";

interface PageHeaderProps {
    title: string;
    secondaryTitle?: string;
    infoText?: string;
    infoSecondaryText?: string;
    chipStyles?: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, secondaryTitle, infoText, infoSecondaryText, chipStyles }: PageHeaderProps) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", p: 2, backgroundColor: "rgba(0, 0, 0, 0.05)", }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">
                    Home
                </Link>
                <Typography color="text.primary">Child Support Services</Typography>
            </Breadcrumbs>
            <Container maxWidth={false} disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
                    <Typography
                        variant="h3"
                        noWrap
                    >
                        {title}
                    </Typography>
                    {secondaryTitle && (<Chip label={secondaryTitle} color="default" {...chipStyles} />)}
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
                    <Typography
                        variant="body2"
                        noWrap
                    >
                        {infoText}
                    </Typography>
                    <Typography
                        variant="body2"
                        noWrap
                        sx={{fontWeight: 600}}
                    >
                        {infoSecondaryText}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default PageHeader;