import React from 'react';

import { Box, Typography, Sheet } from '@mui/joy';

function StatsItem({ title, count, icon, backgroundColor }) {
  return (
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
            height: '5rem',
            backgroundColor: { backgroundColor },
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            ml: '1rem',
          }}
        >
          <Typography level="body1">{title}</Typography>
          <Typography level="h2">{count}</Typography>
        </Box>
      </Box>
    </Sheet>
  );
}

export default StatsItem;
