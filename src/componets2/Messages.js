import React, { useState } from 'react';

const Message = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Admin', text: 'Welcome to the dashboard!' },
    { id: 2, sender: 'User', text: 'Thanks! Happy to be here.' },
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
    <div className="p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Messages</h2>
      <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
        {messages.map(msg => (
          <div key={msg.id} className="bg-blue-50 p-3 rounded-md">
            <p className="text-sm font-semibold text-blue-700">{msg.sender}</p>
            <p className="text-gray-800">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
