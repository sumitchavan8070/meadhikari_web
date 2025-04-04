"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toPng } from "html-to-image";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { FaSun, FaMoon, FaHome, FaDownload, FaTimes } from "react-icons/fa";

const Result = ({ results, formatTime, questions, onClose }) => {
  const router = useRouter();
  const resultRef = useRef(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!results) return null;

  const handleExportAsPng = async () => {
    if (!resultRef.current) return;

    try {
      const pngData = await toPng(resultRef.current, {
        cacheBust: true,
        backgroundColor: isDarkTheme ? "#111827" : "#ffffff",
      });
      const link = document.createElement("a");
      link.href = pngData;
      link.download = "meadhikari-test-results.png";
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
        backgroundColor: [
          "#3B82F6", // Blue
          "#EF4444", // Red
          "#10B981", // Emerald
        ],
        borderColor: isDarkTheme ? "#1F2937" : "#E5E7EB",
        borderWidth: 1,
      },
    ],
  };

  const getUpdatedContentHtml = (html) => {
    if (!html) return "";

    const baseUrl = "https://file-hosting-app.vercel.app";

    return html
      .replace(/<img\s+src="([^"]+)"(.*?)>/g, (match, path, rest) => {
        if (path.startsWith("http") || path.startsWith("data:image")) {
          return `<img src="${path}" ${rest}>`;
        }
        return `<img src="${baseUrl}${path}" ${rest}>`;
      })
      .replace(
        /<table/g,
        `<table style="width: 100%; border-collapse: collapse; margin: 16px 0; ${
          isDarkTheme ? "border-color: #374151;" : "border-color: #e5e7eb;"
        }"`
      )
      .replace(
        /<th/g,
        `<th style="border: 1px solid ${
          isDarkTheme ? "#374151" : "#e5e7eb"
        }; padding: 8px; text-align: left; background-color: ${
          isDarkTheme ? "#1f2937" : "#f3f4f6"
        }; font-weight: bold;"`
      )
      .replace(
        /<td/g,
        `<td style="border: 1px solid ${
          isDarkTheme ? "#374151" : "#e5e7eb"
        }; padding: 8px; text-align: left;"`
      );
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isDarkTheme ? "bg-gray-900/95" : "bg-gray-900/50"
      } z-50 select-none p-4`}
      style={{ userSelect: "none" }}
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        ref={resultRef}
        className={`relative p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto custom-scrollbar ${
          isDarkTheme
            ? "bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100"
            : "bg-gradient-to-b from-gray-50 to-white text-gray-800"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full ${
            isDarkTheme
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-all duration-200`}
        >
          <FaTimes className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Mobile Action Buttons (Top) */}
        <div className="sm:hidden flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm ${
              isDarkTheme
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {isDarkTheme ? <FaSun /> : <FaMoon />}
            <span>{isDarkTheme ? "Light" : "Dark"}</span>
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm"
          >
            <FaHome />
            <span>Home</span>
          </button>
          <button
            onClick={handleExportAsPng}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm"
          >
            <FaDownload />
            <span>Export</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            Meadhikari Test Results
          </h2>
          <p
            className={`mt-1 sm:mt-2 text-xs sm:text-sm md:text-base ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Empowering your preparation, one test at a time.
          </p>
        </div>

        {/* Performance Summary */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center">
            {/* Left Column (Performance + Buttons) */}
            <div className="w-full lg:w-1/2">
              {/* Performance Bar */}
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <span className="text-sm sm:text-base font-medium">
                  Performance:
                </span>
                <span className="text-sm sm:text-base font-bold text-blue-500">
                  {performancePercentage}%
                </span>
              </div>
              <div
                className={`w-full h-2 sm:h-3 rounded-full ${
                  isDarkTheme ? "bg-gray-700" : "bg-gray-200"
                } overflow-hidden`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ width: `${performancePercentage}%` }}
                />
              </div>

              {/* Desktop Buttons (Below Performance Bar) */}
              <div className="hidden sm:flex justify-between gap-3 mt-4">
                <button
                  onClick={() => setIsDarkTheme(!isDarkTheme)}
                  className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg ${
                    isDarkTheme
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  } transition-all duration-200`}
                >
                  {isDarkTheme ? <FaSun /> : <FaMoon />}
                  <span className="text-sm">
                    {isDarkTheme ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm hover:from-blue-600 hover:to-cyan-500 transition-all duration-200"
                >
                  <FaHome />
                  <span>Go to Home</span>
                </button>
                <button
                  onClick={handleExportAsPng}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  <FaDownload />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Right Column (Pie Chart) */}
            <div className="w-full lg:w-1/2 mt-4 sm:mt-0">
              <h3 className="text-center text-sm sm:text-base font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Performance Breakdown
              </h3>
              <div
                className="h-48 sm:h-56 md:h-64 mx-auto"
                style={{
                  maxWidth: "100%",
                  width: windowWidth < 640 ? "100%" : "80%",
                }}
              >
                <Pie
                  data={chartData}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      legend: {
                        position: windowWidth < 640 ? "bottom" : "right",
                        labels: {
                          color: isDarkTheme ? "#E5E7EB" : "#1F2937",
                          padding: 15,
                          font: {
                            size: windowWidth < 640 ? 10 : 12,
                          },
                          boxWidth: 12,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-400">
            Test Summary
          </h3>
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg ${
              isDarkTheme ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {[
              { label: "Total Questions", value: results.totalQuestions },
              { label: "Correct Answers", value: results.correctAnswers },
              { label: "Wrong Answers", value: results.wrongAnswers },
              { label: "Unattempted", value: results.unattempted },
              { label: "Total Marks", value: results.totalMarks },
              { label: "Time Taken", value: formatTime(results.timeTaken) },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-2 sm:p-3 rounded-md ${
                  isDarkTheme ? "bg-gray-700" : "bg-white"
                } shadow-sm`}
              >
                <p className="text-xs sm:text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className="text-sm sm:text-base font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Question Review */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">
            Question Review
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {questions.map((question, index) => {
              const selectedOptionIndex =
                results.selectedAnswers[index] || "N/A";
              const correctOptionIndex = parseInt(
                question.answer.replace("option", "")
              );
              const isCorrect = selectedOptionIndex === correctOptionIndex;
              const isUnattempted = selectedOptionIndex === "N/A";
              const mark = isCorrect ? 1 : 0;

              return (
                <div
                  key={index}
                  className={`p-3 sm:p-4 rounded-lg border ${
                    isUnattempted
                      ? isDarkTheme
                        ? "border-gray-700 bg-gray-800"
                        : "border-gray-300 bg-gray-100"
                      : isCorrect
                      ? isDarkTheme
                        ? "border-blue-700 bg-blue-900/30"
                        : "border-blue-300 bg-blue-100"
                      : isDarkTheme
                      ? "border-red-700 bg-red-900/30"
                      : "border-red-300 bg-red-100"
                  }`}
                >
                  <div className="flex flex-wrap justify-between items-center mb-2 sm:mb-3 gap-1 sm:gap-2">
                    <span className="text-sm sm:text-base font-bold">
                      Q{index + 1}
                    </span>
                    <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm">
                      <span>
                        <span className="font-semibold text-emerald-500">
                          Correct:
                        </span>{" "}
                        {correctOptionIndex}
                      </span>
                      <span>
                        <span className="font-semibold text-blue-500">
                          Chosen:
                        </span>{" "}
                        {selectedOptionIndex !== "N/A"
                          ? selectedOptionIndex
                          : "—"}
                      </span>
                      <span
                        className={`font-bold ${
                          mark ? "text-emerald-500" : "text-red-500"
                        }`}
                      >
                        Mark: {mark}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`mb-2 sm:mb-3 text-sm sm:text-base ${
                      isDarkTheme ? "text-gray-300" : "text-gray-800"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: getUpdatedContentHtml(question.question),
                    }}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["option1", "option2", "option3", "option4"].map(
                      (optKey, optIdx) => {
                        const isSelected = selectedOptionIndex === optIdx + 1;
                        const isCorrectAnswer =
                          correctOptionIndex === optIdx + 1;

                        return (
                          <div
                            key={optKey}
                            className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm ${
                              isSelected
                                ? isCorrectAnswer
                                  ? "border-emerald-500 bg-emerald-500/10"
                                  : "border-red-500 bg-red-500/10"
                                : isCorrectAnswer
                                ? "border-emerald-500 bg-emerald-500/10"
                                : isDarkTheme
                                ? "border-gray-700 bg-gray-800"
                                : "border-gray-300 bg-gray-100"
                            }`}
                            dangerouslySetInnerHTML={{
                              __html: getUpdatedContentHtml(question[optKey]),
                            }}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
            margin: 8px 0;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: ${isDarkTheme ? "#4B5563" : "#9CA3AF"};
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: ${isDarkTheme ? "#6B7280" : "#6B7280"};
          }
        `}</style>
      </div>
    </div>
  );
};

export default Result;
