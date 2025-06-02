import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { FaFileAlt } from 'react-icons/fa';
import Sidebar from './ui/Sidebar';

const Message = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Mary Franci', text: 'Can I try the software first?' },
    { id: 2, sender: 'You', text: 'Sure. Here is the demo unit. You can use it as long as you want.' },
    { id: 3, sender: 'Mary Franci', text: 'Thank you. Now I want to buy the software. Which type of subscription do you have?' },
    { id: 4, sender: 'You', text: 'We have many types of subscription. Please look at this showcase.', file: 'Presentation.pdf' },
    { id: 5, sender: 'Mary Franci', text: "Thanks. I'll watch it later!" },
    { id: 6, sender: 'You', text: 'You are welcome!' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage.trim(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 flex-1 bg-gray-50">
        
        {/* Left - Chat List */}
        <aside className="col-span-1 border-r bg-white overflow-y-auto">
          <div className="p-4 font-bold text-xl text-blue-700">Chat</div>
          <div className="space-y-4 p-4">
            {['Aspen Workman', 'Rheti Madsen', 'Carla Dokidis', 'Maria Vertovs'].map((name, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded cursor-pointer"
              >
                <img
                  src={`https://i.pravatar.cc/30?img=${idx + 1}`}
                  alt={name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-700">{name}</p>
                  <p className="text-sm text-gray-500">Hello! I'm looking for...</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Middle - Chat Area */}
        <main className="col-span-2 flex flex-col h-screen">
          {/* Header */}
          <div className="border-b px-6 py-4 flex items-center gap-3 bg-white">
            <img src="https://i.pravatar.cc/40?img=3" alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold text-gray-800">Mary Franci</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-100">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-xs px-4 py-3 rounded-lg shadow-sm ${
                  msg.sender === 'You' ? 'ml-auto bg-blue-100 text-blue-900' : 'bg-white text-gray-800'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                {msg.file && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-700">
                    <FaFileAlt />
                    <a href="#" className="underline">
                      {msg.file}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t px-6 py-4 bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="text-blue-600 text-xl">
              <FiSend />
            </button>
          </div>
        </main>

        {/* Right - Info Panel */}
        <aside className="col-span-1 border-l bg-white p-4 space-y-6 hidden md:block">
          <div>
            <h3 className="font-semibold text-gray-800">General Info</h3>
            <p className="text-sm text-gray-600 mt-2">Mary Franci</p>
            <p className="text-sm text-gray-600">+1 234-543-4321</p>
            <p className="text-sm text-gray-600">mary_franci@gmail.com</p>
            <p className="text-xs text-blue-600 mt-1">Active User</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Notes</h3>
            <p className="text-sm text-gray-600 mt-2">
              Egret pulvinar blandit tellus suspendisse...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Shared Files</h3>
            <ul className="text-sm text-blue-600 underline mt-2">
              <li>
                <a href="#">Presentation.pdf</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Message;
