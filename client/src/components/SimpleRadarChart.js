import { Divider, Sheet, Typography } from '@mui/joy';
import React from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

function SimpleRadarChart({ data }) {
  return (
    <>
      <Sheet
        component="div"
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          py: 2,
          listStyle: 'none',
          gap: 1.5,
          mt: 2,
        }}
      >
        <Typography level="h4" fontWeight="lg" sx={{ pt: 1, pb: 2, pl: 4 }}>
          Job Types
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <ResponsiveContainer width="100%" height={565}>
          <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="type" />
            <Radar
              dataKey="count"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </Sheet>
    </>
  );
}

export default SimpleRadarChart;
