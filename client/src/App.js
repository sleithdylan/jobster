import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Login from './pages/Login';
import Sample from './pages/Sample';
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
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
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/sample" element={<Sample />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
