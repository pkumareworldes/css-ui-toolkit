import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { RightNavigation, UserMenu } from "./components";

interface RightNavigationItem {
  label: string;
  path?: string;
  icon?: string;
  handler?: () => void;
}

interface UserMenuData {
  username: string;
  avatar: string;
  settingsMenu: {
    label: string;
    handler: () => void;
  }[];
}

interface HeaderProps {
  rightNavigationData: RightNavigationItem[];
  userMenuData: UserMenuData;
  title: string;
  logo: string;
}

const Header: React.FC<HeaderProps> = ({
  rightNavigationData,
  userMenuData,
  title,
  logo,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ height: 51 }}>
      <Container
        maxWidth={false}
        sx={{
          display: { xs: "flex", md: "flex", height: '100%' },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            flexGrow: 1,
            alignItems: "center",
            mr: 2,
          }}
        >
          <img src={logo} alt="logo" style={{ height: "20px", marginRight: "8px" }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            mr: 2,
          }}
        >
          <RightNavigation data={rightNavigationData} />
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="open navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <RightNavigation data={rightNavigationData} />
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
          <UserMenu data={userMenuData} />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
