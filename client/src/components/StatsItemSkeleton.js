import React from 'react';
import { Box, Sheet } from '@mui/joy';
import { Grid, Skeleton } from '@mui/material';

function StatsItemSkeleton() {
  return (
    <Grid container columns={12} spacing={2}>
      <Grid item xs={12} md={12} lg={4}>
        <Sheet
          component="div"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
            gap: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', margin: '0.5rem' }}>
            <Box
              sx={{
                width: '5rem',
                height: '4.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Skeleton width="100%" height={120} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '12rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                ml: '1rem',
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
              <Skeleton width="50%" height={50} animation="wave" />
            </Box>
          </Box>
        </Sheet>
      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <Sheet
          component="div"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
            gap: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', margin: '0.5rem' }}>
            <Box
              sx={{
                width: '5rem',
                height: '4.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Skeleton width="100%" height={120} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '12rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                ml: '1rem',
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
              <Skeleton width="50%" height={50} animation="wave" />
            </Box>
          </Box>
        </Sheet>
      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <Sheet
          component="div"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
            gap: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', margin: '0.5rem' }}>
            <Box
              sx={{
                width: '5rem',
                height: '4.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Skeleton width="100%" height={120} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '12rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                ml: '1rem',
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
              <Skeleton width="50%" height={50} animation="wave" />
            </Box>
          </Box>
        </Sheet>
      </Grid>
    </Grid>
  );
}

export default StatsItemSkeleton;
