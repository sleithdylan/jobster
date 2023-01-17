import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Chip,
  Divider,
  Sheet,
} from '@mui/joy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

import { useAppContext } from 'context/appContext';

function JobItem({
  id,
  company,
  status,
  position,
  jobType,
  jobLocation,
  createdAt,
}) {
  const { setEditJob, deleteJob } = useAppContext();

  return (
    <Sheet
      key={id}
      component="li"
      variant="outlined"
      sx={{
        borderRadius: 'sm',
        p: 2,
        listStyle: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Avatar
            src={`https://app.outboundsales.io/api/logo/${company.toLowerCase()}.com`}
          />
          <Typography>{company}</Typography>
        </Box>
        <Chip
          variant="soft"
          color={
            status === 'declined'
              ? 'danger'
              : status === 'interview'
              ? 'primary'
              : status === 'pending'
              ? 'warning'
              : null
          }
          sx={{
            borderRadius: '5px',
            textTransform: 'capitalize',
          }}
        >
          {status}
        </Chip>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography level="h5" fontWeight="bold">
          {position}
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <Chip
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{ borderRadius: '5px', mb: 1 }}
        >
          {jobType}
        </Chip>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            fontSize="sm"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <LocationOnIcon />
            {jobLocation}
          </Typography>
        </Box>
        <Typography
          fontSize="sm"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <AccessTimeIcon />
          {moment(createdAt).format('LL')}
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Link
          to={`/dashboard/edit-job`}
          onClick={() => setEditJob(id)}
          style={{ textDecoration: 'none' }}
        >
          <Button color="primary" variant="solid" fullWidth>
            Edit
          </Button>
        </Link>
        <Box
          sx={{
            my: 2,
          }}
        ></Box>
        <Button
          color="danger"
          variant="outlined"
          onClick={() => deleteJob(id)}
          fullWidth
        >
          Remove
        </Button>
      </Box>
    </Sheet>
  );
}

export default JobItem;
