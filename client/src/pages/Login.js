import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Checkbox from '@mui/joy/Checkbox';
import Sheet from '@mui/joy/Sheet';
import { Grid } from '@mui/material';

function Login() {
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
          <img src="/jobster-logo.svg" width={150} height={35} alt="" />
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
              Sign in to your account
            </Typography>
            <TextField
              label="Your email"
              placeholder="name@company.com"
              variant="outlined"
              sx={{
                margin: '1.5rem 0',
              }}
            />
            <TextField
              type="password"
              label="Password"
              placeholder="********"
              variant="outlined"
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
            <Typography level="body2">
              Don’t have an account yet?{' '}
              <Link component={RouterLink} to="/register" fontWeight="lg">
                Sign up
              </Link>
            </Typography>
          </Grid>
        </Sheet>
      </Grid>
    </>
  );
}

export default Login;
