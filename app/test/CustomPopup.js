"use client";

import React from "react";

const CustomPopup = ({ onClose, onLeave }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Leaving the Page?</h2>
        <p className="mb-4">
          Are you sure you want to leave this page? Your progress might not be
          saved.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg"
          >
            Stay
          </button>
          <button
            onClick={onLeave}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
