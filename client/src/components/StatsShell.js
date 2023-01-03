import React from 'react';
import { useAppContext } from '../context/appContext';

import StatsItem from './StatsItem';
import WorkIcon from '@mui/icons-material/Work';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Grid } from '@mui/material';

function StatsShell() {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      title: 'Pending Applications',
      count: stats.pending || 0,
      icon: <WorkIcon sx={{ width: '3rem', height: '3rem', color: 'white' }} />,
      backgroundColor: '#096bde',
    },
    {
      title: 'Interviews Scheduled',
      count: stats.interview || 0,
      icon: (
        <NoteAltIcon sx={{ width: '3rem', height: '3rem', color: 'white' }} />
      ),
      backgroundColor: '#096bde',
    },
    {
      title: 'Declined Applications',
      count: stats.declined || 0,
      icon: (
        <ThumbDownAltIcon
          sx={{ width: '3rem', height: '3rem', color: 'white' }}
        />
      ),
      backgroundColor: '#096bde',
    },
  ];

  return (
    <Grid container columns={12} spacing={2}>
      {defaultStats.map((item, index) => {
        return (
          <Grid item key={index} xs={12} md={12} lg={4}>
            <StatsItem {...item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default StatsShell;
