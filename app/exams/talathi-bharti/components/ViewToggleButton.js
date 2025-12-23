"use client";

import React, { memo } from "react";

const ViewToggleButton = memo(({ isGridView, onToggle, onPrev, onNext, showNav }) => {
  return (
    <div className="flex items-center space-x-3">
      {!isGridView && showNav && (
        <>
          <button
            className="p-2 rounded-full bg-white shadow-[0_4px_15px_rgba(5,90,171,0.15)] hover:shadow-[0_6px_20px_rgba(5,90,171,0.25)] transition-all duration-300 border border-[rgba(5,90,171,0.2)]"
            onClick={onPrev}
            aria-label="Previous papers"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-[#055AAB]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-white shadow-[0_4px_15px_rgba(5,90,171,0.15)] hover:shadow-[0_6px_20px_rgba(5,90,171,0.25)] transition-all duration-300 border border-[rgba(5,90,171,0.2)]"
            onClick={onNext}
            aria-label="Next papers"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-[#055AAB]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      <button
        onClick={onToggle}
        className="p-3 rounded-xl bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label={isGridView ? "Switch to carousel view" : "Switch to grid view"}
      >
        {isGridView ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        )}
      </button>
    </div>
  );
});

ViewToggleButton.displayName = "ViewToggleButton";

export default ViewToggleButton;


