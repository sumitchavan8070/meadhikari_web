"use client";

import React from "react";

const QuizCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(5,90,171,0.1)] p-6 border border-[rgba(5,90,171,0.15)] animate-pulse">
      <div className="flex space-x-2 mb-4">
        <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-12 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-3 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded-lg"></div>
    </div>
  );
};

export default QuizCardSkeleton;


