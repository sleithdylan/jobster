import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  Select,
  selectClasses,
  Option,
  TextField,
} from '@mui/joy';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Pagination } from '@mui/material';
import { Add } from '@mui/icons-material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Notification from 'components/Notification';
import { useAppContext } from 'context/appContext';
import JobItemSkeleton from 'components/JobItemSkeleton';
import Header from 'components/Header';
import JobItem from 'components/JobItem';

function AllJobs() {
  const {
    logoutUser,
    getJobs,
    jobs,
    isLoading,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    clearFilters,
    handleChange,
    numOfPages,
    page,
    changePage,
    showAlert,
  } = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, searchStatus, searchType, sort]);

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSearchStatus = (e) => {
    if (isLoading) return;
    handleChange({ name: 'searchStatus', value: e.target.innerText });
  };

  const handleSearchType = (e) => {
    if (isLoading) return;
    handleChange({ name: 'searchType', value: e.target.innerText });
  };

  const handleSort = (e) => {
    if (isLoading) return;
    handleChange({ name: 'sort', value: e.target.innerText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jobster - All Jobs</title>
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
            md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
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
        <Layout.SidePane>
          <Box
            sx={{
              p: 2,
              pb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="xs2"
              textColor="text.tertiary"
              textTransform="uppercase"
              letterSpacing="md"
              fontWeight="lg"
            >
              Filter by
            </Typography>
            <Button
              size="sm"
              variant="plain"
              color="primary"
              sx={{ fontSize: 'xs', px: 1 }}
              disabled={isLoading}
              onClick={handleSubmit}
            >
              Clear filters
            </Button>
          </Box>
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography level="body2" textColor="text.primary">
                Search
              </Typography>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <TextField
                placeholder="e.g. Engineer"
                variant="outlined"
                name="search"
                value={search}
                onChange={handleSearch}
              />
            </Box>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography level="body2" textColor="text.primary">
                Status
              </Typography>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <Select
                placeholder="Select a status"
                name="searchStatus"
                value={searchStatus}
                onChange={handleSearchStatus}
                indicator={<KeyboardArrowDown />}
                sx={{
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                <Option value="all">all</Option>
                <Option value="pending">pending</Option>
                <Option value="interview">interview</Option>
                <Option value="declined">declined</Option>
              </Select>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography level="body2" textColor="text.primary">
                Type
              </Typography>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <Select
                placeholder="Select a job type"
                name="searchType"
                value={searchType}
                onChange={handleSearchType}
                indicator={<KeyboardArrowDown />}
                sx={{
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                <Option value="all">all</Option>
                <Option value="full-time">full-time</Option>
                <Option value="part-time">part-time</Option>
                <Option value="hybrid">hybrid</Option>
                <Option value="remote">remote</Option>
                <Option value="internship">internship</Option>
              </Select>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography level="body2" textColor="text.primary">
                Sort
              </Typography>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <Select
                placeholder="Sort by"
                name="sort"
                value={sort}
                onChange={handleSort}
                indicator={<KeyboardArrowDown />}
                sx={{
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                <Option value="latest">latest</Option>
                <Option value="oldest">oldest</Option>
              </Select>
            </Box>
          </Box>
        </Layout.SidePane>
        <Layout.Main style={{ backgroundColor: '#F7F7F8' }}>
          <Typography level="h5">
            {totalJobs} job{jobs.length === 0 ? 's' : jobs.length > 1 && 's'}{' '}
            found
          </Typography>
          {showAlert && (
            <Box sx={{ my: 2 }}>
              <Notification />
            </Box>
          )}
          {!isLoading ? (
            <>
              {jobs.length === 0 ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '75vh',
                  }}
                >
                  <CreateNewFolderIcon
                    sx={{
                      width: '3rem',
                      height: '3rem',
                      color: '#434356',
                      mb: 1,
                    }}
                  />
                  <Typography level="h5">No Jobs</Typography>
                  <Typography level="body1" color="neutral">
                    Get started by adding a new job.
                  </Typography>
                  <Link
                    to="/dashboard/add-job"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button sx={{ mt: 2 }} startDecorator={<Add />}>
                      Add a job
                    </Button>
                  </Link>
                </Box>
              ) : (
                <List
                  sx={{
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 2,
                  }}
                >
                  {jobs.length !== 0
                    ? jobs.map((job) => (
                        <JobItem
                          id={job._id}
                          company={job.company}
                          status={job.status}
                          position={job.position}
                          jobType={job.jobType}
                          jobLocation={job.jobLocation}
                          createdAt={job.createdAt}
                        />
                      ))
                    : null}
                </List>
              )}
              <Box
                sx={{ display: 'flex', mt: 3, mb: 2, justifyContent: 'center' }}
              >
                {numOfPages > 1 && (
                  <Pagination
                    onChange={(e, value) => changePage(value)}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    count={numOfPages}
                  />
                )}
              </Box>
            </>
          ) : (
            <>
              <JobItemSkeleton />
            </>
          )}
        </Layout.Main>
      </Layout.Root>
    </>
  );
}

export default AllJobs;
