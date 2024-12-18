// "use client";
// import React, { useState } from "react";

// const QuestionPanel = ({
//   currentQuestion,
//   questions,
//   selectedAnswers,
//   handleOptionSelect,
//   isDarkMode,
//   handleNextQuestion,
//   handlePrevQuestion,
// }) => {
//   const [fontSize, setFontSize] = useState(16); // Default font size in pixels

//   const increaseFontSize = () => {
//     setFontSize((prevFontSize) => Math.min(prevFontSize + 2, 24)); // Max font size is 24px
//   };

//   const decreaseFontSize = () => {
//     setFontSize((prevFontSize) => Math.max(prevFontSize - 2, 12)); // Min font size is 12px
//   };

//   return (
//     <section
//       className={`flex-1 p-4 overflow-y-auto ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       } flex flex-col`}
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold">Question {currentQuestion + 1}</h2>
//         <div className="flex space-x-2">
//           <button
//             onClick={decreaseFontSize}
//             className="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600"
//           >
//             -
//           </button>
//           <button
//             onClick={increaseFontSize}
//             className="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <div
//         className="mb-4"
//         style={{ fontSize: `${fontSize}px` }}
//         dangerouslySetInnerHTML={{
//           __html: questions[currentQuestion]?.question,
//         }}
//       />

//       <ul className="mt-4 space-y-2">
//         {questions[currentQuestion]?.options.map((option, index) => (
//           <li
//             key={index}
//             className={`flex items-center space-x-2 cursor-pointer p-3 rounded-lg ${
//               isDarkMode
//                 ? "hover:bg-gray-700 bg-gray-800"
//                 : "hover:bg-gray-200 bg-gray-100"
//             }`}
//             style={{ fontSize: `${fontSize}px` }}
//           >
//             <input
//               type="radio"
//               name={`answer-${currentQuestion}`}
//               id={`option-${currentQuestion}-${index}`}
//               checked={selectedAnswers[currentQuestion] === index}
//               onChange={() => handleOptionSelect(index)}
//               className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
//             />
//             <label
//               htmlFor={`option-${currentQuestion}-${index}`}
//               className="flex-1"
//             >
//               {option}
//             </label>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-auto flex justify-between">
//         <button
//           onClick={handlePrevQuestion}
//           className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
//           disabled={currentQuestion === 0}
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNextQuestion}
//           className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
//           disabled={currentQuestion === questions.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </section>
//   );
// };

// export default QuestionPanel;

import { useState } from "react";

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
        {["option1", "option2", "option3", "option4"].map(
          (optionKey, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(index)}
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
                {questions[currentQuestion]?.[optionKey]}
              </label>
            </li>
          )
        )}
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

export default QuestionPanel;
