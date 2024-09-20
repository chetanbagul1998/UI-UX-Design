import React from 'react';
import { Outlet } from 'react-router-dom'; 
import './MainContent.css'; 

const MainContent = () => {
  return (
    <div className="main-content">
    <Outlet />
  </div>
  );
};

export default MainContent;
