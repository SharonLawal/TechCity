import React from 'react';
import { FaSearch, FaBell, FaCog, FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blue-50 p-4">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-900">TechCity</div>

      {/* Search Bar */}
      <div className="relative flex items-center w-1/2 max-w-md">
        <FaSearch className="absolute left-3 text-blue-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white shadow focus:outline-none"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon with Badge */}
        <div className="relative">
          <FaBell className="text-blue-600" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>

        {/* Settings Icon */}
        <FaCog className="text-blue-600" />

        {/* Home Icon */}
        <FaHome className="text-blue-600" />

        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/30"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
