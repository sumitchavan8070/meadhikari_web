"use client";
import React from "react";

const FooterControls = ({
  handleMarkForReview,
  showEndModal,
  setShowEndModal,
  isDarkMode,
}) => (
  <footer
    className={`p-4 flex justify-between items-center ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
    }`}
  >
    <button
      onClick={handleMarkForReview}
      className="bg-purple-500 text-white px-4 py-2 rounded"
    >
      {showEndModal ? "Unmark Review" : "Mark for Review"}
    </button>
    <button
      onClick={() => setShowEndModal(true)}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Submit Test
    </button>
  </footer>
);
export default FooterControls;
