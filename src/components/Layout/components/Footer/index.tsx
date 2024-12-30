import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FooterProps } from "../../../../types/IFooter";
import pxToRem from '../../../../helpers/pxToRem';

const Footer: React.FC<FooterProps> = ({
    termsLabel = "Terms and Conditions",
    termsUrl = "#",
    buildVersionLabel = "Build Version",
    buildVersion = "1.0.0",
    contactLabel = "Contact Us",
    contactDetails = "support@example.com",
}) => {
    return (
        <Box
            sx={(theme) => ({
                padding: 2,
                textAlign: 'center',
                borderTop: `${pxToRem(1)} solid ${theme.palette.divider}`,
            })}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 1, md: 2 },
                }}
            >
                <Typography variant="body2">
                    <Link href={termsUrl} target="_blank" rel="noopener noreferrer">
                        {termsLabel}
                    </Link>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ display: { xs: 'none', md: 'block' } }}
                >
                    |
                </Typography>
                <Typography variant="body2">{contactLabel}: {contactDetails}</Typography>
            </Box>
            <Box
                sx={{
                    marginTop: { xs: 1, md: 2 },
                }}
            >
                <Typography variant="body2">
                    {buildVersionLabel}: {buildVersion}
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
