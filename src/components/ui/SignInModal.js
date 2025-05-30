// components/SignInModal.tsx
"use client";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white text-black p-8 rounded-2xl w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl font-bold hover:text-red-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Account Creation</h2>
        <p className="mb-4 text-sm text-gray-700">This is a placeholder for your account creation page.</p>
        {/* Add form fields here as needed */}
      </div>
    </div>
  );
};

export default SignInModal;
