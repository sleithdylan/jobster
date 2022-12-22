import React, { useState, useEffect } from 'react';
import Notification from '../components/Alert';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

import {
  Link,
  CssBaseline,
  Typography,
  Button,
  TextField,
  Checkbox,
  Sheet,
} from '@mui/joy';
import { Box, Grid } from '@mui/material';

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
                  placeholder="e.g. Bonnie Green"
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
              />
              <Checkbox
                size="sm"
                label="Remember me"
                sx={{
                  margin: '1.5rem 0',
                }}
              />
              {values.isMember ? (
                <Button
                  type="submit"
                  variant="solid"
                  fullWidth
                  sx={{
                    marginBottom: '1.5rem',
                  }}
                >
                  Sign in
                </Button>
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
                  Create an account
                </Button>
              )}
            </form>
            {values.isMember ? (
              <Typography level="body2">
                Don’t have an account yet?{' '}
                <Link onClick={toggleMember} fontWeight="lg">
                  Sign up
                </Link>
              </Typography>
            ) : (
              <Typography level="body2">
                Already have an account?{' '}
                <Link onClick={toggleMember} fontWeight="lg">
                  Login here
                </Link>
              </Typography>
            )}
          </Grid>
        </Sheet>
      </Grid>
    </>
  );
}

export default Login;
