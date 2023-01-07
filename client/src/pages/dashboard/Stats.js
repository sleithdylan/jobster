import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import StatsShell from 'components/StatsShell';
import ChartsShell from 'components/ChartsShell';
import { useAppContext } from 'context/appContext';
import StatsItemSkeleton from 'components/StatsItemSkeleton';
import ChartSkeleton from 'components/ChartSkeleton';
import Header from 'components/Header';

function Stats() {
  const { logoutUser, showStats, isLoading } = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);

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
        <Header
          onDrawerOpen={() => setDrawerOpen(true)}
          onLogout={logoutUser}
        />
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
