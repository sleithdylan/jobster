import React, { useState } from 'react';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/material/Grid';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Alert from '../../components/Alert';

function Profile() {
  const { logoutUser, user, displayAlert, showAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !lastName || !email || !location) {
      displayAlert();
      return;
    }

    updateUser({ name, email, lastName, location });
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
              <Link style={{ textDecoration: 'none' }}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Sidebar />
        </Layout.SideNav>
        <Layout.Main style={{ backgroundColor: '#F7F7F8' }}>
          <form action="post" onSubmit={handleSubmit}>
            {showAlert && (
              <Box sx={{ mb: 2 }}>
                <Alert />
              </Box>
            )}
            <Sheet
              component="div"
              variant="outlined"
              sx={{
                borderRadius: 'sm',
                p: 2,
                listStyle: 'none',
              }}
            >
              <Grid container columns={12}>
                <Grid item xs={12} md={4}>
                  <Typography level="h6">Profile</Typography>
                  <Typography level="body2">
                    This information will be displayed publicly so be careful
                    what you share.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <TextField
                      label="First name"
                      placeholder="e.g. Bonnie"
                      variant="outlined"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <TextField
                      label="Last name"
                      placeholder="e.g. Green"
                      variant="outlined"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={5}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <TextField
                      label="Email address"
                      placeholder="name@company.com"
                      variant="outlined"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <TextField
                      label="Location"
                      placeholder="Dublin"
                      variant="outlined"
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Sheet>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                color="neutral"
                sx={{
                  px: 4,
                  mt: 3,
                  mr: 2,
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#F7F7F8',
                    borderColor: '#d8d8df',
                  },
                  '&:active': {
                    backgroundColor: '#EBEBEF',
                    borderColor: '#d8d8df',
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="solid"
                sx={{ px: 4, mt: 3 }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Please wait...' : 'Save'}
              </Button>
            </Box>
          </form>
        </Layout.Main>
      </Layout.Root>
    </>
  );
}

export default Profile;
