import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Box, Typography, Menu, MenuItem } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Layout from './Layout';
import { useAppContext } from 'context/appContext';

function Header({ onDrawerOpen, onProfileOpen, onLogout }) {
  const { user } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout.Header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <IconButton
          variant="plain"
          size="sm"
          onClick={onDrawerOpen}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          component="a"
          sx={{
            paddingBottom: '1.5rem',
          }}
        >
          <img src="/jobster-logo.svg" width={125} height={20} alt="" />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <IconButton
          size="sm"
          color="primary"
          sx={{
            '--IconButton-size': '24px',
            padding: '0.25rem 0.75rem',
            background: 'none',
            '&:hover': {
              background: 'none',
            },
          }}
          onClick={onProfileOpen}
        >
          <Typography sx={{ marginLeft: '0.75rem', marginRight: '0.25rem' }}>
            {user?.name}
          </Typography>
          <KeyboardArrowDownIcon fontSize="small" color="primary" />
        </IconButton>
        <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          <Link to="/dashboard/profile" style={{ textDecoration: 'none' }}>
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Layout.Header>
  );
}

export default Header;
