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
    className={`flex flex-col md:flex-row justify-between items-center p-4 ${
      isDarkMode ? "bg-gray-800" : "bg-gray-100"
    }`}
  >
    <div className="flex items-center mb-4 md:mb-0">
      <button
        onClick={toggleSidebar}
        className={`p-2 ${
          isDarkMode ? "bg-gray-600" : "bg-gray-500"
        } text-white rounded md:hidden`}
      >
        <FaBars />
      </button>
      <h1
        className={`ml-4 text-base md:text-lg font-bold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Meadhikari Live Test
      </h1>
    </div>

    <div className="flex items-center space-x-4">
      <div
        className={`text-sm md:text-lg ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Time Left: {timer}
      </div>
      <button
        onClick={() => document.documentElement.requestFullscreen()}
        className="bg-blue-600 text-white px-2 py-1 rounded"
      >
        Fullscreen
      </button>
      <button
        onClick={togglePause}
        className={`px-2 py-1 rounded ${
          paused ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {paused ? "Resume" : "Pause"}
      </button>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded ${
          isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
        }`}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  </header>
);

export default Header;
