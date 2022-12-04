import React from 'react';
import Link from '@mui/joy/Link';

import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Checkbox from '@mui/joy/Checkbox';
import Sheet from '@mui/joy/Sheet';
import { Grid } from '@mui/material';
import Box from '@mui/joy/Box';

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
        <Typography
          level="h3"
          fontWeight="xl"
          sx={{
            paddingBottom: '1.5rem',
          }}
        >
          Jobster.
        </Typography>
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
              label="Password"
              placeholder="********"
              variant="outlined"
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '1.5rem 0',
              }}
            >
              <Checkbox size="sm" label="Remember me" />
              <Typography level="body2" fontWeight="lg">
                <Link>Forgot password?</Link>
              </Typography>
            </Box>
            <Button
              variant="solid"
              fullWidth
              sx={{
                marginBottom: '1.5rem',
              }}
            >
              Sign in
            </Button>
            <Typography level="body2" fontWeight="lg">
              Don’t have an account yet? <Link>Sign up</Link>
            </Typography>
          </Grid>
        </Sheet>
      </Grid>
    </>
  );
}

export default Login;
