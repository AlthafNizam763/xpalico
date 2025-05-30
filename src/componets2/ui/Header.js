import React from 'react';
import { FaBell } from 'react-icons/fa';
import logoImage from '../../assets/30.jpeg';

const DashboardHeader = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <h2 className="text-lg text-blue-600 font-semibold">
        Hello BONDI, welcome back!
      </h2>
      <div className="flex items-center gap-4">
        <FaBell />
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="User" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-bold">BONDI</p>
            <span className="text-xs text-blue-600">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
