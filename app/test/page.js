"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsRow from "./StatsRow";
import QuestionPanel from "./QuestionPanel";
import FooterControls from "./FooterControls";
import EndModal from "./EndModal";
import CustomPopup from "./CustomPopup";
import Result from "./Result"; // Import the updated Result component
import { useQuestions } from "@/Context/QuestionsContext";

const Page = () => {
  const { questions } = useQuestions();
  const router = useRouter();

  useEffect(() => {
    if (questions.length === 0) {
      router.push("/");
    }
  }, [questions.length, router]);

  const totalTimeInMinutes = (questions.length / 100) * 60;
  const totalTimeInSeconds = totalTimeInMinutes * 60;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(totalTimeInSeconds);
  const [paused, setPaused] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCustomPopup, setShowCustomPopup] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!paused && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleSubmitTest();
    }
  }, [paused, timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateResults = () => {
    const totalQuestions = questions.length;

    const correctAnswers = Object.keys(selectedAnswers).filter((key) => {
      const questionIndex = parseInt(key, 10);
      const selectedOption = `option${selectedAnswers[key]}`;
      return questions[questionIndex]?.answer === selectedOption;
    }).length;

    const wrongAnswers = Object.keys(selectedAnswers).length - correctAnswers;
    const unattempted = totalQuestions - Object.keys(selectedAnswers).length;
    const markedForReview = markedQuestions.length;
    const totalMarks = correctAnswers;

    return {
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      unattempted,
      markedForReview,
      totalMarks,
      timeTaken: totalTimeInSeconds - timer,
      selectedAnswers,
    };
  };

  // const handleSubmitTest = () => {
  //   const resultData = calculateResults();
  //   setResults(resultData);
  // };

  // State for managing the popup
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmitTest = () => {
    // Calculate correct answers
    const correctAnswers = Object.keys(selectedAnswers).filter((key) => {
      const questionIndex = parseInt(key, 10);
      const selectedOption = `option${selectedAnswers[key]}`;
      return questions[questionIndex]?.answer === selectedOption;
    }).length;

    // Calculate wrong answers
    const totalAnswers = Object.keys(selectedAnswers).length;
    const wrongAnswers = totalAnswers - correctAnswers;

    // If no questions are answered, show the popup
    if (correctAnswers === 0 && wrongAnswers === 0) {
      setPopupMessage("Please solve at least one question.");
      setShowPopup(true); // Trigger the popup
      return; // Exit the function early
    }

    // Proceed with calculating and setting results
    const resultData = calculateResults();
    setResults(resultData);
  };

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
        timer={formatTime(timer)}
        togglePause={() => setPaused(!paused)}
        paused={paused}
      />
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <QuestionPanel
          currentQuestion={currentQuestion}
          questions={questions}
          selectedAnswers={selectedAnswers}
          handleOptionSelect={(index) =>
            setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index })
          }
          isDarkMode={isDarkMode}
          handleNextQuestion={() =>
            setCurrentQuestion((prev) =>
              prev < questions.length - 1 ? prev + 1 : prev
            )
          }
          handlePrevQuestion={() =>
            setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
          }
        />
        <Sidebar
          totalQuestions={questions.length}
          currentQuestion={currentQuestion}
          markedQuestions={markedQuestions}
          selectedAnswers={selectedAnswers}
          navigateToQuestion={setCurrentQuestion}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isDarkMode={isDarkMode}
        />
      </main>
      <StatsRow
        totalQuestions={questions.length}
        selectedAnswers={selectedAnswers}
        markedQuestions={markedQuestions}
        isDarkMode={isDarkMode}
      />

      <FooterControls
        handleMarkForReview={() =>
          setMarkedQuestions((prev) =>
            prev.includes(currentQuestion)
              ? prev.filter((q) => q !== currentQuestion)
              : [...prev, currentQuestion]
          )
        }
        isCurrentMarked={markedQuestions.includes(currentQuestion)} // Add this line
        setShowEndModal={setShowEndModal}
        isDarkMode={isDarkMode}
      />
      <EndModal
        showEndModal={showEndModal}
        setShowEndModal={setShowEndModal}
        onSubmitTest={handleSubmitTest}
        isDarkMode={isDarkMode}
      />
      {showCustomPopup && (
        <CustomPopup
          onClose={() => setShowCustomPopup(false)}
          onLeave={() => router.push("/")}
        />
      )}
      <Result
        results={results}
        formatTime={formatTime}
        questions={questions}
        onClose={() => {
          setResults(null);
          router.push("/history");
        }}
      />

      {/* Render the popup conditionally */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-red-100">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-red-600">
                  Attention
                </h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">{popupMessage}</p>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
