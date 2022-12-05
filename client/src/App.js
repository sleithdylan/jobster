import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Sample from './pages/Sample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
