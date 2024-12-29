import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as Icons from '@mui/icons-material';
import { RightNavigationProps, IconName } from '../../../../../../types/IHeader';
import { rightNavigationData } from '../../data';

const RightNavigation: React.FC<RightNavigationProps> = ({ data }) => {
    const getIconComponent = (iconName: IconName) => {
        const IconComponent = Icons[iconName];
        return IconComponent ? <IconComponent /> : null;
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {data?.map(({ label, icon, handler }, idx) => (
                <Box
                    key={idx}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        cursor: 'pointer',
                        padding: 1,
                        borderRadius: 1,
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                    }}
                    onClick={handler}
                >
                    {icon && (
                        <IconButton color="primary" size="small" sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                            {getIconComponent(icon as IconName)}
                        </IconButton>
                    )}
                    {label && (
                        <Typography variant="body1" color="text.primary">
                            {label}
                        </Typography>
                    )}
                </Box>
            ))}
        </Box>
    );
};

RightNavigation.defaultProps = {
    data: rightNavigationData,
};

export default RightNavigation;
