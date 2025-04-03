// import { useState } from "react";

// const QuestionPanel = ({
//   currentQuestion,
//   questions,
//   selectedAnswers,
//   handleOptionSelect,
//   isDarkMode,
//   handleNextQuestion,
//   handlePrevQuestion,
// }) => {
//   const [fontSize, setFontSize] = useState(20); // Default font size in pixels

//   const baseUrl = "https://file-hosting-app.vercel.app"; // Your base URL

//   const getUpdatedContentHtml = (html) => {
//     if (!html) return "";

//     const baseUrl = "https://file-hosting-app.vercel.app"; // Ensure this is correct

//     return (
//       html
//         // Ensure images have the correct base URL if needed **without adding styles**
//         .replace(/<img\s+src="([^"]+)"(.*?)>/g, (match, path, rest) => {
//           if (path.startsWith("http") || path.startsWith("data:image")) {
//             return `<img src="${path}" ${rest}>`; // Keep original attributes
//           }
//           return `<img src="${baseUrl}${path}" ${rest}>`; // Keep original attributes
//         })

//         // Fix table styles
//         .replace(
//           /<table/g,
//           '<table style="width: 100%; border-collapse: collapse; margin-top: 10px;"'
//         )
//         .replace(
//           /<th/g,
//           '<th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f4f4f4; font-weight: bold;"'
//         )
//         .replace(
//           /<td/g,
//           '<td style="border: 1px solid #ddd; padding: 8px; text-align: left;"'
//         )
//         .replace(/<tr/g, '<tr style="border-bottom: 1px solid #ddd;"')
//     );
//   };

//   // Handlers for font size adjustment
//   const increaseFontSize = () => {
//     setFontSize((prevFontSize) => Math.min(prevFontSize + 2, 24)); // Max font size is 24px
//   };

//   const decreaseFontSize = () => {
//     setFontSize((prevFontSize) => Math.max(prevFontSize - 2, 12)); // Min font size is 12px
//   };

//   const questionContent = questions[currentQuestion]?.question;

//   return (
//     // <section
//     //   className={`flex-1 p-4 overflow-y-auto ${
//     //     isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//     //   } flex flex-col`}
//     // >
//     <section
//       className={`flex-1 p-4 overflow-y-auto ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       } flex flex-col`}
//       style={{ userSelect: "none" }}
//       onContextMenu={(e) => e.preventDefault()}
//       onCopy={(e) => e.preventDefault()}
//     >
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold">Question {currentQuestion + 1}</h2>
//         {/* Font Size Controls */}
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

//       {/* Question Text or HTML */}
//       <div
//         className="mb-4"
//         style={{
//           fontSize: `${fontSize}px`,
//           whiteSpace: "pre-wrap", // Ensures spaces & newlines are respected
//         }}
//       >
//         {/<[a-z][\s\S]*>/i.test(questionContent) ? (
//           <div
//             dangerouslySetInnerHTML={{
//               __html: getUpdatedContentHtml(questionContent),
//             }}
//             style={{
//               width: "100%",
//             }}
//           />
//         ) : (
//           questionContent?.split("\n").map((line, index) => (
//             <p key={index} style={{ marginBottom: "8px" }}>
//               {line}
//             </p>
//           ))
//         )}
//       </div>

//       {/* Options List */}
//       <ul className="mt-4 space-y-2">
//         {["option1", "option2", "option3", "option4"].map(
//           (optionKey, index) => {
//             const optionContent = questions[currentQuestion]?.[optionKey];

//             return (
//               <li
//                 key={index}
//                 onClick={() => handleOptionSelect(index + 1)} // Store one-based index
//                 className={`flex items-center space-x-2 cursor-pointer p-3 rounded-lg ${
//                   isDarkMode
//                     ? "hover:bg-gray-700 bg-gray-800"
//                     : "hover:bg-gray-200 bg-gray-100"
//                 }`}
//                 style={{ fontSize: `${fontSize}px` }}
//               >
//                 <input
//                   type="radio"
//                   name={`answer-${currentQuestion}`}
//                   id={`option-${currentQuestion}-${index}`}
//                   checked={selectedAnswers[currentQuestion] === index + 1} // Match one-based index
//                   onChange={() => handleOptionSelect(index + 1)}
//                   className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
//                 />
//                 <label
//                   htmlFor={`option-${currentQuestion}-${index}`}
//                   className="flex-1"
//                 >
//                   {/<[a-z][\s\S]*>/i.test(optionContent) ? (
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: getUpdatedContentHtml(optionContent),
//                       }}
//                     />
//                   ) : (
//                     <span>{optionContent}</span>
//                   )}
//                 </label>
//               </li>
//             );
//           }
//         )}
//       </ul>

//       {/* Navigation Buttons */}
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
  const [fontSize, setFontSize] = useState(20); // Default font size in pixels

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
          isDarkMode ? "border-color: #374151;" : "border-color: #e5e7eb;"
        }"`
      )
      .replace(
        /<th/g,
        `<th style="border: 1px solid ${
          isDarkMode ? "#374151" : "#e5e7eb"
        }; padding: 8px; text-align: left; background-color: ${
          isDarkMode ? "#1f2937" : "#f3f4f6"
        }; font-weight: bold;"`
      )
      .replace(
        /<td/g,
        `<td style="border: 1px solid ${
          isDarkMode ? "#374151" : "#e5e7eb"
        }; padding: 8px; text-align: left;"`
      );
  };

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));

  const questionContent = questions[currentQuestion]?.question;

  return (
    <section
      className={`flex-1 p-6 overflow-y-auto ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-800"
      } flex flex-col`}
      style={{ userSelect: "none" }}
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          Question {currentQuestion + 1}
        </h2>
        <div className="flex space-x-3">
          <button
            onClick={decreaseFontSize}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-all duration-200 shadow-sm`}
          >
            <FaMinus className="w-3 h-3" />
          </button>
          <button
            onClick={increaseFontSize}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-all duration-200 shadow-sm`}
          >
            <FaPlus className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Question Content */}
      <div
        className="mb-6 p-4 rounded-lg"
        style={{
          fontSize: `${fontSize}px`,
          whiteSpace: "pre-wrap",
          background: isDarkMode
            ? "rgba(31, 41, 55, 0.5)"
            : "rgba(243, 244, 246, 0.5)",
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
            <p key={index} className="mb-3 last:mb-0">
              {line}
            </p>
          ))
        )}
      </div>

      {/* Options List */}
      <ul className="mt-4 space-y-3 flex-1">
        {["option1", "option2", "option3", "option4"].map(
          (optionKey, index) => {
            const optionContent = questions[currentQuestion]?.[optionKey];
            const isSelected = selectedAnswers[currentQuestion] === index + 1;

            return (
              <li
                key={index}
                onClick={() => handleOptionSelect(index + 1)}
                className={`flex items-start space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-200 ${
                  isSelected
                    ? isDarkMode
                      ? "bg-blue-900/50 border border-blue-500"
                      : "bg-blue-100/80 border border-blue-400"
                    : isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                    : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
                }`}
                style={{ fontSize: `${fontSize}px` }}
              >
                <div
                  className={`flex items-center justify-center w-6 h-6 mt-0.5 rounded-full border ${
                    isSelected
                      ? "bg-blue-500 border-blue-500"
                      : isDarkMode
                      ? "border-gray-500"
                      : "border-gray-400"
                  }`}
                >
                  {isSelected && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
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

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
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
