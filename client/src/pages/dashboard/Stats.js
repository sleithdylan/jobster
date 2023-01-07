import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Box, Typography, Menu, MenuItem } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import StatsShell from 'components/StatsShell';
import ChartsShell from 'components/ChartsShell';
import { useAppContext } from 'context/appContext';
import StatsItemSkeleton from 'components/StatsItemSkeleton';
import ChartSkeleton from 'components/ChartSkeleton';

function Stats() {
  const { logoutUser, user, showStats, isLoading } = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    showStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jobster - Stats</title>
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
              onClick={handleClick}
            >
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
              <Link to="/dashboard/profile" style={{ textDecoration: 'none' }}>
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
          {!isLoading ? (
            <>
              <StatsShell />
              <ChartsShell />
            </>
          ) : (
            <>
              <StatsItemSkeleton />
              <ChartSkeleton />
            </>
          )}
        </Layout.Main>
      </Layout.Root>
    </>
  );
}

export default Stats;
