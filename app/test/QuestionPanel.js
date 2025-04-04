"use client";
import { useState } from "react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const QuestionPanel = ({
  currentQuestion,
  questions,
  selectedAnswers,
  handleOptionSelect,
  isDarkMode,
  handleNextQuestion,
  handlePrevQuestion,
}) => {
  const [fontSize, setFontSize] = useState(20);

  const getUpdatedContentHtml = (html) => {
    if (!html) return "";

    const baseUrl = "https://file-hosting-app.vercel.app";

    return html
      .replace(/<img\s+src="([^"]+)"(.*?)>/g, (match, path, rest) => {
        if (path.startsWith("http") || path.startsWith("data:image")) {
          return `<img src="${path}" style="max-width: 100%; height: auto;" ${rest}>`;
        }
        return `<img src="${baseUrl}${path}" style="max-width: 100%; height: auto;" ${rest}>`;
      })
      .replace(
        /<table/g,
        `<table style="width: 100%; border-collapse: collapse; margin: 12px 0; ${
          isDarkMode ? "border-color: #374151;" : "border-color: #e5e7eb;"
        }"`
      )
      .replace(
        /<th/g,
        `<th style="border: 1px solid ${
          isDarkMode ? "#374151" : "#e5e7eb"
        }; padding: 6px; text-align: left; background-color: ${
          isDarkMode ? "#1f2937" : "#f3f4f6"
        }; font-weight: bold;"`
      )
      .replace(
        /<td/g,
        `<td style="border: 1px solid ${
          isDarkMode ? "#374151" : "#e5e7eb"
        }; padding: 6px; text-align: left;"`
      );
  };

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));

  const questionContent = questions[currentQuestion]?.question;

  return (
    <section
      className={`flex-1 p-4 overflow-y-auto flex flex-col ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      } custom-scrollbar`}
      style={{
        userSelect: "none",
      }}
    >
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
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

      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={decreaseFontSize}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-blue-400"
            } transition-all duration-200`}
            aria-label="Decrease font size"
          >
            <FaMinus className="w-3 h-3" />
          </button>
          <button
            onClick={increaseFontSize}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-blue-400"
            } transition-all duration-200`}
            aria-label="Increase font size"
          >
            <FaPlus className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Question Content */}
      <div
        className="mb-4 p-3 rounded-lg flex-1"
        style={{
          fontSize: `${fontSize}px`,
          whiteSpace: "pre-wrap",
          background: "transparent", // Fixed: Transparent background
        }}
      >
        {/<[a-z][\s\S]*>/i.test(questionContent) ? (
          <div
            dangerouslySetInnerHTML={{
              __html: getUpdatedContentHtml(questionContent),
            }}
          />
        ) : (
          questionContent?.split("\n").map((line, index) => (
            <p key={index} className="mb-2 last:mb-0">
              {line}
            </p>
          ))
        )}
      </div>

      {/* Options List */}
      <ul className="space-y-2 mb-4">
        {["option1", "option2", "option3", "option4"].map(
          (optionKey, index) => {
            const optionContent = questions[currentQuestion]?.[optionKey];
            const isSelected = selectedAnswers[currentQuestion] === index + 1;

            return (
              <li
                key={index}
                onClick={() => handleOptionSelect(index + 1)}
                className={`flex items-start space-x-2 cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                  isSelected
                    ? isDarkMode
                      ? "bg-blue-900/50 border border-blue-500 focus:ring-2 focus:ring-blue-500"
                      : "bg-blue-100/80 border border-blue-400 focus:ring-2 focus:ring-blue-400"
                    : isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                    : "bg-white hover:bg-gray-100 border border-gray-200" // Fixed: White background in light mode
                }`}
                style={{ fontSize: `${fontSize}px` }}
                tabIndex={0}
              >
                <div
                  className={`flex items-center justify-center w-5 h-5 mt-0.5 rounded-full border ${
                    isSelected
                      ? "bg-blue-500 border-blue-500"
                      : isDarkMode
                      ? "border-gray-500"
                      : "border-gray-400"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  {/<[a-z][\s\S]*>/i.test(optionContent) ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: getUpdatedContentHtml(optionContent),
                      }}
                    />
                  ) : (
                    <span>{optionContent}</span>
                  )}
                </div>
              </li>
            );
          }
        )}
      </ul>

      {/* Navigation Buttons - Bottom */}
      <div className="sticky bottom-0 mt-6 flex justify-between bg-transparent mx-5">
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
          className={`flex items-center px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
            currentQuestion === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-lg"
          } ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          <FaChevronLeft className="mr-2" />
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length - 1}
          className={`flex items-center px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
            currentQuestion === questions.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-lg"
          } ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white"
              : "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white"
          }`}
        >
          Next
          <FaChevronRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default QuestionPanel;
