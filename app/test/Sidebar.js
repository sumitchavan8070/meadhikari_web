// "use client";
// import React from "react";

// const Sidebar = ({
//   totalQuestions,
//   currentQuestion,
//   markedQuestions,
//   selectedAnswers,
//   navigateToQuestion,
//   isSidebarOpen,
//   setIsSidebarOpen,
//   isDarkMode,
// }) => (
//   <aside
//     className={`fixed md:sticky top-0 h-screen md:h-auto z-50 md:z-auto w-80 md:w-1/4 p-6 overflow-y-auto transition-all duration-300 ${
//       isSidebarOpen ? "left-0" : "-left-full md:left-0"
//     } ${
//       isDarkMode
//         ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
//         : "bg-gradient-to-b from-gray-50 to-white text-gray-800"
//     } shadow-xl md:shadow-none`}
//   >
//     {/* Close button for mobile */}
//     <button
//       onClick={() => setIsSidebarOpen(false)}
//       className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-700 text-white"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>

//     <div className="mb-6">
//       <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
//         Question Navigator
//       </h2>
//       <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full mt-2"></div>
//     </div>

//     <div className="mb-6 grid grid-cols-2 gap-3 text-sm">
//       <div
//         className={`flex items-center space-x-2 p-2 rounded-lg ${
//           isDarkMode ? "bg-blue-900/30" : "bg-blue-100"
//         }`}
//       >
//         <span className="w-4 h-4 bg-red-500 rounded-full"></span>
//         <span>Current</span>
//       </div>
//       <div
//         className={`flex items-center space-x-2 p-2 rounded-lg ${
//           isDarkMode ? "bg-purple-900/30" : "bg-purple-100"
//         }`}
//       >
//         <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
//         <span>Review</span>
//       </div>
//       <div
//         className={`flex items-center space-x-2 p-2 rounded-lg ${
//           isDarkMode ? "bg-emerald-900/30" : "bg-emerald-100"
//         }`}
//       >
//         <span className="w-4 h-4 bg-emerald-500 rounded-full"></span>
//         <span>Answered</span>
//       </div>
//       <div
//         className={`flex items-center space-x-2 p-2 rounded-lg ${
//           isDarkMode ? "bg-gray-700/30" : "bg-gray-100"
//         }`}
//       >
//         <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
//         <span>Unanswered</span>
//       </div>
//     </div>

//     <div className="grid grid-cols-5 gap-3">
//       {[...Array(totalQuestions)].map((_, index) => {
//         const isCurrent = currentQuestion === index;
//         const isMarked = markedQuestions.includes(index);
//         const isSelected = selectedAnswers[index] !== undefined;

//         return (
//           <button
//             key={index}
//             onClick={() => {
//               navigateToQuestion(index);
//               setIsSidebarOpen(false);
//             }}
//             className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 font-medium ${
//               isCurrent
//                 ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
//                 : isMarked
//                 ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
//                 : isSelected
//                 ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
//                 : isDarkMode
//                 ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {index + 1}
//           </button>
//         );
//       })}
//     </div>
//   </aside>
// );

// export default Sidebar;
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
    className={`fixed md:sticky top-0 h-screen md:h-[calc(100vh-2rem)] z-50 md:z-auto w-80 md:w-1/4 p-6 transition-all duration-300 ${
      isSidebarOpen ? "left-0" : "-left-full md:left-0"
    } ${
      isDarkMode
        ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-b from-gray-50 to-white text-gray-800"
    } shadow-xl md:shadow-none`}
  >
    {/* Close button for mobile */}
    <button
      onClick={() => setIsSidebarOpen(false)}
      className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-700 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>

    {/* <div className="mb-6">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
        Question Navigator
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full mt-2"></div>
    </div> */}

    <div className="mb-6 grid grid-cols-2 gap-3 text-sm">
      <div
        className={`flex items-center space-x-2 p-2 rounded-lg ${
          isDarkMode ? "bg-blue-900/30" : "bg-blue-100"
        }`}
      >
        <span className="w-4 h-4 bg-red-500 rounded-full"></span>
        <span>Current</span>
      </div>
      <div
        className={`flex items-center space-x-2 p-2 rounded-lg ${
          isDarkMode ? "bg-purple-900/30" : "bg-purple-100"
        }`}
      >
        <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        <span>Review</span>
      </div>
      <div
        className={`flex items-center space-x-2 p-2 rounded-lg ${
          isDarkMode ? "bg-emerald-900/30" : "bg-emerald-100"
        }`}
      >
        <span className="w-4 h-4 bg-emerald-500 rounded-full"></span>
        <span>Answered</span>
      </div>
      <div
        className={`flex items-center space-x-2 p-2 rounded-lg ${
          isDarkMode ? "bg-gray-700/30" : "bg-gray-100"
        }`}
      >
        <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
        <span>Unanswered</span>
      </div>
    </div>

    {/* Scrollable Questions Container */}
    <div className="overflow-y-auto pr-2 h-[calc(100%-200px)] custom-scrollbar">
      <div className="grid grid-cols-5 gap-3">
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
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 font-medium ${
                isCurrent
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                  : isMarked
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                  : isSelected
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                  : isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>

    {/* Custom Scrollbar Styles */}
    <style jsx>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: ${isDarkMode ? "#1F2937" : "#F3F4F6"};
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: ${isDarkMode ? "#4B5563" : "#D1D5DB"};
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: ${isDarkMode ? "#6B7280" : "#9CA3AF"};
      }
    `}</style>
  </aside>
);

export default Sidebar;
