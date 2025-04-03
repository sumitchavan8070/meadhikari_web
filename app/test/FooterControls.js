// "use client";
// import React from "react";

// const FooterControls = ({
//   handleMarkForReview,
//   showEndModal,
//   setShowEndModal,
//   isDarkMode,
// }) => (
//   <footer
//     className={`p-6 flex justify-between items-center border-t ${
//       isDarkMode
//         ? "bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700"
//         : "bg-gradient-to-b from-gray-50 to-white border-gray-200"
//     }`}
//   >
//     <button
//       onClick={handleMarkForReview}
//       className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
//         showEndModal
//           ? "bg-gray-500 text-white"
//           : "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700"
//       } shadow-lg ${
//         showEndModal ? "shadow-gray-500/30" : "shadow-purple-500/30"
//       }`}
//     >
//       {showEndModal ? "Unmark Review" : "Mark for Review"}
//     </button>

//     <button
//       onClick={() => setShowEndModal(true)}
//       className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
//         isDarkMode
//           ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
//           : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
//       } shadow-lg shadow-red-500/30`}
//     >
//       Submit Test
//     </button>
//   </footer>
// );

// export default FooterControls;
"use client";
import React from "react";

const FooterControls = ({
  handleMarkForReview,
  isCurrentMarked, // New prop to check if current question is marked
  setShowEndModal,
  isDarkMode,
}) => (
  <footer
    className={`p-6 flex justify-between items-center border-t ${
      isDarkMode
        ? "bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700"
        : "bg-gradient-to-b from-gray-50 to-white border-gray-200"
    }`}
  >
    <button
      onClick={handleMarkForReview}
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
        isCurrentMarked
          ? "bg-gray-500 text-white"
          : "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700"
      } shadow-lg ${
        isCurrentMarked ? "shadow-gray-500/30" : "shadow-purple-500/30"
      }`}
    >
      {isCurrentMarked ? "Unmark Review" : "Mark for Review"}
    </button>

    <button
      onClick={() => setShowEndModal(true)}
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
        isDarkMode
          ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
          : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
      } shadow-lg shadow-red-500/30`}
    >
      Submit Test
    </button>
  </footer>
);

export default FooterControls;
