import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import logoImage from '../assets/34.png';

const AuthPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
  });
  const [tab, setTab] = useState('login');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = () => {
    if (form.email === 'moreexperts' && form.password === '123abcAB') {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleRegister = () => {
    console.log('Registering with', form);
    alert('Registration submitted!');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 text-white flex flex-col justify-center items-start pl-20">
        <img src={logoImage} alt="Logo" className="w-12 h-12 mb-2" />
        <p className="text-lg font-semibold">MoRe Experts</p>
        <div className="text-5xl font-bold mb-4">
          Win your dream <br />
          & job with<br />
          MoRe Experts
        </div>
      </div>

      {/* Right panel */}
      <div className="w-1/2 flex items-center justify-center bg-white relative">
        {/* Back arrow */}
        <button
          onClick={() => navigate('/xpalico')}
          className="absolute top-4 left-4 text-blue-700 hover:text-blue-900 transition"
        >
          <FaArrowLeft size={24} />
        </button>

        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-6">Sign in to Continue</p>

          {tab === 'login' && (
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
              <input
                type="text"
                name="email"
                placeholder="Username"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
              >
                Login Now
              </button>
              <div className="flex justify-between text-sm mt-2">
                <a href="#" className="text-blue-700">Forgot password?</a>
                <button
                  type="button"
                  onClick={() => setTab('register')}
                  className="text-blue-700"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}

          {tab === 'register' && (
            <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
              >
                Register Now
              </button>
              <div className="text-center mt-2">
                <button
                  type="button"
                  onClick={() => setTab('login')}
                  className="text-blue-700"
                >
                  Back to Login
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
