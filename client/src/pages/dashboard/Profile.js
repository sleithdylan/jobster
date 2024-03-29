import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Typography, Sheet, TextField, Button, Divider } from '@mui/joy';
import { Grid } from '@mui/material';

import Sidebar from 'components/Sidebar';
import Layout from 'components/Layout';
import Notification from 'components/Notification';
import { useAppContext } from 'context/appContext';
import Header from 'components/Header';

function Profile() {
  const { logoutUser, user, displayAlert, showAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jobster - Profile</title>
      </Helmet>
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
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
            md: 'minmax(160px, 300px) minmax(300px, 1fr)',
          },
          gridTemplateRows: '64px 1fr',
        }}
      >
        <Layout.Header>
          <Header
            onDrawerOpen={() => setDrawerOpen(true)}
            onLogout={logoutUser}
          />
        </Layout.Header>
        <Layout.SideNav>
          <Sidebar />
        </Layout.SideNav>
        <Layout.Main style={{ backgroundColor: '#F7F7F8' }}>
          <form action="post" onSubmit={handleSubmit}>
            {showAlert && (
              <Box sx={{ mb: 2 }}>
                <Notification />
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
                <Grid item xs={12} md={4} sx={{ padding: '0 0 1rem 0' }}>
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
                <Grid item xs={12} md={8}>
                  <Divider sx={{ mb: 2, mt: 1 }} />
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
                <Grid item xs={12} md={8}>
                  <Divider sx={{ mb: 2, mt: 1 }} />
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <TextField
                      label="Location"
                      placeholder="e.g. Dublin"
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
                onClick={() => navigate(-1)}
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
