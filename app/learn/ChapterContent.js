import React from "react";
import Quiz from "./Quiz";
import parse from "html-react-parser";
import styles from "./ChapterContent.module.css"; // Import custom CSS

export default function ChapterContent({
  chapter,
  subjects,
  setSelectedChapter,
}) {
  // Dynamically find the current subject that contains the selected chapter
  const currentSubject = subjects.find((subject) =>
    subject.chapters.some((ch) => ch._id === chapter._id)
  );

  // Find the index of the current chapter in the subject's chapters array
  const chapterIndex = currentSubject?.chapters.findIndex(
    (ch) => ch._id === chapter._id
  );

  // Function to handle navigation to the next or previous chapter
  const navigateChapter = (direction) => {
    if (!currentSubject || chapterIndex === undefined) return;

    if (
      direction === "next" &&
      chapterIndex < currentSubject.chapters.length - 1
    ) {
      setSelectedChapter(currentSubject.chapters[chapterIndex + 1]);
    } else if (direction === "previous" && chapterIndex > 0) {
      setSelectedChapter(currentSubject.chapters[chapterIndex - 1]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
      {/* Chapter Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{chapter.title}</h1>

      {/* Render Chapter Content */}
      <div className={`${styles["chapter-content"]}`}>
        {parse(chapter.content)}
      </div>

      {/* Quiz Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">MCQ Test</h2>
      <Quiz mcqs={chapter.mcqs} />

      {/* Navigation Buttons */}
      {currentSubject.chapters.length > 1 && (
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigateChapter("previous")}
            disabled={chapterIndex === 0}
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ${
              chapterIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous Chapter
          </button>
          <button
            onClick={() => navigateChapter("next")}
            disabled={chapterIndex === currentSubject.chapters.length - 1}
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ${
              chapterIndex === currentSubject.chapters.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next Chapter
          </button>
        </div>
      )}
    </div>
  );
}
