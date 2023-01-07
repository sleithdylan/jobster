import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Chip,
  Divider,
  List,
  Sheet,
  Select,
  selectClasses,
  Option,
  TextField,
} from '@mui/joy';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';
import { Pagination } from '@mui/material';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Notification from 'components/Notification';
import { useAppContext } from 'context/appContext';
import JobItemSkeleton from 'components/JobItemSkeleton';
import Header from 'components/Header';

function AllJobs() {
  const {
    logoutUser,
    getJobs,
    jobs,
    isLoading,
    totalJobs,
    setEditJob,
    deleteJob,
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
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);

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
        <Header
          onDrawerOpen={() => setDrawerOpen(true)}
          onLogout={logoutUser}
        />
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
          <Typography level="h5">{totalJobs} jobs found</Typography>
          {showAlert && (
            <Box sx={{ my: 2 }}>
              <Notification />
            </Box>
          )}
          {!isLoading ? (
            <>
              <List
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: 2,
                }}
              >
                {jobs.length !== 0 ? (
                  jobs.map((job) => {
                    return (
                      <Sheet
                        key={job._id}
                        {...job}
                        component="li"
                        variant="outlined"
                        sx={{
                          borderRadius: 'sm',
                          p: 2,
                          listStyle: 'none',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                          >
                            <Avatar
                              src={`https://app.outboundsales.io/api/logo/${job.company.toLowerCase()}.com`}
                            />
                            <Typography>{job.company}</Typography>
                          </Box>
                          <Chip
                            variant="soft"
                            color={
                              job.status === 'declined'
                                ? 'danger'
                                : job.status === 'interview'
                                ? 'primary'
                                : job.status === 'pending'
                                ? 'warning'
                                : null
                            }
                            sx={{
                              borderRadius: '5px',
                              textTransform: 'capitalize',
                            }}
                          >
                            {job.status}
                          </Chip>
                        </Box>

                        <Box sx={{ my: 2 }}>
                          <Typography level="h5" fontWeight="bold">
                            {job.position}
                          </Typography>
                        </Box>
                        <Box sx={{ my: 2 }}>
                          <Chip
                            variant="outlined"
                            color="neutral"
                            size="sm"
                            sx={{ borderRadius: '5px', mb: 1 }}
                          >
                            {job.jobType}
                          </Chip>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                          >
                            <Typography
                              fontSize="sm"
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                              }}
                            >
                              <LocationOnIcon />
                              {job.jobLocation}
                            </Typography>
                          </Box>
                          <Typography
                            fontSize="sm"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <AccessTimeIcon />
                            {moment(job.createdAt).format('LL')}
                          </Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box>
                          <Link
                            to={`/dashboard/add-job`}
                            onClick={() => setEditJob(job._id)}
                            style={{ textDecoration: 'none' }}
                          >
                            <Button color="primary" variant="solid" fullWidth>
                              Edit
                            </Button>{' '}
                          </Link>
                          <Box
                            sx={{
                              my: 2,
                            }}
                          ></Box>
                          <Button
                            color="danger"
                            variant="outlined"
                            onClick={() => deleteJob(job._id)}
                            fullWidth
                          >
                            Remove
                          </Button>
                        </Box>
                      </Sheet>
                    );
                  })
                ) : (
                  <Typography level="h5">No jobs found...</Typography>
                )}
              </List>
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
