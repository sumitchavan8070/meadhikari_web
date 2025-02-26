import React, { useState } from "react";

export default function Quiz({ mcqs }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Handle option selection
  const handleOptionClick = (questionIndex, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  return (
    <div>
      {mcqs.map((mcq, index) => {
        const isAnswered = selectedAnswers[index] !== undefined;
        const isCorrect = isAnswered && selectedAnswers[index] === mcq.answer;

        return (
          <div key={index} className="mb-6">
            {/* Question */}
            <h3 className="text-lg font-semibold text-gray-800">
              Q{index + 1}: {mcq.question}
            </h3>

            {/* Options */}
            <ul className="mt-2 space-y-2">
              {mcq.options.map((option, optionIndex) => {
                const isSelected = selectedAnswers[index] === option;
                const isCorrectOption = option === mcq.answer;

                return (
                  <li
                    key={optionIndex}
                    onClick={() => handleOptionClick(index, option)}
                    className={`cursor-pointer p-2 rounded ${
                      isSelected
                        ? isCorrectOption
                          ? "bg-green text-white"
                          : "bg-red-200 text-red-800"
                        : "hover:bg-gray-100"
                    } transition duration-300`}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>

            {/* Feedback */}
            {isAnswered && (
              <div className="mt-2">
                {isCorrect ? (
                  <p className="text-green font-medium">Correct!</p>
                ) : (
                  <p className="text-red-600 font-medium">
                    Incorrect. The correct answer is:{" "}
                    <strong>{mcq.answer}</strong>.
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
