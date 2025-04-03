// "use client";
// import React from "react";

// const StatsRow = ({
//   totalQuestions,
//   selectedAnswers,
//   markedQuestions,
//   isDarkMode,
// }) => {
//   const attempted = Object.keys(selectedAnswers).length; // Attempted questions
//   const notVisited = totalQuestions - attempted - markedQuestions.length; // Not visited questions
//   const markedForReview = markedQuestions.length; // Marked for review questions

//   return (
//     <div
//       className={`w-full flex flex-col sm:flex-row justify-between items-center p-4 ${
//         isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
//       }`}
//     >
//       <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
//         <span className="font-bold whitespace-nowrap">Marked for Review:</span>
//         <span>{markedForReview}</span>
//       </div>
//       <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
//         <span className="font-bold whitespace-nowrap">
//           Attempted Questions:
//         </span>
//         <span>{attempted}</span>
//       </div>
//       <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
//         <span className="font-bold whitespace-nowrap">Not Visited:</span>
//         <span>{notVisited}</span>
//       </div>
//     </div>
//   );
// };

// export default StatsRow;
// "use client";
// import React from "react";

// const StatsRow = ({
//   totalQuestions,
//   selectedAnswers,
//   markedQuestions,
//   isDarkMode,
// }) => {
//   const attempted = Object.keys(selectedAnswers).length;
//   const notVisited = totalQuestions - attempted - markedQuestions.length;
//   const markedForReview = markedQuestions.length;

//   return (
//     <div
//       className={`w-full flex flex-col sm:flex-row justify-between items-center p-4 md:p-6 rounded-xl ${
//         isDarkMode
//           ? "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-100"
//           : "bg-gradient-to-r from-gray-100 to-white text-gray-800"
//       } shadow-sm`}
//     >
//       {/* Marked for Review */}
//       <div className="flex items-center space-x-3 mb-3 sm:mb-0 px-4 py-2 rounded-lg bg-opacity-20 bg-purple-500">
//         <span className="w-3 h-3 rounded-full bg-purple-500"></span>
//         <span className="text-sm md:text-base font-semibold">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
//             Marked:
//           </span>{" "}
//           <span className="font-bold">{markedForReview}</span>
//         </span>
//       </div>

//       {/* Attempted Questions */}
//       <div className="flex items-center space-x-3 mb-3 sm:mb-0 px-4 py-2 rounded-lg bg-opacity-20 bg-emerald-500">
//         <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
//         <span className="text-sm md:text-base font-semibold">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-400">
//             Attempted:
//           </span>{" "}
//           <span className="font-bold">{attempted}</span>
//         </span>
//       </div>

//       {/* Not Visited */}
//       <div className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-opacity-20 bg-gray-500">
//         <span className="w-3 h-3 rounded-full bg-gray-400"></span>
//         <span className="text-sm md:text-base font-semibold">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400">
//             Not Visited:
//           </span>{" "}
//           <span className="font-bold">{notVisited}</span>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default StatsRow;
"use client";
import React from "react";

const StatsRow = ({
  totalQuestions,
  selectedAnswers,
  markedQuestions,
  isDarkMode,
}) => {
  const attempted = Object.keys(selectedAnswers).length;
  const notVisited = totalQuestions - attempted - markedQuestions.length;
  const markedForReview = markedQuestions.length;

  return (
    <div
      className={`w-full flex flex-wrap justify-center gap-2 p-3 sm:p-4 rounded-lg ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-100"
          : "bg-gradient-to-r from-gray-100 to-white text-gray-800"
      } shadow-sm`}
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
  );
};

export default StatsRow;
