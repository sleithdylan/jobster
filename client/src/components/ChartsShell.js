import React from 'react';
import { Grid } from '@mui/material';

import { useAppContext } from '../context/appContext';
import SimpleAreaChart from './SimpleAreaChart';

function ChartsShell() {
  const { monthlyApplications: data } = useAppContext();
  return (
    <Grid container columns={12} spacing={2}>
      <Grid item xs={12}>
        <SimpleAreaChart data={data} />
      </Grid>
    </Grid>
  );
}

export default ChartsShell;
