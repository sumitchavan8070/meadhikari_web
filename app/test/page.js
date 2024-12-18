"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Sidebar = ({
  totalQuestions,
  currentQuestion,
  markedQuestions,
  selectedAnswers,
  navigateToQuestion,
  isSidebarOpen,
  setIsSidebarOpen,
  isDarkMode,
}) => (
  <aside
    className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
      isSidebarOpen ? "block" : "hidden md:block"
    } ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
  >
    <h2 className="text-lg font-bold">Questions</h2>
    <div className="grid grid-cols-5 gap-2 mt-2">
      {[...Array(totalQuestions)].map((_, index) => {
        const isCurrent = currentQuestion === index;
        const isMarked = markedQuestions.includes(index);
        const isSelected = selectedAnswers[index] !== undefined;

        return (
          <button
            key={index}
            onClick={() => {
              navigateToQuestion(index);
              setIsSidebarOpen(false);
            }}
            className={`w-10 h-10 rounded overflow-hidden ${
              isCurrent
                ? isDarkMode
                  ? "bg-red-600 text-white"
                  : "bg-red-500 text-black"
                : isMarked
                ? isDarkMode
                  ? "bg-purple-600 text-white"
                  : "bg-purple-500 text-black"
                : isSelected
                ? isDarkMode
                  ? "bg-green-600 text-white"
                  : "bg-green-500 text-black"
                : isDarkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  </aside>
);

// Header Component
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

const StatsRow = ({
  totalQuestions,
  selectedAnswers,
  markedQuestions,
  isDarkMode,
}) => {
  const attempted = Object.keys(selectedAnswers).length; // Attempted questions
  const notVisited = totalQuestions - attempted - markedQuestions.length; // Not visited questions
  const markedForReview = markedQuestions.length; // Marked for review questions

  return (
    <div
      className={`w-full flex flex-col sm:flex-row justify-between items-center p-4 ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">Marked for Review:</span>
        <span>{markedForReview}</span>
      </div>
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">
          Attempted Questions:
        </span>
        <span>{attempted}</span>
      </div>
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">Not Visited:</span>
        <span>{notVisited}</span>
      </div>
    </div>
  );
};

const QuestionPanel = ({
  currentQuestion,
  questions,
  selectedAnswers,
  handleOptionSelect,
  isDarkMode,
  handleNextQuestion,
  handlePrevQuestion,
}) => {
  const [fontSize, setFontSize] = useState(16); // Default font size in pixels

  // Handlers for font size adjustment
  const increaseFontSize = () => {
    setFontSize((prevFontSize) => Math.min(prevFontSize + 2, 24)); // Max font size is 24px
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => Math.max(prevFontSize - 2, 12)); // Min font size is 12px
  };

  return (
    <section
      className={`flex-1 p-4 overflow-y-auto ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex flex-col`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Question {currentQuestion + 1}</h2>
        {/* Font Size Controls */}
        <div className="flex space-x-2">
          <button
            onClick={decreaseFontSize}
            className="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600"
          >
            -
          </button>
          <button
            onClick={increaseFontSize}
            className="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Question Text */}
      <div
        className="mb-4"
        style={{ fontSize: `${fontSize}px` }}
        dangerouslySetInnerHTML={{
          __html: questions[currentQuestion]?.question,
        }}
      />

      {/* Options List */}
      <ul className="mt-4 space-y-2">
        {questions[currentQuestion]?.options.map((option, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 cursor-pointer p-3 rounded-lg ${
              isDarkMode
                ? "hover:bg-gray-700 bg-gray-800"
                : "hover:bg-gray-200 bg-gray-100"
            }`}
            style={{ fontSize: `${fontSize}px` }} // Apply font size dynamically
          >
            <input
              type="radio"
              name={`answer-${currentQuestion}`}
              id={`option-${currentQuestion}-${index}`}
              checked={selectedAnswers[currentQuestion] === index}
              onChange={() => handleOptionSelect(index)}
              className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor={`option-${currentQuestion}-${index}`}
              className="flex-1"
            >
              {option}
            </label>
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <div className="mt-auto flex justify-between">
        <button
          onClick={handlePrevQuestion}
          className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

const FooterControls = ({
  handleMarkForReview,
  showEndModal,
  setShowEndModal,
  isDarkMode,
}) => (
  <footer
    className={`p-4 flex justify-between items-center ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
    }`}
  >
    <button
      onClick={handleMarkForReview}
      className="bg-purple-500 text-white px-4 py-2 rounded"
    >
      {showEndModal ? "Unmark Review" : "Mark for Review"}
    </button>
    <button
      onClick={() => setShowEndModal(true)}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Submit Test
    </button>
  </footer>
);

// Modal Component for End Test
const EndModal = ({ showEndModal, setShowEndModal }) =>
  showEndModal && (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-lg font-bold">Confirm Submission</h2>
        <p>Are you sure you want to submit the test?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={() => setShowEndModal(false)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Test Submitted!")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

const Page = () => {
  const questions = [
    {
      id: 1,
      question: `
        <p>Match the Modi 3.0 Cabinet Ministers to their respective ministries:</p>
       <table border="1">
  <tr>
    <td>राज्य</td>
    <td>लोकसंख्या घनता दर चौ. कि. मी. (2011)</td>
  </tr>
  <tr>
    <td>a. हरियाणा</td>
    <td>i. 123</td>
  </tr>
  <tr>
    <td>b.हिमाचल प्रदेश</td>
    <td>ii. 414</td>
  </tr>
  <tr>
    <td>c. झारखंड</td>
    <td>iii. 573</td>
  </tr>
<tr>
    <td>d. बिहार</td>
    <td>iv. 1106</td>
  </tr>
</table>

      `,
      options: [
        "1-d, 2-b, 3-c, 4-a",
        "1-a, 2-b, 3-c, 4-d",
        "1-b, 2-d, 3-c, 4-a",
        "1-c, 2-a, 3-d, 4-b",
      ],
    },
    {
      id: 2,
      question: `
        <p>Who is the Minister of Commerce and Industry in 2024?</p>
      `,
      options: [
        "Amit Shah",
        "Piyush Goyal",
        "Nirmala Sitharaman",
        "Jyotiraditya Scindia",
      ],
    },
    {
      id: 3,
      question: `
        <p>Consider the following statements regarding the National Income:</p>
        <ul class="list-disc pl-4">
          <li>1. National income is the total value of goods and services produced by the country in a year.</li>
          <li>2. Gross Domestic Product (GDP) is a better indicator of national income than Gross National Product (GNP).</li>
        </ul>
        <p>Which of the above statements is/are correct?</p>
      `,
      options: ["Only 1", "Only 2", "Both 1 and 2", "Neither 1 nor 2"],
    },
    {
      id: 4,
      question: `
        <p>Identify the correct match:</p>
        <table class="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th class="border p-2 text-left">Country</th>
              <th class="border p-2 text-left">Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2">India</td>
              <td class="border p-2">Rupee</td>
            </tr>
            <tr>
              <td class="border p-2">USA</td>
              <td class="border p-2">Dollar</td>
            </tr>
            <tr>
              <td class="border p-2">Japan</td>
              <td class="border p-2">Yen</td>
            </tr>
            <tr>
              <td class="border p-2">Europe</td>
              <td class="border p-2">Euro</td>
            </tr>
          </tbody>
        </table>
      `,
      options: [
        "India - Dollar, USA - Rupee, Japan - Yen, Europe - Euro",
        "India - Rupee, USA - Dollar, Japan - Yen, Europe - Euro",
        "India - Euro, USA - Dollar, Japan - Rupee, Europe - Yen",
        "India - Rupee, USA - Euro, Japan - Dollar, Europe - Yen",
      ],
    },
  ];

  const totalQuestions = 100;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
  const [paused, setPaused] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  // Timer logic
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
      return () => clearInterval(interval);
    }
  }, [paused, timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionSelect = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleMarkForReview = () => {
    if (markedQuestions.includes(currentQuestion)) {
      setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
    } else {
      setMarkedQuestions([...markedQuestions, currentQuestion]);
    }
  };

  const navigateToQuestion = (index) => setCurrentQuestion(index);

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const togglePause = () => setPaused(!paused);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleNextQuestion();
    }
    if (e.key === "ArrowLeft") {
      handlePrevQuestion();
    }
    if (e.key === "r" || e.key === "R") handleMarkForReview();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentQuestion]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        timer={formatTime(timer)}
        togglePause={togglePause}
        paused={paused}
      />
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <Sidebar
          totalQuestions={totalQuestions}
          currentQuestion={currentQuestion}
          markedQuestions={markedQuestions}
          selectedAnswers={selectedAnswers}
          navigateToQuestion={navigateToQuestion}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen} // Pass the setter here
          isDarkMode={isDarkMode}
        />

        <QuestionPanel
          currentQuestion={currentQuestion}
          questions={questions}
          selectedAnswers={selectedAnswers}
          handleOptionSelect={handleOptionSelect}
          isDarkMode={isDarkMode}
          handleNextQuestion={handleNextQuestion}
          handlePrevQuestion={handlePrevQuestion}
        />
      </main>
      <StatsRow
        totalQuestions={totalQuestions}
        selectedAnswers={selectedAnswers}
        markedQuestions={markedQuestions}
        isDarkMode={isDarkMode}
      />
      <FooterControls
        handleMarkForReview={handleMarkForReview}
        showEndModal={showEndModal}
        setShowEndModal={setShowEndModal}
        isDarkMode={isDarkMode}
      />
      <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
    </div>
  );
};

export default Page;
