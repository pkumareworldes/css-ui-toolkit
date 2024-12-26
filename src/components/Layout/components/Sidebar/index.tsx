import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import * as Icons from "@mui/icons-material";
import { SidebarProps } from '../../../../types/sidebar';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));


const Sidebar: React.FC<SidebarProps> = ({ data }) => {
    const [open, setOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState<number | null>(null);

    const toggleDrawer = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleItemClick = (index: number, handler?: () => void) => {
        setActiveItem(index);
        if (handler) handler();
    };

    const getIconComponent = (iconName: any) => {
        const IconComponent = Icons[iconName as keyof typeof Icons];
        return IconComponent ? <IconComponent /> : null;
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader
                sx={{ display: "flex", justifyContent: open ? "flex-end" : "center" }}
            >
                <IconButton
                    color="inherit"
                    aria-label={open ? "close drawer" : "open drawer"}
                    onClick={toggleDrawer}
                >
                    {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {data.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            onClick={() => handleItemClick(index, item.handler)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: activeItem === index ? 2 : 2.5,
                                borderLeft: activeItem === index ? "4px solid #0078D4" : "none",
                                borderTopLeftRadius: 2,
                                borderBottomLeftRadius: 2
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: "center",
                                    mr: open ? 3 : "auto",
                                    ...(activeItem === index && {color: 'black'})
                                }}
                            >
                                {getIconComponent(item.icon)}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar