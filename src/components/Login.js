// import React, { useState } from 'react';
// import logoImage from '../assets/34.jpeg';

// const AuthPage = () => {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     name: '',
//     phoneNumber: '',
//   });
//   const [tab, setTab] = useState('login');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleLogin = () => {
//     console.log('Logging in with', form);
//   };

//   const handleRegister = () => {
//     console.log('Registering with', form);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-100">
//       <div className="absolute top-8 flex flex-col items-center">
//         <img src={logoImage} alt="Logo" className="w-16 h-16 mb-2" />
//         <h1 className="text-2xl font-bold">MoRe Experts</h1>
//       </div>

//       <div className="w-full max-w-md p-6 bg-stone-900 text-black rounded-2xl shadow-lg mt-24">
//         <div className="flex mb-4 justify-center space-x-4">
//           <button
//             className={`px-4 py-2 rounded-full ${tab === 'login' ? 'bg-[#6DE754] text-black' : 'bg-gray-200'}`}
//             onClick={() => setTab('login')}
//           >
//             Sing In
//           </button>
//           <button
//             className={`px-4 py-2 rounded-full ${tab === 'register' ? 'bg-[#6DE754] text-black' : 'bg-gray-200'}`}
//             onClick={() => setTab('register')}
//           >
//             Sing Up
//           </button>
//         </div>

//         {tab === 'login' && (
//           <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//               required
//             />
//            <div className="flex justify-center">
//             <button type="submit" className="w-1/2 py-2 bg-black text-[#6DE754] rounded hover:bg-[#6DE754] hover:text-black transition">
//             Submit
//            </button>
//             </div>          
//             </form>
//         )}

//         {tab === 'register' && (
//           <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//               required
//             />
//            <input
//                 type="number"
//                 name="phoneNumber"
//                 placeholder="Ph No"
//                 value={form.phoneNumber}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded"
//                 required
//                 />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//               required
//             />
//            <div className="flex justify-center">
//             <button type="submit" className="w-1/2 py-2 bg-black text-[#6DE754] rounded hover:bg-[#6DE754] hover:text-black transition">
//             Submit
//            </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
