import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { UserMenu } from "./components";
import MobilePortal from "./MobilePortal";
import { HeaderProps } from "../../../../types/IHeader";
import pxToRem from "../../../../helpers/pxToRem";
import { colors } from "../../../../themes";

const Header: React.FC<HeaderProps> = ({
  RightNavigation,
  userMenuData,
  sidebarData,
  title,
  logo,
}) => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleToggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: colors.mediumGray,
          backgroundColor: colors.white,
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            height: "100%",
            minHeight: `${pxToRem(51)}`,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => handleToggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              ml: { xs: 1, md: 0 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {logo ? (
              <img
                src={logo}
                alt="logo"
                style={{ height: "20px", marginRight: pxToRem(8) }}
              />
            ) : (
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "Segoe UI Semibold",
                  display: { xs: "flex", md: "none" },
                  fontSize: pxToRem(14),
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {title}
              </Typography>
            )}
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

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {RightNavigation}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <UserMenu data={userMenuData} />
          </Box>
        </Container>
      </AppBar>

      <MobilePortal
        isOpen={isDrawerOpen}
        toggleDrawer={handleToggleDrawer}
        data={sidebarData || []}
        RightNavigation={RightNavigation}
      />
    </>
  );
};

export default Header;
