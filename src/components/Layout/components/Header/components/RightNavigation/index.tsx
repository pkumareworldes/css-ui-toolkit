import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as Icons from '@mui/icons-material';

type IconName = keyof typeof Icons;

interface RightNavigationItem {
    label: string;
    icon?: string;
    path?: string;
    handler?: () => void;
}

interface RightNavigationProps {
    data: RightNavigationItem[];
}

const RightNavigation: React.FC<RightNavigationProps> = ({ data }) => {
    const getIconComponent = (iconName: IconName) => {
        const IconComponent = Icons[iconName];
        return IconComponent ? <IconComponent /> : null;
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {data?.map(({ label, icon, path, handler }, idx) => (
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
                        <IconButton color="primary" size="small" sx={{ '&:hover': { backgroundColor: 'transparent' }, }}>
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

export default RightNavigation;
