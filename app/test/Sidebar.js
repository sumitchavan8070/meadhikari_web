"use client";
import React from "react";

const Sidebar = ({
  totalQuestions,
  currentQuestion,
  markedQuestions,
  selectedAnswers,
  navigateToQuestion,
  isSidebarOpen,
  setIsSidebarOpen,
  isDarkMode,
}) => (
  <aside
    className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
      isSidebarOpen ? "block" : "hidden md:block"
    } ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
  >
    <div className="mb-2 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center">
      <div className="flex items-center space-x-1">
        <span className="w-4 h-4 bg-red-500 rounded-full"></span>
        <span>Current</span>
      </div>
      <div className="flex items-center space-x-1">
        <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        <span>Review</span>
      </div>
      <div className="flex items-center space-x-1">
        <span className="w-4 h-4 bg-green rounded-full"></span>
        <span>Answered</span>
      </div>
      <div className="flex items-center space-x-1">
        <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
        <span>Unanswered</span>
      </div>
    </div>

    <h2 className="text-lg font-bold">Questions</h2>
    <div className="grid grid-cols-5 gap-2 mt-2">
      {[...Array(totalQuestions)].map((_, index) => {
        const isCurrent = currentQuestion === index;
        const isMarked = markedQuestions.includes(index);
        const isSelected = selectedAnswers[index] !== undefined;

        return (
          <button
            key={index}
            onClick={() => {
              navigateToQuestion(index);
              setIsSidebarOpen(false);
            }}
            className={`w-10 h-10 rounded overflow-hidden ${
              isCurrent
                ? isDarkMode
                  ? "bg-red-600 text-white"
                  : "bg-red-500 text-white"
                : isMarked
                ? isDarkMode
                  ? "bg-purple-600 text-white"
                  : "bg-purple-500 text-white"
                : isSelected
                ? isDarkMode
                  ? "bg-green text-white"
                  : "bg-green text-white"
                : isDarkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  </aside>
);

export default Sidebar;
