import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';


const Dashboard = () => {
  const navigate = useNavigate();

  const courses = [
    { name: 'Total Users', progress: 75, color: 'bg-blue-500', icon: '🥸' },
    { name: 'Total Works', progress: 75, color: 'bg-orange-400', icon: '😎' },
  ];

  const stats = [
    { label: '', value: '02' },
    { label: '', value: '250' },
    { label: '', value: '03' },
    { label: '', value: '05' },
  ];

  const activities = [30, 20, 40, 80, 50, 30, 40];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <Header />
        {/* Courses */}
        <section className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Overview</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {courses.map(course => (
              <div key={course.name} className={`rounded-xl text-white p-4 ${course.color} shadow-md`}>
                <div className="text-lg font-semibold">{course.name}</div>
                <div className="text-xl mt-4">{course.icon}</div>
                <div className="mt-2 text-sm">{course.progress}%</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Stats */}
      <aside className="w-full md:w-60 p-4 bg-white shadow-md">
        <h3 className="text-xl font-semibold mb-4">Statistics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-blue-50 text-center p-4 rounded-lg">
              <div className="text-xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">Activity</h3>
        <div className="flex justify-between items-end h-32">
          {activities.map((val, i) => (
            <div key={i} className="w-4 bg-blue-300 rounded-t" style={{ height: `${val}px` }}></div>
          ))}
        </div>
        <div className="text-center text-sm mt-2 text-gray-500">Day | Week | Month</div>
      </aside>
    </div>
  );
};

export default Dashboard;
