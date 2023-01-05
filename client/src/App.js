import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Login from './pages/Login';
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  ProtectedRoute,
} from './pages/dashboard/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard/stats"
          element={
            <ProtectedRoute>
              <Stats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/all-jobs"
          element={
            <ProtectedRoute>
              <AllJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/add-job"
          element={
            <ProtectedRoute>
              <AddJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
