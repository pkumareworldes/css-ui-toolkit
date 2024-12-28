import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { UserMenu } from "./components";
import { HeaderProps } from "../../../../types/IHeader";
import pxToRem from "../../../../helpers/pxToRem";
import { colors } from "../../../../themes";

const Header: React.FC<HeaderProps> = ({
  RightNavigation,
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
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: colors.mediumGray }}>
      <Container
        maxWidth={false}
        sx={{
          display: { xs: "flex", md: "flex", height: "100%", minHeight: `${pxToRem(51)}` },
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
          <img src={logo} alt="logo" style={{ height: "20px", marginRight: pxToRem(8) }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontFamily: "Segoe UI Semibold",
              display: { xs: "none", md: "flex" },
              fontSize: pxToRem(14),
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
        </Box>

        {RightNavigation && (
          <>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                mr: 2,
              }}
            >
              {RightNavigation}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
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
                {RightNavigation}
              </Menu>
            </Box>
          </>
        )}

        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
          <UserMenu data={userMenuData} />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
