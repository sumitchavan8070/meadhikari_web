"use client";
import React, { useEffect, useState } from "react";

const StatsRow = ({
  totalQuestions,
  selectedAnswers,
  markedQuestions,
  isDarkMode,
}) => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const [prevValues, setPrevValues] = useState({
    totalQuestions,
    selectedAnswers,
    markedQuestions,
  });

  const attempted = Object.keys(selectedAnswers).length;
  const notVisited = totalQuestions - attempted - markedQuestions.length;
  const markedForReview = markedQuestions.length;

  useEffect(() => {
    // Check if any value has changed
    const hasUpdated =
      prevValues.totalQuestions !== totalQuestions ||
      JSON.stringify(prevValues.selectedAnswers) !==
        JSON.stringify(selectedAnswers) ||
      prevValues.markedQuestions.length !== markedQuestions.length;

    if (hasUpdated) {
      setIsVisible(true); // Make the component visible
      setPrevValues({ totalQuestions, selectedAnswers, markedQuestions }); // Update previous values

      // Hide the component after a delay (optional, for animation effect)
      const timeout = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [totalQuestions, selectedAnswers, markedQuestions]);

  if (!isVisible) return null; // Render nothing if not visible

  return (
    <div
      className="fixed inset-0 flex items-start justify-center pt-4 z-50"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      {/* Inner Container */}
      <div
        className={`w-full max-w-md flex flex-wrap justify-center gap-2 p-3 sm:p-4 rounded-lg ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-100"
            : "bg-gradient-to-r from-gray-100 to-white text-gray-800"
        } shadow-lg`}
        style={{
          animation: `${
            isVisible
              ? "slideInTop 0.5s ease-in-out"
              : "fadeOutTop 0.5s ease-in-out forwards"
          }`,
        }}
      >
        {/* Marked for Review - Compact Mobile Version */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-opacity-20 bg-purple-500">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
          <span className="text-xs sm:text-sm font-medium">
            <span className="sm:hidden">Review:</span>
            <span className="hidden sm:inline">Marked:</span>{" "}
            <span className="font-bold">{markedForReview}</span>
          </span>
        </div>

        {/* Attempted Questions - Compact Mobile Version */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-opacity-20 bg-emerald-500">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="text-xs sm:text-sm font-medium">
            <span className="sm:hidden">Attempt:</span>
            <span className="hidden sm:inline">Attempted:</span>{" "}
            <span className="font-bold">{attempted}</span>
          </span>
        </div>

        {/* Not Visited - Compact Mobile Version */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-opacity-20 bg-gray-500">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
          <span className="text-xs sm:text-sm font-medium">
            <span className="sm:hidden">Not Visited:</span>
            <span className="hidden sm:inline">Not Visited:</span>{" "}
            <span className="font-bold">{notVisited}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
