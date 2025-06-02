import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import Sidebar from './ui/Sidebar'; // Ensure this path is correct

const mockUsers = [
  {
    id: 1,
    name: 'Bondi',
    username: 'bondi',
    email: 'bondi@gmail.com',
    contact: '8907997733',
    access: true,
    date: '16-01-2025',
  },
  {
    id: 2,
    name: 'Fazin',
    username: 'fazinonl001',
    email: 'fazin@gmail.com',
    contact: '9633146330',
    access: true,
    date: '28-01-2025',
  },
  {
    id: 3,
    name: 'test',
    username: 'test@123',
    email: 'test@gmail.com',
    contact: '9876543210',
    access: true,
    date: '23-02-2025',
  },
  {
    id: 4,
    name: 'Xpalico',
    username: 'xpalico',
    email: 'althafnizam763@gmail.com',
    contact: '9633146330',
    access: true,
    date: '17-02-2025',
  },
  {
    id: 5,
    name: 'Hinata',
    username: 'hinata@123',
    email: 'hinata@gmail.com',
    contact: '9876543210',
    access: true,
    date: '27-01-2025',
  },
];

const UserControl = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleAccess = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, access: !user.access } : user
      )
    );
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">User Control</h2>

        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-3">
          <input
            type="text"
            placeholder="Search User"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded-md md:w-1/3 w-full focus:outline-none"
          />
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Create New User
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 text-sm text-left">
                <th className="p-3">Sl No</th>
                <th className="p-3">Name</th>
                <th className="p-3">User name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Access Status</th>
                <th className="p-3">Created Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 text-sm">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.contact}</td>
                  <td className="p-3">
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={user.access}
                        onChange={() => handleToggleAccess(user.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 relative" />
                    </label>
                  </td>
                  <td className="p-3">{user.date}</td>
                  <td className="p-3">
                    <button>
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserControl;
