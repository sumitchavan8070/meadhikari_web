import React, { useState } from "react";

const quizData = [
  {
    title: "Weekly Current Affairs Quiz for UPSC & State PSCs (09-14 Dec)",
    time: "15 Minutes",
    questions: "10 Questions",
    marks: "20 Marks",
    languages: "English, Hindi, Telugu +6 More",
    attempted: "91 aspirants",
    buttonText: "Start Now",
    free: true,
  },
  {
    title: "13th December 2024 Daily Current Affairs Quiz (Evening)",
    time: "10 Minutes",
    questions: "10 Questions",
    marks: "10 Marks",
    languages: "English, Hindi, Tamil +7 More",
    attempted: "213 aspirants",
    buttonText: "Start Now",
    free: true,
  },
  {
    title: "State PSC: Mental Ability - Interest",
    time: "7 Minutes",
    questions: "10 Questions",
    marks: "10 Marks",
    languages: "English, Marathi",
    attempted: "35 aspirants",
    buttonText: "Start Now",
    free: true,
    live: true,
  },
  {
    title: "State PSC: Maharashtra GK - Minerals & Resources",
    time: "6 Minutes",
    questions: "10 Questions",
    marks: "10 Marks",
    languages: "English, Marathi",
    attempted: "34 aspirants",
    buttonText: "Start Now",
    free: true,
    live: true,
  },
  {
    title: "13th Dec 2024 Daily Quiz for UPSC & State PSCs",
    time: "8 Minutes",
    questions: "10 Questions",
    marks: "10 Marks",
    languages: "English, Hindi",
    attempted: "180 aspirants",
    buttonText: "Start Now",
    free: true,
  },
];

const QuizCard = ({
  title,
  time,
  questions,
  marks,
  languages,
  attempted,
  buttonText,
  free,
  live,
}) => (
  <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between bg-white">
    <div>
      {/* Free and Live Tags */}
      <div className="flex space-x-2 mb-2">
        {free && (
          <span className="bg-blue-400 text-white px-2 py-1 text-xs rounded">
            Free
          </span>
        )}
        {live && (
          <span className="bg-red-400 text-white px-2 py-1 text-xs rounded">
            Live
          </span>
        )}
      </div>
      {/* Title */}
      <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
      {/* Info */}
      <div className="text-gray-600 text-sm space-y-1">
        <p>⏱ {time}</p>
        <p>📄 {questions}</p>
        <p>🏆 {marks}</p>
        <p>🗣 {languages}</p>
        <p className="text-blue-600 font-medium">{`Attempted by ${attempted}`}</p>
      </div>
    </div>
    {/* Action Button */}
    <button className="mt-4 bg-yellow-500 text-white font-medium px-4 py-2 rounded hover:bg-yellow-600">
      {buttonText}
    </button>
  </div>
);

const TestSeries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + quizData.length) % quizData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quizData.length);
  };

  // Dynamically show 3 cards with circular scrolling
  const visibleQuizzes = [
    ...quizData.slice(currentIndex),
    ...quizData.slice(0, 3 - (quizData.length - currentIndex)),
  ].slice(0, 3);

  return (
    <div className="p-6 font-sans bg-gray-100 flex justify-center">
      <div className="w-full max-w-screen-xl" style={{ width: "80%" }}>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Quiz of the Day</h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.5 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleQuizzes.map((quiz, index) => (
            <QuizCard key={index} {...quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSeries;
