import React from "react";
import {
    Breadcrumbs,
    Link,
    Typography,
    Box,
    Container,
    Chip,
    IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PageHeaderProps } from '../../../../types/IPageHeader';

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    secondaryTitle,
    infoText,
    infoSecondaryText,
    chipStyles,
    breadcrumbs = [],
    breadcrumbsHandler,
}: PageHeaderProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {breadcrumbsHandler && (
                    <IconButton onClick={breadcrumbsHandler} aria-label="back" size="small">
                        <ArrowBackIcon />
                    </IconButton>
                )}
                <Breadcrumbs aria-label="breadcrumb" sx={{display: "flex", alignItems: "center"}}>
                    <ArrowBackIcon />&nbsp;
                    {breadcrumbs.map(({ linkText, link }, index) =>
                        link ? (
                            <Link key={index} underline="hover" color="inherit" href={link}>
                                {linkText}
                            </Link>
                        ) : (
                            <Typography key={index} color="text.primary">
                                {linkText}
                            </Typography>
                        )
                    )}
                </Breadcrumbs>
            </Box>
            <Container
                maxWidth={false}
                disableGutters
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="h3" noWrap>
                        {title}
                    </Typography>
                    {secondaryTitle && (
                        <Chip label={secondaryTitle} color="default" {...chipStyles} />
                    )}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2" noWrap>
                        {infoText}
                    </Typography>
                    <Typography
                        variant="body2"
                        noWrap
                        sx={{ fontWeight: 600 }}
                    >
                        {infoSecondaryText}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default PageHeader;
