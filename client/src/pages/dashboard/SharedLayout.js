import { Outlet } from 'react-router-dom';

import React from 'react';

function SharedLayout() {
  return (
    <main>
      <div className="dashboard-page">
        <Outlet />
      </div>
    </main>
  );
}

export default SharedLayout;
