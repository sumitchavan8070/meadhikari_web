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
  const [fontSize, setFontSize] = useState(20); // Default font size in pixels

  const baseUrl = "https://file-hosting-app.vercel.app"; // Your base URL

  const getUpdatedContentHtml = (html) => {
    if (!html) return "";

    const baseUrl = "https://file-hosting-app.vercel.app"; // Ensure this is correct

    return (
      html
        // Ensure images have the correct base URL if needed **without adding styles**
        .replace(/<img\s+src="([^"]+)"(.*?)>/g, (match, path, rest) => {
          if (path.startsWith("http") || path.startsWith("data:image")) {
            return `<img src="${path}" ${rest}>`; // Keep original attributes
          }
          return `<img src="${baseUrl}${path}" ${rest}>`; // Keep original attributes
        })

        // Fix table styles
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
        .replace(/<tr/g, '<tr style="border-bottom: 1px solid #ddd;"')
    );
  };

  // Handlers for font size adjustment
  const increaseFontSize = () => {
    setFontSize((prevFontSize) => Math.min(prevFontSize + 2, 24)); // Max font size is 24px
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => Math.max(prevFontSize - 2, 12)); // Min font size is 12px
  };

  const questionContent = questions[currentQuestion]?.question;

  return (
    // <section
    //   className={`flex-1 p-4 overflow-y-auto ${
    //     isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
    //   } flex flex-col`}
    // >
    <section
      className={`flex-1 p-4 overflow-y-auto ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex flex-col`}
      style={{ userSelect: "none" }}
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
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

      {/* Question Text or HTML */}
      <div
        className="mb-4"
        style={{
          fontSize: `${fontSize}px`,
          whiteSpace: "pre-wrap", // Ensures spaces & newlines are respected
        }}
      >
        {/<[a-z][\s\S]*>/i.test(questionContent) ? (
          <div
            dangerouslySetInnerHTML={{
              __html: getUpdatedContentHtml(questionContent),
            }}
            style={{
              width: "100%",
            }}
          />
        ) : (
          questionContent?.split("\n").map((line, index) => (
            <p key={index} style={{ marginBottom: "8px" }}>
              {line}
            </p>
          ))
        )}
      </div>

      {/* Options List */}
      <ul className="mt-4 space-y-2">
        {["option1", "option2", "option3", "option4"].map(
          (optionKey, index) => {
            const optionContent = questions[currentQuestion]?.[optionKey];

            return (
              <li
                key={index}
                onClick={() => handleOptionSelect(index + 1)} // Store one-based index
                className={`flex items-center space-x-2 cursor-pointer p-3 rounded-lg ${
                  isDarkMode
                    ? "hover:bg-gray-700 bg-gray-800"
                    : "hover:bg-gray-200 bg-gray-100"
                }`}
                style={{ fontSize: `${fontSize}px` }}
              >
                <input
                  type="radio"
                  name={`answer-${currentQuestion}`}
                  id={`option-${currentQuestion}-${index}`}
                  checked={selectedAnswers[currentQuestion] === index + 1} // Match one-based index
                  onChange={() => handleOptionSelect(index + 1)}
                  className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor={`option-${currentQuestion}-${index}`}
                  className="flex-1"
                >
                  {/<[a-z][\s\S]*>/i.test(optionContent) ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: getUpdatedContentHtml(optionContent),
                      }}
                    />
                  ) : (
                    <span>{optionContent}</span>
                  )}
                </label>
              </li>
            );
          }
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
