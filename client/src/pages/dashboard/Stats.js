import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import { useAppContext } from '../../context/appContext';
import { Link } from 'react-router-dom';

function Stats() {
  const { logoutUser, user } = useAppContext();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Sidebar />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
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
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
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
              <img src="/jobster-logo.svg" width={125} height={50} alt="" />
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
              onClick={handleClick}
            >
              <Avatar alt="Remy Sharp" size="md" />
              <Typography
                sx={{ marginLeft: '0.75rem', marginRight: '0.25rem' }}
              >
                {user?.name}
              </Typography>
              <KeyboardArrowDownIcon fontSize="small" color="primary" />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Link to="profile" style={{ textDecoration: 'none' }}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Sidebar />
        </Layout.SideNav>
      </Layout.Root>
    </>
  );
}

export default Stats;
