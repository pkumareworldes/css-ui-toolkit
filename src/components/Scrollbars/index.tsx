import { FC, ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Box, useTheme } from '@mui/material';

interface ScrollbarProps {
    className?: string;
    children?: ReactNode;
}

const Scrollbar: FC<ScrollbarProps> = ({ className, children, ...rest }) => {
    const theme = useTheme();

    return (
        <Scrollbars
            autoHide
            universal
            renderThumbVertical={() => {
                return (
                    <Box
                        sx={{
                            width: 5,
                            background: `${theme.palette.background.default}`,
                            borderRadius: 4,
                            transition: `${theme.transitions.create(['background'])}`,

                            '&:hover': {
                                background: `${theme.palette.background.default}`
                            }
                        }}
                    />
                );
            }}
            {...rest}
        >
            {children}
        </Scrollbars>
    );
};

export default Scrollbar;
