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
import IconButton from '@mui/joy/IconButton';
import EastIcon from '@mui/icons-material/East';
import { Link as RouterLink } from 'react-router-dom';

function Error() {
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
          color="primary"
          sx={{
            paddingBottom: '0.5rem',
          }}
        >
          404
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          sx={{
            paddingBottom: '0.5rem',
          }}
        >
          Page not found.
        </Typography>
        <Typography
          level="body1"
          sx={{
            paddingBottom: '1.5rem',
          }}
        >
          Sorry, we couldn’t find the page you’re looking for.
        </Typography>
        <Box>
          <Link
            component={RouterLink}
            endDecorator={<EastIcon />}
            to="/"
            underline="none"
            sx={{ textDecoration: 'none' }}
          >
            Go back home
          </Link>
        </Box>
      </Grid>
    </>
  );
}

export default Error;
