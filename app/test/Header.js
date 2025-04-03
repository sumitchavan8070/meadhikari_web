// "use client";
// import React from "react";
// import { FaBars, FaSun, FaMoon } from "react-icons/fa";

// const Header = ({
//   toggleSidebar,
//   toggleDarkMode,
//   isDarkMode,
//   timer,
//   togglePause,
//   paused,
// }) => (
//   <header
//     className={`flex flex-col md:flex-row justify-between items-center p-4 ${
//       isDarkMode ? "bg-gray-800" : "bg-gray-100"
//     }`}
//   >
//     <div className="flex items-center mb-4 md:mb-0">
//       <button
//         onClick={toggleSidebar}
//         className={`p-2 ${
//           isDarkMode ? "bg-gray-600" : "bg-gray-500"
//         } text-white rounded md:hidden`}
//       >
//         <FaBars />
//       </button>
//       <h1
//         className={`ml-4 text-base md:text-lg font-bold ${
//           isDarkMode ? "text-white" : "text-black"
//         }`}
//       >
//         Meadhikari Live Test
//       </h1>
//     </div>

//     <div className="flex items-center space-x-4">
//       <div
//         className={`text-sm md:text-lg ${
//           isDarkMode ? "text-white" : "text-black"
//         }`}
//       >
//         Time Left: {timer}
//       </div>
//       <button
//         onClick={() => document.documentElement.requestFullscreen()}
//         className="bg-blue-600 text-white px-2 py-1 rounded"
//       >
//         Fullscreen
//       </button>
//       <button
//         onClick={togglePause}
//         className={`px-2 py-1 rounded ${
//           paused ? "bg-green-500" : "bg-yellow-500"
//         }`}
//       >
//         {paused ? "Resume" : "Pause"}
//       </button>
//       <button
//         onClick={toggleDarkMode}
//         className={`p-2 rounded ${
//           isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
//         }`}
//       >
//         {isDarkMode ? <FaSun /> : <FaMoon />}
//       </button>
//     </div>
//   </header>
// );

// export default Header;
"use client";
import React from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Header = ({
  toggleSidebar,
  toggleDarkMode,
  isDarkMode,
  timer,
  togglePause,
  paused,
}) => (
  <header
    className={`flex flex-col md:flex-row justify-between items-center p-4 md:p-6 border-b ${
      isDarkMode
        ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700"
        : "bg-gradient-to-r from-gray-50 to-white border-gray-200"
    }`}
  >
    <div className="flex items-center mb-4 md:mb-0">
      <button
        onClick={toggleSidebar}
        className={`p-2 mr-4 rounded-lg md:hidden ${
          isDarkMode
            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        } transition-all duration-200`}
      >
        <FaBars />
      </button>
      <h1
        className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-400 to-cyan-300"
            : "bg-gradient-to-r from-blue-600 to-cyan-500"
        }`}
      >
        Meadhikari Live Test
      </h1>
    </div>

    <div className="flex items-center space-x-4">
      <div
        className={`text-sm md:text-base font-medium ${
          isDarkMode ? "text-blue-200" : "text-blue-600"
        }`}
      >
        Time Left: <span className="font-bold">{timer}</span>
      </div>

      <button
        onClick={() => document.documentElement.requestFullscreen()}
        className={`px-3 py-1.5 rounded-lg font-medium ${
          isDarkMode
            ? "bg-blue-700 text-white hover:bg-blue-600"
            : "bg-blue-600 text-white hover:bg-blue-500"
        } transition-all duration-200 shadow-md ${
          isDarkMode ? "shadow-blue-900/50" : "shadow-blue-500/30"
        }`}
      >
        Fullscreen
      </button>

      <button
        onClick={togglePause}
        className={`px-3 py-1.5 rounded-lg font-medium ${
          paused
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : "bg-yellow-500 text-gray-800 hover:bg-yellow-400"
        } transition-all duration-200 shadow-md ${
          paused ? "shadow-emerald-500/30" : "shadow-yellow-500/30"
        }`}
      >
        {paused ? "Resume" : "Pause"}
      </button>

      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-lg ${
          isDarkMode
            ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            : "bg-gray-700 text-white hover:bg-gray-600"
        } transition-all duration-200 shadow-md ${
          isDarkMode ? "shadow-yellow-500/50" : "shadow-gray-700/50"
        }`}
      >
        {isDarkMode ? (
          <FaSun className="text-lg" />
        ) : (
          <FaMoon className="text-lg" />
        )}
      </button>
    </div>
  </header>
);

export default Header;
