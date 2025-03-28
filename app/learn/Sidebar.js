import { useState } from "react";
import { subjectsData } from "./data";

export default function Sidebar({
  setSelectedSubject,
  setSelectedChapter,
  isOpen,
  onClose,
}) {
  const [expandedSubject, setExpandedSubject] = useState(null);

  // Handle subject title click
  const handleSubjectClick = (subject) => {
    setExpandedSubject(expandedSubject === subject._id ? null : subject._id);
    setSelectedSubject(subject);
    setSelectedChapter(null); // Reset the selected chapter
    onClose(); // Close the sidebar on small screens after selecting a subject
  };

  // Handle chapter click
  const handleChapterClick = (chapter) => {
    const selectedSubject = subjectsData.find((subject) =>
      subject.chapters.some((ch) => ch._id === chapter._id)
    );

    setSelectedSubject(selectedSubject); // Update subject first
    setSelectedChapter(chapter); // Then update chapter
    onClose(); // Close the sidebar on small screens after selecting a chapter
  };

  return (
    <aside
      className={`w-64 bg-gray-50 shadow-lg p-4 border-r border-gray-200 overflow-y-auto h-screen sticky top-0 ${
        isOpen ? "block" : "hidden md:block"
      }`}
    >
      <h2 className="text-xl font-bold text-blue-700 mb-6">Subjects</h2>
      <ul className="space-y-4">
        {subjectsData.map((subject) => (
          <li key={subject._id}>
            {/* Subject Title Button */}
            <button
              onClick={() => handleSubjectClick(subject)} // Handle subject title click
              className="flex items-center justify-between w-full text-left text-blue-700 font-medium hover:text-blue-900 hover:bg-blue-50 transition duration-300 rounded-md px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <span>{subject.title}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  expandedSubject === subject._id ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Chapters List */}
            {expandedSubject === subject._id && (
              <ul className="ml-4 space-y-2 mt-2">
                {subject.chapters.map((chapter) => (
                  <li key={chapter._id}>
                    <button
                      onClick={() => handleChapterClick(chapter)} // Handle chapter click
                      className="block w-full text-left text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md px-3 py-2 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    >
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
