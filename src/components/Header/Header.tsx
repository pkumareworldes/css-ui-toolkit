import React, { memo, useState, useCallback } from "react";
import { AppBar, Box, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, Avatar, Button } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { UserData } from "../../types/ICommon";
import pxToRem from "../../helpers/pxToRem";
import { HeaderProps } from "./IHeader";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
}));

const UserMenu: React.FC<{ userData: UserData | undefined }> = ({ userData }) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (!userData?.isLoggedIn) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 0, borderLeft: `${pxToRem(1)} solid`, pl: 2 }}>
      <Tooltip title="Open settings">
        <Box sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={handleOpenUserMenu}>
          <IconButton sx={{ p: 0, '&:hover': { backgroundColor: 'transparent' } }} size="small">
            <Avatar sx={{ width: pxToRem(24), height: pxToRem(24) }}>
              {userData?.userDetails?.icon || userData?.userDetails?.firstname.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>
          <Typography sx={{ textAlign: 'center', fontSize: '0.875rem' }}>
            {userData?.userDetails?.firstname}
          </Typography>
        </Box>
      </Tooltip>
      <Menu
        sx={{ mt: `${pxToRem(45)}` }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {userData?.userDetails?.settingsMenu?.map((setting, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              setting.handler();
              handleCloseUserMenu();
            }}
          >
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const Header: React.FC<HeaderProps> = ({
  toggleNavigationExpanded,
  disableCollapsibleSidebar,
  hideNavigation,
  headerLeftPanel,
  headerRightPanel,
  isMobileNavigationExpanded,
  isDesktopNavigationExpanded,
  branding,
  userData,
}) => {

  const HeaderLeftPanel = headerLeftPanel ?? null;
  const HeaderRightPanel = headerRightPanel ?? null;

  const getMenuIcon = useCallback(
    (isExpanded: boolean) => {
      const expandMenuActionText = "Expand";
      const collapseMenuActionText = "Collapse";

      return (
        <Tooltip
          title={`${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`}
          enterDelay={1000}
        >
          <div>
            <IconButton
              aria-label={`${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`}
              onClick={toggleNavigationExpanded}
            >
              {isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </Tooltip>
      );
    },
    [toggleNavigationExpanded],
  );

  return (
    <AppBarStyled color="inherit" position="absolute" sx={{ displayPrint: "none" }}>
      <Toolbar sx={{ backgroundColor: "inherit", mx: { xs: -0.75, sm: -1.5 } }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
            {!hideNavigation ? (
              <>
                <Box
                  sx={{
                    mr: { sm: disableCollapsibleSidebar ? 0 : 1 },
                    display: { md: "none" },
                  }}
                >
                  {getMenuIcon(isMobileNavigationExpanded)}
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: disableCollapsibleSidebar ? "none" : "block",
                    },
                    mr: disableCollapsibleSidebar ? 0 : 1,
                  }}
                >
                  {getMenuIcon(isDesktopNavigationExpanded)}
                </Box>
              </>
            ) : null}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                flex: 1,
                mt: { xs: 1, md: 0 },
                pl: { xs: 0, md: 2 },
              }}
            >
              {branding?.appLogo && (
                <a
                  href={branding.appHomeUrl || "#"}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={branding.appLogo as string}
                    alt={branding.appTitle}
                    style={{
                      height: "40px",
                      marginRight: "8px",
                    }}
                  />
                </a>
              )}
              {branding?.appTitle && (
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href={branding.appHomeUrl || "#"}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "bold",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {branding.appTitle}
                </Typography>
              )}
            </Box>
            {HeaderLeftPanel && (
              <div className="flex flex-grow flex-shrink-0">
                {HeaderLeftPanel}
              </div>
            )}
          </Stack>

          <Stack direction="row" justifyContent="space-between" sx={{ alignItems: "center" }}>
            {HeaderRightPanel && (
              <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                {HeaderRightPanel}
              </div>
            )}

          </Stack>

        </Stack>
        {userData && !userData?.isLoggedIn && (
          <Box sx={{ ml: 2 }}>
            <Button variant="contained" color="primary" onClick={userData?.loginHandler}>
              {userData?.loginLabel ?? 'Login'}
            </Button>
          </Box>
        )}

        <UserMenu userData={userData} />
      </Toolbar>
    </AppBarStyled>
  );
};

export default memo(Header);
