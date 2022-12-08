import IconButton from '@mui/joy/IconButton';
import { useColorScheme } from '@mui/joy/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="primary"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}

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
              variant="plain"
              color="primary"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{ '--IconButton-size': '24px', padding: '0.25rem 0.75rem' }}
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
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{ minWidth: '11.25rem' }}
            >
              <Link to="profile" style={{ textDecoration: 'none' }}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
            <ColorSchemeToggle />
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
