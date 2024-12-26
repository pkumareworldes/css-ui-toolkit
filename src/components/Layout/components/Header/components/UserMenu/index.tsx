import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

interface UserMenuProps {
  data: {
    username: string;
    avatar: string;
    settingsMenu: {
      label: string;
      handler: () => void;
    }[];
  };
}

const UserMenu: React.FC<UserMenuProps> = ({ data }) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0, borderLeft: '1px solid #ddd', pl: 2 }}>
      <Tooltip title="Open settings">
        <Box sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={handleOpenUserMenu} >
          <IconButton sx={{ p: 0, '&:hover': { backgroundColor: 'transparent' } }} size="small">
            <Avatar sx={{ width: 24, height: 24 }}>
              {data.avatar || data.username.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>
          <Typography sx={{ textAlign: 'center', fontSize: '0.875rem' }}>
            {data.username}
          </Typography>
        </Box>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
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
        {data.settingsMenu.map((setting, index) => (
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

export default UserMenu;
