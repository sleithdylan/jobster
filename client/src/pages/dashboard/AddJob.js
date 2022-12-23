import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';
import { useAppContext } from '../../context/appContext';
import Alert from '../../components/Alert';
import { Link } from 'react-router-dom';

import {
  IconButton,
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Sheet,
  TextField,
  Button,
  Select,
  Option,
  selectClasses,
  FormLabel,
  Divider,
} from '@mui/joy';
import { Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function AddJob() {
  const {
    logoutUser,
    user,
    displayAlert,
    showAlert,
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  const handleJobStatus = (e) => {
    const value = e.target.textContent;

    handleChange({ name: 'status', value });
  };

  const handleJobType = (e) => {
    const value = e.target.textContent;

    handleChange({ name: 'jobType', value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }

    if (isEditing) {
      editJob();
      return;
    }

    createJob();
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
                <Grid item xs={12} md={4} sx={{ padding: '0 0 1rem 0' }}>
                  <Typography level="h6">
                    {isEditing ? 'Edit Job' : 'Add Job'}
                  </Typography>
                  <Typography level="body2">
                    {isEditing
                      ? 'Edit all of your job details here...'
                      : 'Add all of your job details here...'}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <TextField
                      label="Position"
                      placeholder="e.g. Front-end Engineer"
                      variant="outlined"
                      name="position"
                      value={position}
                      onChange={handleJobInput}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <TextField
                      label="Company"
                      placeholder="e.g. Google"
                      variant="outlined"
                      name="company"
                      value={company}
                      onChange={handleJobInput}
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
                      label="Job Location"
                      placeholder="e.g. Dublin"
                      variant="outlined"
                      name="jobLocation"
                      value={jobLocation}
                      onChange={handleJobInput}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={8}>
                  <Divider sx={{ mb: 2, mt: 1 }} />
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <FormLabel htmlFor="status" sx={{ pb: '0.25rem' }}>
                      Status
                    </FormLabel>
                    <Select
                      placeholder="Select a status"
                      indicator={<KeyboardArrowDown />}
                      name="status"
                      value={status}
                      sx={{
                        [`& .${selectClasses.indicator}`]: {
                          transition: '0.2s',
                          [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                          },
                        },
                      }}
                      onChange={handleJobStatus}
                    >
                      {statusOptions.map((itemValue, index) => {
                        return (
                          <Option key={index} value={itemValue}>
                            {itemValue}
                          </Option>
                        );
                      })}
                    </Select>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
                    <FormLabel htmlFor="jobType" sx={{ pb: '0.25rem' }}>
                      Job Type
                    </FormLabel>
                    <Select
                      placeholder="Select a job type"
                      indicator={<KeyboardArrowDown />}
                      name="jobType"
                      value={jobType}
                      sx={{
                        [`& .${selectClasses.indicator}`]: {
                          transition: '0.2s',
                          [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                          },
                        },
                      }}
                      onChange={handleJobType}
                    >
                      {jobTypeOptions.map((itemValue, index) => {
                        return (
                          <Option key={index} value={itemValue}>
                            {itemValue}
                          </Option>
                        );
                      })}
                    </Select>
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
                onClick={(e) => {
                  e.preventDefault();
                  clearValues();
                }}
              >
                Clear
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

export default AddJob;
