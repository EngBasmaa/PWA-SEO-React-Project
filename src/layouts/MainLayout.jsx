import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 bg-background">
      <Outlet />
    </div>
  );
};

export default MainLayout;