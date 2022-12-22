import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import { useAppContext } from '../../context/appContext';
import { Link } from 'react-router-dom';

import {
  IconButton,
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
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
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Loader from '../../components/Loader';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

function AllJobs() {
  const {
    logoutUser,
    user,
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    setEditJob,
    deleteJob,
  } = useAppContext();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    getJobs();
  }, []);

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
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
            md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
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
            <Button size="sm" variant="plain" sx={{ fontSize: 'xs', px: 1 }}>
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
              <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ '--IconButton-size': '24px' }}
              >
                <KeyboardArrowDownIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <TextField
                placeholder="e.g. Yahoo"
                variant="outlined"
                name="jobLocation"
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
              <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ '--IconButton-size': '24px' }}
              >
                <KeyboardArrowDownIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <Select
                placeholder="Select a status"
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
                <Option value="pending">Pending</Option>
                <Option value="interview">Interview</Option>
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
              <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ '--IconButton-size': '24px' }}
              >
                <KeyboardArrowDownIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <Select
                placeholder="Select a job type"
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
                <Option value="full-time">Full-time</Option>
                <Option value="part-time">Part-time</Option>
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
              <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ '--IconButton-size': '24px' }}
              >
                <KeyboardArrowDownIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
            <Box sx={{ pt: '1rem' }}>
              <Select
                placeholder="Sort by"
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
                <Option value="latest">Latest</Option>
                <Option value="oldest">Oldest</Option>
              </Select>
            </Box>
          </Box>
        </Layout.SidePane>
        <Layout.Main style={{ backgroundColor: '#F7F7F8' }}>
          <Typography level="h5">
            {totalJobs} job{jobs.length > 1 && 's'} found
          </Typography>
          {!isLoading ? (
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
                    <Link
                      to={`/dashboard/stats/add-job`}
                      onClick={() => setEditJob(job._id)}
                      style={{ textDecoration: 'none' }}
                    >
                      <Sheet
                        key={job._id}
                        {...job}
                        component="li"
                        variant="outlined"
                        sx={{
                          borderRadius: 'sm',
                          p: 2,
                          listStyle: 'none',
                          cursor: 'pointer',
                          '&:hover': {
                            borderColor: '#8F8FA3',
                          },
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
                            <Avatar src="https://app.outboundsales.io/api/logo/yahoo.com" />
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
                            sx={{ borderRadius: '5px' }}
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
                      </Sheet>
                    </Link>
                  );
                })
              ) : (
                <Typography level="h5">No jobs found...</Typography>
              )}
            </List>
          ) : (
            <Loader />
          )}
        </Layout.Main>
      </Layout.Root>
    </>
  );
}

export default AllJobs;
