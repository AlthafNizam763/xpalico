import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUserFriends,
  FaRegEnvelope,
  FaLayerGroup,
  FaCog,
  FaEllipsisV,
} from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import logoImage from '../../assets/34.jpeg';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: <IoHome size={18} />, label: 'Overview', path: '', active: true },
    { icon: <FaLayerGroup size={16} />, label: 'Banner', path: '/banner' },
    { icon: <FaRegEnvelope size={16} />, label: 'Message', path: '/messages' },
    { icon: <FaUserFriends size={16} />, label: 'User Controls', path: '/user-controls' },
    { icon: <FaCog size={16} />, label: 'Setting', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow md:hidden"
      >
        <FaEllipsisV size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-600 w-60 bg-white shadow-md border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static z-40
          flex flex-col justify-between p-4
        `}
      >
        {/* Logo Section */}
       <div className="text-xl font-bold mb-10 px-1">
        <img src={logoImage} alt="User" className="w-8 h-8 rounded-full" />
        <span className="text-blue-700">Mo</span>
        <span className="text-black">R</span>
        <span className="text-blue-700">e Experts</span>
        </div>


        {/* Navigation */}
        <nav className="flex flex-col gap-5 flex-grow">
          {navItems.map(({ icon, label, path, active }) => (
            <button
              key={label}
              onClick={() => {
                navigate(path);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 text-sm px-1 py-1 rounded-md font-medium ${
                active
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </nav>

        {/* Log Out Section */}
        <div className="mt-10">
          <div className="bg-blue-100 text-center p-2 rounded-md text-sm">
            <button
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
              className="text-blue-600 underline font-medium"
            >
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
