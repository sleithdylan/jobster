import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/" element={<div>Login</div>} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
