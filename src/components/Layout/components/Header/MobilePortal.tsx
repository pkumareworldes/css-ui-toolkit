import React from "react";
import { Divider, Portal } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { MobilePortalProps } from "../../../../types/IMobilePortal";
import { colors } from "../../../../themes";
import pxToRem from "../../../../helpers/pxToRem";
import * as Icons from "@mui/icons-material";

const MobileDrawerPortal: React.FC<MobilePortalProps> = ({
    isOpen,
    toggleDrawer,
    data,
    RightNavigation,
}) => {

    const getIconComponent = (iconName: any) => {
        const IconComponent = Icons[iconName as keyof typeof Icons];
        return IconComponent ? <IconComponent /> : null;
    };
    return (
        <Portal>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={() => toggleDrawer(false)}
                PaperProps={{
                    sx: { display: "flex", flexDirection: "column", gap: 3, width: 300, backgroundColor: colors.white },
                }}
            >
                <Box
                    sx={{
                        px: 3,
                        py: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: `${pxToRem(1)} solid ${colors.mediumGray}`,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Segoe UI Semibold",
                            fontSize: pxToRem(16),
                            color: colors.black,
                        }}
                    >
                        Menu
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => toggleDrawer(false)}
                        aria-label="close"
                        sx={{
                            color: colors.black,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ px: 2, display: "flex", flexDirection: "column", gap: 3 }}>
                    {data?.length > 0 && (
                        <>
                            <Box>
                                {data?.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            padding: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            cursor: "pointer",
                                        }}
                                        onClick={item.handler}
                                    >
                                        {item.icon && getIconComponent(item.icon)}
                                        {item.label}
                                    </Box>
                                ))}
                            </Box>
                            <Divider />
                        </>)}
                    <Box>{RightNavigation}</Box>
                </Box>
            </Drawer>
        </Portal>
    );
};

export default MobileDrawerPortal;
