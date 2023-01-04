import React from 'react';
import Alert from '@mui/joy/Alert';
import { useAppContext } from '../context/appContext';

function Notification() {
  const { alertType, alertText } = useAppContext();
  return (
    <Alert color={`${alertType}`} variant="soft">
      {alertText}
    </Alert>
  );
}

export default Notification;
