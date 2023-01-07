import React from 'react';
import { Grid } from '@mui/material';

import { useAppContext } from 'context/appContext';
import SimpleAreaChart from 'components/SimpleAreaChart';
import SimpleRadarChart from 'components/SimpleRadarChart';

function ChartsShell() {
  const { monthlyApplications, jobTypes } = useAppContext();
  return (
    <Grid container columns={12} spacing={{ lg: 2 }}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <SimpleAreaChart data={monthlyApplications} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <SimpleRadarChart data={jobTypes} />
      </Grid>
    </Grid>
  );
}

export default ChartsShell;
