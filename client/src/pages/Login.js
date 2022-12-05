import React, { useState } from 'react';

import Link from '@mui/joy/Link';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Checkbox from '@mui/joy/Checkbox';
import Sheet from '@mui/joy/Sheet';
import { Grid } from '@mui/material';
import Notification from '../components/Alert';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

function Login() {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

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
            <Typography
              level="h4"
              fontWeight="xl"
              sx={{
                paddingBottom: '1.5rem',
              }}
            >
              {values.isMember
                ? 'Sign in to your account'
                : ' Create an account'}
            </Typography>
            {values.showAlert && <Notification />}
            <form onSubmit={onSubmit}>
              {!values.isMember && (
                <TextField
                  type="text"
                  label="Your name"
                  name="name"
                  placeholder="e.g. Bonnie Green"
                  variant="outlined"
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
              />
              <Checkbox
                size="sm"
                label="Remember me"
                sx={{
                  margin: '1.5rem 0',
                }}
              />
              <Button
                variant="solid"
                fullWidth
                sx={{
                  marginBottom: '1.5rem',
                }}
              >
                Sign in
              </Button>
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
