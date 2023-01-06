import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, CssBaseline, Typography, Box } from '@mui/joy';
import { Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

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
          sx={{
            paddingBottom: '0.5rem',
            color: '#6366f1',
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
            sx={{ textDecoration: 'none', color: '#6366f1' }}
          >
            Go back home
          </Link>
        </Box>
      </Grid>
    </>
  );
}

export default Error;
