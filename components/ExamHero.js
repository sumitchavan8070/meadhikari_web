"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuestions } from "@/Context/QuestionsContext";
import { useAuth } from "@/Context/AuthContext";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

const HeroExam = ({ onStartExam }) => {
  const router = useRouter();
  const { updatePaperMeta, setQuestions, questions } = useQuestions();
  const { user, openLoginPopup } = useAuth();

  const [examData, setExamData] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInterested, setIsInterested] = useState(false);
  const [accessPeriodExpired, setAccessPeriodExpired] = useState(false);

  // Fetch the latest live exam from API
  useEffect(() => {
    const fetchLatestLiveExam = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${BASE_URL}/live-question-papers/live/getall`
        );
        const liveExams = response.data;

        if (liveExams.length > 0) {
          // Get the most recent live exam (sorted by startDate)
          const latestExam = liveExams[0];
          setExamData(latestExam);

          // Check if access period has expired
          if (latestExam.testAccessUpto) {
            const now = new Date();
            const accessUpto = new Date(latestExam.testAccessUpto);
            setAccessPeriodExpired(now > accessUpto);
          }

          // Check interest status if user is logged in
          if (user) {
            const interestResponse = await axios.get(
              `${BASE_URL}/live-question-papers/${latestExam._id}/interest?userId=${user._id}`
            );
            setIsInterested(interestResponse.data.isInterested);
          }
        }

        setIsLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch live exams");
        setIsLoading(false);
      }
    };

    fetchLatestLiveExam();
  }, [user]);

  // Animation effect on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Format the exam date for display
  const formattedDate = useMemo(() => {
    if (!examData?.startDate) return "Date unavailable";
    try {
      return new Date(examData.startDate).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch (err) {
      console.error("Date parsing error:", err);
      return "Date unavailable";
    }
  }, [examData?.startDate]);

  // Format the access period end date for display
  const formattedAccessUpto = useMemo(() => {
    if (!examData?.testAccessUpto) return null;
    try {
      return new Date(examData.testAccessUpto).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    } catch (err) {
      console.error("Date parsing error:", err);
      return null;
    }
  }, [examData?.testAccessUpto]);

  // Calculate time remaining until exam starts
  const calculateTimeLeft = useCallback(() => {
    if (!examData?.startDate)
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    try {
      const now = new Date();
      const examStart = new Date(examData.startDate);

      if (isNaN(examStart.getTime())) {
        throw new Error("Invalid date format");
      }

      const difference = examStart - now;

      if (difference <= 0) {
        // When timer reaches zero, update exam status
        setExamData((prev) => ({
          ...prev,
          isLive: true,
          isExamTypeIsLiveExam: true,
        }));
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } catch (err) {
      setError("Error calculating time remaining");
      console.error(err);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [examData?.startDate]);

  // Timer effect
  useEffect(() => {
    if (!examData) return;

    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [calculateTimeLeft, examData]);

  // Check if exam is active
  const isTestActive = useMemo(() => {
    if (accessPeriodExpired) return false;
    return examData?.isLive || false;
  }, [examData?.isLive, accessPeriodExpired]);

  // Format duration for display
  const formattedDuration = useMemo(() => {
    if (!examData?.duration) return "";
    const hours = Math.floor(examData.duration / 60);
    const minutes = examData.duration % 60;
    return `${hours > 0 ? `${hours}h ` : ""}${
      minutes > 0 ? `${minutes}m` : ""
    }`.trim();
  }, [examData?.duration]);

  // Handle exam start
  const handleStartExam = useCallback(async () => {
    if (!isTestActive || !examData) return;
    if (!user) {
      openLoginPopup();
      return;
    }
    try {
      setIsLoading(true);
      if (typeof onStartExam === "function") {
        await onStartExam(examData.questions);
      } else {
        setQuestions(examData.questions);
        router.push("/test");
      }
    } catch (err) {
      setError("Failed to start exam. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [isTestActive, examData, onStartExam, router, setQuestions]);

  // Handle interested button click
  const handleInterestedClick = useCallback(async () => {
    if (!user) {
      openLoginPopup();
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(
        `${BASE_URL}/live-question-papers/${examData._id}/interest`,
        {
          userId: user._id,
        }
      );
      setIsInterested(!isInterested);
    } catch (err) {
      setError("Failed to register interest");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [user, openLoginPopup, examData?._id, isInterested]);

  // Timer component
  const TimerBlock = ({ value, label }) => (
    <div className="text-center px-3 py-2 sm:px-4 sm:py-3 bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md transform hover:scale-105">
      <div className="text-xl sm:text-2xl font-bold text-blue-600">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );

  // Determine button text and state
  const buttonText = isTestActive
    ? "Start Test"
    : accessPeriodExpired
    ? "Test Access Expired"
    : isInterested
    ? "Test Will Begin Soon..."
    : "I'm Interested";

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center justify-between animate-fadeIn">
          <span>{error}</span>
          <button
            onClick={() => window.location.reload()}
            className="text-red-800 hover:text-red-900"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!examData) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center justify-between animate-fadeIn">
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="text-red-800 hover:text-red-900"
            aria-label="Dismiss error"
          >
            ✕
          </button>
        </div>
      )}

      <div
        className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Column - Larger Image with animation - Hidden on mobile */}
        <div className="hidden md:flex w-full lg:w-2/5 justify-center lg:justify-start">
          <div className="relative w-[580px] h-[580px] md:w-[580px] md:h-[580px] transition-all duration-500 hover:scale-105 animate-float">
            <Image
              src="/marklady.svg"
              alt="Exam illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-3/5 animate-slideUp">
          {/* Category Tag with Inline Status */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-100 transform hover:scale-105">
              <span className="text-sm font-medium text-blue-600">
                {examData.category}
              </span>
            </div>
            {accessPeriodExpired ? (
              <div className="bg-red-100 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-red-800">
                  Access Expired
                </span>
              </div>
            ) : examData.isLive ? (
              <div className="bg-emerald-100 px-3 py-1 rounded-full animate-pulse">
                <span className="text-xs font-medium text-emerald-800">
                  Live Exam
                </span>
              </div>
            ) : (
              <div className="bg-amber-100 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-amber-800">
                  Upcoming Exam
                </span>
              </div>
            )}
          </div>

          {/* Exam Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            {examData.examName}
          </h1>

          {/* Exam Date */}
          <p className="text-gray-500 mb-3">
            Scheduled for: <span className="font-medium">{formattedDate}</span>
          </p>

          {/* Test Access Period - Only show for Live Exams */}
          {examData.isExamTypeIsLiveExam && formattedAccessUpto && (
            <div
              className={`mb-6 p-3 rounded-lg ${
                accessPeriodExpired
                  ? "bg-red-50 text-red-700"
                  : "bg-blue-50 text-blue-700"
              }`}
            >
              <h3 className="text-sm font-semibold mb-1">
                {accessPeriodExpired
                  ? "Test Access Period Expired"
                  : "Test Access Period"}
              </h3>
              <p className="text-sm">
                {accessPeriodExpired
                  ? `This test was available until ${formattedAccessUpto}`
                  : `You can take this test until ${formattedAccessUpto}`}
              </p>
            </div>
          )}

          {/* Timer Section */}
          {!accessPeriodExpired && !examData.isLive && (
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 mb-6 sm:mb-8 transition-all duration-300 hover:shadow-md transform hover:translate-y-[-2px]">
              <h2 className="text-sm font-medium text-gray-700 mb-3">
                Time Remaining
              </h2>
              <div className="flex items-center gap-1 sm:gap-2">
                {timeLeft.days > 0 && (
                  <>
                    <TimerBlock value={timeLeft.days} label="DAYS" />
                    <div className="text-xl text-gray-300">:</div>
                  </>
                )}
                <TimerBlock value={timeLeft.hours} label="HOURS" />
                <div className="text-xl text-gray-300">:</div>
                <TimerBlock value={timeLeft.minutes} label="MINUTES" />
                <div className="text-xl text-gray-300">:</div>
                <TimerBlock value={timeLeft.seconds} label="SECONDS" />
              </div>
            </div>
          )}

          {/* Exam Details */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium">{formattedDuration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Questions</p>
                <p className="font-medium">{examData.totalQuestions || 0}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Maximum Marks</p>
                <p className="font-medium">{examData.maxMarks}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Passing Score</p>
                <p className="font-medium">{examData.passingScore}</p>
              </div>
            </div>
          </div>

          {/* Main Button */}
          <button
            onClick={isTestActive ? handleStartExam : handleInterestedClick}
            disabled={
              isLoading ||
              (isInterested && !isTestActive) ||
              accessPeriodExpired
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-full px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
              isLoading
                ? "bg-blue-100 text-blue-800 cursor-not-allowed"
                : accessPeriodExpired
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : isTestActive
                ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-lg transform hover:-translate-y-1"
                : isInterested
                ? "bg-blue-50 text-blue-600 cursor-default"
                : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg transform hover:-translate-y-1"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </div>
            ) : (
              <>
                <span className="font-medium">{buttonText}</span>
                {isTestActive && !isLoading && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? "transform translate-x-1" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                )}
              </>
            )}
          </button>

          {/* Additional information */}
          {isTestActive && (
            <p className="text-xs text-gray-500 mt-3 text-center">
              Make sure you have a stable internet connection before starting
              the exam
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const style = document.createElement("style");
style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    .animate-float {
      animation: float 2s ease-in-out infinite;
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    .animate-slideUp {
      animation: slideUp 0.7s ease-out;
    }
  `;
document.head.appendChild(style);

export default HeroExam;
