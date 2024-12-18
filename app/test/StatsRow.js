"use client";
import React from "react";

const StatsRow = ({
  totalQuestions,
  selectedAnswers,
  markedQuestions,
  isDarkMode,
}) => {
  const attempted = Object.keys(selectedAnswers).length; // Attempted questions
  const notVisited = totalQuestions - attempted - markedQuestions.length; // Not visited questions
  const markedForReview = markedQuestions.length; // Marked for review questions

  return (
    <div
      className={`w-full flex flex-col sm:flex-row justify-between items-center p-4 ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">Marked for Review:</span>
        <span>{markedForReview}</span>
      </div>
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">
          Attempted Questions:
        </span>
        <span>{attempted}</span>
      </div>
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">Not Visited:</span>
        <span>{notVisited}</span>
      </div>
    </div>
  );
};

export default StatsRow;
