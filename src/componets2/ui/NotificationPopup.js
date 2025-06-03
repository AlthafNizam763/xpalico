import React from 'react';
import { FaSignInAlt, FaThumbsUp, FaTimesCircle } from 'react-icons/fa';

const typeStyles = {
  info: {
    bg: 'bg-teal-200',
    icon: <FaSignInAlt className="text-teal-700 text-xl" />,
    title: 'Information',
    text: 'text-teal-900',
  },
  warning: {
    bg: 'bg-yellow-200',
    icon: <FaThumbsUp className="text-yellow-700 text-xl" />,
    title: 'Opps',
    text: 'text-yellow-900',
  },
  error: {
    bg: 'bg-rose-300',
    icon: <FaTimesCircle className="text-rose-800 text-xl" />,
    title: 'Error!',
    text: 'text-rose-900',
  },
};

const NotificationPopup = ({ type = 'info', message, onClose }) => {
  const style = typeStyles[type];

  return (
    <div className={`flex items-start gap-4 ${style.bg} p-4 rounded-xl shadow-lg max-w-md w-full`}>
      {style.icon}
      <div className="flex-1">
        <h4 className={`font-bold ${style.text}`}>{style.title}</h4>
        <p className={`${style.text}`}>{message}</p>
      </div>
      <button onClick={onClose} className="font-bold text-gray-600 hover:text-black">&times;</button>
    </div>
  );
};

export default NotificationPopup;
