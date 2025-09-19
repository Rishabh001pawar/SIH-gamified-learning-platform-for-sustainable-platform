import React from 'react';
import { HiXMark } from 'react-icons/hi2';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition"
        >
          <HiXMark className="h-7 w-7" />
        </button>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;