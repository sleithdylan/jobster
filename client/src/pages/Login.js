import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Link,
  CssBaseline,
  Typography,
  Button,
  TextField,
  Sheet,
  Divider,
} from '@mui/joy';
import { Box, Grid } from '@mui/material';

import Notification from '../components/Notification';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  const onSubmitDemoUser = (e) => {
    e.preventDefault();

    const { isMember } = values;

    if (isMember) {
      loginUser({
        email: 'demo@jobster.com',
        password: '*$aN5f8LQ!rM',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard/stats');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <>
      <CssBaseline />
      <Grid
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        container={true}
        sx={{
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Link
          component="a"
          sx={{
            paddingBottom: '1.5rem',
          }}
        >
          <img src="/jobster-logo.svg" width={200} height={50} alt="" />
        </Link>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 6,
            listStyle: 'none',
          }}
        >
          <Grid flexDirection="column" minWidth={350}>
            <Typography level="h4" fontWeight="xl">
              {values.isMember
                ? 'Sign in to your account'
                : ' Create an account'}
            </Typography>
            {showAlert && (
              <Box
                sx={{
                  margin: '1.5rem 0',
                }}
              >
                <Notification />
              </Box>
            )}
            <form onSubmit={onSubmit}>
              {!values.isMember && (
                <TextField
                  type="text"
                  label="Your name"
                  name="name"
                  placeholder="e.g. Bonnie"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.name}
                  sx={{
                    margin: '1.5rem 0',
                  }}
                />
              )}
              <TextField
                type="text"
                label="Your email"
                name="email"
                placeholder="name@company.com"
                variant="outlined"
                onChange={handleChange}
                value={values.email}
                sx={{
                  margin: '1.5rem 0',
                }}
              />
              <TextField
                type="password"
                label="Password"
                name="password"
                placeholder="********"
                variant="outlined"
                onChange={handleChange}
                value={values.password}
                sx={{
                  margin: '1.5rem 0',
                }}
              />
              {values.isMember ? (
                <>
                  <Button
                    type="submit"
                    variant="solid"
                    fullWidth
                    disabled={isLoading}
                    sx={{
                      marginBottom: '1.5rem',
                    }}
                  >
                    {isLoading ? 'Please wait...' : 'Sign in'}
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  variant="solid"
                  fullWidth
                  disabled={isLoading}
                  sx={{
                    marginBottom: '1.5rem',
                  }}
                >
                  {isLoading ? 'Please wait...' : 'Create an account'}
                </Button>
              )}
              {values.isMember ? (
                <Typography level="body2">
                  Don’t have an account yet?{' '}
                  <Link
                    onClick={toggleMember}
                    fontWeight="lg"
                    sx={{ color: '#6366f1' }}
                  >
                    Sign up
                  </Link>
                </Typography>
              ) : (
                <Typography level="body2">
                  Already have an account?{' '}
                  <Link
                    onClick={toggleMember}
                    fontWeight="lg"
                    sx={{ color: '#6366f1' }}
                  >
                    Login here
                  </Link>
                </Typography>
              )}
            </form>
            <form onSubmit={onSubmitDemoUser}>
              {values.isMember ? (
                <>
                  <Divider sx={{ mt: 2 }}>
                    <Typography variant="h2">Or continue as</Typography>
                  </Divider>
                  <Button
                    type="submit"
                    onClick={() =>
                      loginUser({
                        email: 'demo@jobster.com',
                        password: '*$aN5f8LQ!rM',
                      })
                    }
                    variant="outlined"
                    color="neutral"
                    sx={{
                      margin: '1.5rem 0',
                      backgroundColor: '#F7F7F8',
                      '&:hover': {
                        backgroundColor: '#efefef',
                        borderColor: '#d8d8df',
                      },
                      '&:active': {
                        backgroundColor: '#e5e5e5',
                        borderColor: '#d8d8df',
                      },
                    }}
                    fullWidth
                  >
                    Demo User
                  </Button>
                </>
              ) : null}
            </form>
          </Grid>
        </Sheet>
      </Grid>
    </>
  );
}

export default Login;
