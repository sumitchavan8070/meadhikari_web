import React from "react";

const DetailSummary = ({ results, formatTime }) => {
  if (!results) return null;

  const {
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    unattempted,
    markedForReview,
    totalMarks,
    timeTaken,
  } = results;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-4xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Test Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">Total Questions:</span>
            <span>{totalQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Correct Answers:</span>
            <span>{correctAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Wrong Answers:</span>
            <span>{wrongAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Unattempted:</span>
            <span>{unattempted}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Marked for Review:</span>
            <span>{markedForReview}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Total Marks:</span>
            <span>{totalMarks}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Time Taken:</span>
            <span>{formatTime(timeTaken)}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={() => window.location.reload()} // Reloads the page
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry Test
          </button>
          <button
            onClick={() => window.close()} // Close the window
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSummary;
