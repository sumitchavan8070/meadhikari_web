"use client";
import { useQuestions } from "@/Context/QuestionsContext";
import React from "react";
import { FaBars, FaSun, FaMoon, FaImage } from "react-icons/fa";

const Header = ({
  toggleSidebar,
  toggleDarkMode,
  isDarkMode,
  timer,
  togglePause,
  paused,
}) => {
  const { paperMeta, isLoading } = useQuestions();

  return (
    <header
      className={`flex flex-col md:flex-row justify-between items-center p-4 md:p-6 border-b ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700"
          : "bg-gradient-to-r from-gray-50 to-white border-gray-200"
      }`}
    >
      {/* Left Section: Logo + Title */}
      <div className="flex items-center w-full md:w-auto md:min-w-[300px] lg:min-w-[400px]">
        {/* Hamburger Button (Mobile Only) */}
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

        {/* Logo and Title */}
        <div className="flex items-center flex-1 min-w-0">
          {/* Responsive Logo */}
          {isLoading ? (
            <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 animate-pulse bg-gray-300 dark:bg-gray-600 rounded-full mr-3" />
          ) : paperMeta.logo ? (
            <img
              src={paperMeta.logo}
              alt="Paper Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14  object-fit mr-3 border-2 border-transparent hover:border-blue-400 transition-all"
              onError={(e) => {
                e.target.src = "/images/logo.png"; // Fallback logo
                e.target.className =
                  "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all";
              }}
            />
          ) : (
            <img
              src="/images/logo.png" // Default local logo
              alt="Default Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all"
            />
          )}

          {/* Title Section - No truncation on desktop */}
          <div className="flex flex-col min-w-0">
            <h1
              className={`text-lg md:text-xl font-bold ${
                isDarkMode ? "text-blue-300" : "text-blue-600"
              } truncate md:whitespace-normal md:overflow-visible`}
            >
              {paperMeta.name || "Meadhikari Live Test"}
            </h1>
            {(paperMeta.year || paperMeta.category) && (
              <div
                className={`text-xs md:text-sm ${
                  isDarkMode ? "text-blue-200/80" : "text-blue-600/80"
                } truncate md:whitespace-normal md:overflow-visible`}
              >
                {paperMeta.year && <span>{paperMeta.year}</span>}
                {paperMeta.year && paperMeta.category && <span> | </span>}
                {paperMeta.category && <span>{paperMeta.category}</span>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Timer and Controls */}
      <div className="flex items-center space-x-4 mt-3 md:mt-0">
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
};

export default Header;
