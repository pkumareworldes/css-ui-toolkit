import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FooterProps } from "../../../../types/IFooter";
import { colors } from '../../../../themes';
import pxToRem from '../../../../helpers/pxToRem';

const defaultProps: FooterProps = {
    termsLabel: "Terms and Conditions",
    termsUrl: "#",
    buildVersionLabel: "Build Version",
    buildVersion: "1.0.0",
    contactLabel: "Contact Us",
    contactDetails: "support@example.com",
};

const Footer: React.FC<FooterProps> = ({
    termsLabel,
    termsUrl,
    buildVersionLabel,
    buildVersion,
    contactLabel,
    contactDetails,
}) => {
    return (
        <Box sx={{ padding: 2, textAlign: 'center', borderTop: `${pxToRem(1)} solid ${colors.mediumGray}` }}>
            <Typography variant="body2">
                <Link href={termsUrl} target="_blank" rel="noopener noreferrer">
                    {termsLabel}
                </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
                {buildVersionLabel}: {buildVersion}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
                {contactLabel}: {contactDetails}
            </Typography>
        </Box>
    );
};

Footer.defaultProps = defaultProps;

export default Footer;
