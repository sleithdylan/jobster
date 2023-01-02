import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Sheet, Typography } from '@mui/joy';

function SimpleAreaChart({ data }) {
  return (
    <>
      <Sheet
        component="div"
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          p: 2,
          listStyle: 'none',
          gap: 1.5,
          mt: 2,
        }}
      >
        <Typography level="h4" fontWeight="bold" sx={{ py: 2, pl: 4 }}>
          Monthly Applications
        </Typography>
        <ResponsiveContainer width="100%" height={575}>
          <AreaChart
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 50,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#096bde"
              fill="#096bde"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Sheet>
    </>
  );
}

export default SimpleAreaChart;
