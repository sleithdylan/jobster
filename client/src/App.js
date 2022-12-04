import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Sample from './pages/Sample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/register" element={null} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
