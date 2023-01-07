import { Box, Divider, Sheet } from '@mui/joy';
import { Grid, Skeleton } from '@mui/material';
import React from 'react';

function SimpleRadarChartSkeleton() {
  return (
    <Grid container columns={12} spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <Sheet
          component="div"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            pb: 2,
            listStyle: 'none',
            gap: 1.5,
            mt: 2,
            height: '41.5rem',
          }}
        >
          <Box sx={{ pt: 1, pb: 2, pl: 4, width: '14rem' }}>
            <Skeleton width="100%" height={50} animation="wave" />
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              px: 4,
            }}
          >
            <Skeleton width="100%" height="33rem" animation="wave" />
          </Box>
        </Sheet>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Sheet
          component="div"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            pb: 2,
            listStyle: 'none',
            gap: 1.5,
            mt: 2,
            height: '41.5rem',
          }}
        >
          <Box sx={{ pt: 1, pb: 2, pl: 4, width: '14rem' }}>
            <Skeleton width="100%" height={50} animation="wave" />
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              px: 4,
            }}
          >
            <Skeleton width="100%" height="33rem" animation="wave" />
          </Box>
        </Sheet>
      </Grid>
    </Grid>
  );
}

export default SimpleRadarChartSkeleton;
