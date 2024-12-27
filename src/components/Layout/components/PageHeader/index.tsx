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
import pxToRem from "../../../../helpers/pxToRem";
import { colors } from "../../../../themes";

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
                justifyContent: "center",
                p: 2,
                backgroundColor: `${colors.lightGray}`,
                borderBottom: `${pxToRem(1)} solid ${colors.mediumGray}`
            }}
        >
            {breadcrumbs?.length ? (<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {breadcrumbsHandler && (
                    <IconButton onClick={breadcrumbsHandler} aria-label="back" size="small">
                        <ArrowBackIcon />
                    </IconButton>
                )}
                <Breadcrumbs aria-label="breadcrumb" sx={{ display: "flex", alignItems: "center" }}>
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
            </Box>): null}
            <Container
                maxWidth={false}
                disableGutters
                sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, gap: 1 }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="h1">
                        {title}
                    </Typography>
                    {secondaryTitle && (
                        <Chip label={secondaryTitle} color="default" {...chipStyles} />
                    )}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2">
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
