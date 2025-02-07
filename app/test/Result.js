"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toPng } from "html-to-image";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { FaBars, FaSun, FaMoon } from "react-icons/fa"; // Import icons

const Result = ({ results, formatTime, questions, onClose }) => {
  const router = useRouter();
  const resultRef = useRef(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  if (!results) return null;

  const handleExportAsPng = async () => {
    if (!resultRef.current) return;

    try {
      const pngData = await toPng(resultRef.current, { cacheBust: true });
      const link = document.createElement("a");
      link.href = pngData;
      link.download = "test-results.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to export results as PNG:", error);
    }
  };

  const performancePercentage = Math.round(
    (results.correctAnswers / results.totalQuestions) * 100
  );

  const chartData = {
    labels: ["Correct", "Wrong", "Unattempted"],
    datasets: [
      {
        data: [
          results.correctAnswers,
          results.wrongAnswers,
          results.unattempted,
        ],
        backgroundColor: ["#3B82F6", "#EF4444", "#10B981"], // Soft blue, soft red, soft green
        hoverBackgroundColor: ["#2563EB", "#DC2626", "#059669"], // Richer tones for hover
      },
    ],
  };

  const getUpdatedContentHtml = (html) => {
    if (!html) return "";

    const baseUrl = "https://file-hosting-app.vercel.app"; // Ensure this is correct

    return html
      .replace(/<img\s+src="([^"]+)"(.*?)>/g, (match, path, rest) => {
        if (path.startsWith("http") || path.startsWith("data:image")) {
          return `<img src="${path}" ${rest}>`;
        }
        return `<img src="${baseUrl}${path}" ${rest}>`;
      })
      .replace(
        /<table/g,
        '<table style="width: 100%; border-collapse: collapse; margin-top: 10px;"'
      )
      .replace(
        /<th/g,
        '<th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f4f4f4; font-weight: bold;"'
      )
      .replace(
        /<td/g,
        '<td style="border: 1px solid #ddd; padding: 8px; text-align: left;"'
      )
      .replace(/<tr/g, '<tr style="border-bottom: 1px solid #ddd;"');
  };

  return (
    // <div
    //   className={`fixed inset-0 flex justify-center items-center ${
    //     isDarkTheme ? "bg-gray-800" : "bg-gray-900 bg-opacity-50"
    //   } z-50`}
    // >
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isDarkTheme ? "bg-gray-800" : "bg-gray-900 bg-opacity-50"
      } z-50 select-none`} // Prevent text selection
      style={{ userSelect: "none" }} // Extra safeguard
      onCopy={(e) => e.preventDefault()} // Prevent copy
      onContextMenu={(e) => e.preventDefault()} // Disable right-click
      onKeyDown={(e) => {
        if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "u")) {
          e.preventDefault();
        }
      }}
    >
      <div
        ref={resultRef}
        className={`p-6 rounded-lg shadow-lg w-full max-w-6xl max-h-screen overflow-y-auto ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2
            className={`font-bold ${
              isDarkTheme ? "text-gray-100" : "text-gray-800"
            } text-lg sm:text-xl md:text-2xl lg:text-3xl`}
          >
            Meadhikari - Test Results
          </h2>
          <p
            className={`font-medium ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            } text-xs sm:text-sm md:text-base`}
          >
            &quot;Empowering your preparation, one test at a time.&quot;
          </p>
        </div>

        {/* Performance Bar */}
        <div className="mb-4 md:mb-6">
          <p className="text-sm md:text-base">Performance:</p>
          <div className="w-full bg-gray-300 rounded-full h-3 md:h-4">
            <div
              className="bg-indigo-600 h-3 md:h-4 rounded-full"
              style={{ width: `${performancePercentage}%` }}
            />
          </div>
          <p className="text-center mt-1 text-indigo-600 font-semibold">
            {performancePercentage}%
          </p>
        </div>

        {/* Responsive Content Layout */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
          {/* Results Table */}
          <div className="w-full md:w-1/2 max-h-64 overflow-y-auto">
            <table className="w-full text-sm border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-2 py-1 text-left text-gray-600">
                    Category
                  </th>
                  <th className="border border-gray-300 px-2 py-1 text-left text-gray-600">
                    Count
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">
                    Total Questions
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {results.totalQuestions}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">
                    Correct Answers
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {results.correctAnswers}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">
                    Wrong Answers
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {results.wrongAnswers}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">
                    Unattempted
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {results.unattempted}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">
                    Total Marks
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {results.totalMarks}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">
                    Time Taken
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {formatTime(results.timeTaken)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Performance Breakdown Chart */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-sm">
              <h3 className="text-base font-semibold mb-2 md:mb-4 text-center text-gray-700">
                Performance Breakdown
              </h3>
              <Pie data={chartData} />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 md:mt-6 flex justify-between items-center">
          <button
            onClick={() => setIsDarkTheme((prev) => !prev)}
            className={`p-2 rounded ${
              isDarkTheme ? "bg-yellow-300" : "bg-gray-600 text-white"
            }`}
          >
            {isDarkTheme ? (
              <FaSun className="h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <FaMoon className="h-5 w-5 md:h-6 md:w-6" />
            )}
          </button>
          <div className="flex gap-2 md:gap-4">
            <button
              onClick={() => {
                onClose();
                router.push("/");
              }}
              className="bg-indigo-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-indigo-700"
            >
              Go to Home
            </button>
            <button
              onClick={handleExportAsPng}
              className="bg-teal-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-teal-700"
            >
              Export as PNG
            </button>
          </div>
        </div>

        {/* Paper Summary */}
        <h3
          className={`text-lg font-semibold text-center mt-6 mb-4 ${
            isDarkTheme ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Paper Summary
        </h3>
        <div
          className={`space-y-4 max-h-90 overflow-y-auto p-2 border rounded-lg ${
            isDarkTheme
              ? "border-gray-700 bg-gray-800 text-gray-300"
              : "border-gray-300 bg-white text-gray-800"
          }`}
        >
          {questions.map((question, index) => {
            const selectedOptionIndex = results.selectedAnswers[index] || "N/A";
            const correctOptionIndex = parseInt(
              question.answer.replace("option", "")
            );
            const isCorrect = selectedOptionIndex === correctOptionIndex;
            const isUnattempted = selectedOptionIndex === "N/A";
            const mark = isCorrect ? 1 : 0;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isUnattempted
                    ? isDarkTheme
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : isCorrect
                    ? isDarkTheme
                      ? "bg-blue-800"
                      : "bg-blue-100"
                    : isDarkTheme
                    ? "bg-red-800"
                    : "bg-red-100"
                }`}
              >
                {/* Correct Option, Chosen Option, and Mark */}
                <p className="font-semibold text-sm mb-2">
                  <span className="text-indigo-400">Correct Option No:</span>{" "}
                  {correctOptionIndex} |{" "}
                  <span className="text-blue-400">Chosen Option No:</span>{" "}
                  {selectedOptionIndex !== "N/A"
                    ? selectedOptionIndex
                    : "Unattempted"}{" "}
                  |{" "}
                  <span
                    className={`font-bold ${
                      mark ? "text-green" : "text-red-400"
                    }`}
                  >
                    Mark: {mark}
                  </span>
                </p>

                {/* Question Text */}
                <p
                  className={`font-medium ${
                    isDarkTheme ? "text-gray-200" : "text-gray-800"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: getUpdatedContentHtml(question.question),
                  }}
                />

                {/* Answer Options */}
                <ul className="mt-2 space-y-1">
                  {["option1", "option2", "option3", "option4"].map(
                    (optKey, optIdx) => {
                      const isSelected = selectedOptionIndex === optIdx + 1;
                      const isCorrectAnswer = correctOptionIndex === optIdx + 1;

                      return (
                        <li
                          key={optKey}
                          className={`p-2 rounded-md ${
                            isSelected
                              ? isCorrectAnswer
                                ? isDarkTheme
                                  ? "bg-green text-white"
                                  : "bg-green text-white"
                                : isDarkTheme
                                ? "bg-red-700 text-white"
                                : "bg-red-500 text-white"
                              : isCorrectAnswer
                              ? isDarkTheme
                                ? "bg-blue-700 text-white"
                                : "bg-blue-300"
                              : isDarkTheme
                              ? "bg-gray-600 text-gray-200"
                              : "bg-gray-100"
                          }`}
                          dangerouslySetInnerHTML={{
                            __html: getUpdatedContentHtml(question[optKey]),
                          }}
                        />
                      );
                    }
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Result;
