// import React from "react";
// import ChapterContent from "./ChapterContent";

// export default function SubjectContent({
//   subject,
//   chapter,
//   setSelectedChapter,
// }) {
//   if (chapter) {
//     return <ChapterContent chapter={chapter} />;
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
//       <h1 className="text-3xl font-bold mb-4 text-gray-800">{subject.title}</h1>
//       <p className="mb-6 text-gray-600 leading-relaxed">
//         Select a chapter from the sidebar to start learning.
//       </p>
//     </div>
//   );
// }

import React from "react";
import ChapterContent from "./ChapterContent";
import { subjectsData } from "./data";

export default function SubjectContent({
  subject,
  chapter,
  setSelectedChapter,
}) {
  if (chapter) {
    return (
      <ChapterContent
        chapter={chapter}
        subjects={subjectsData}
        setSelectedChapter={setSelectedChapter}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{subject.title}</h1>
      <p className="mb-6 text-gray-600 leading-relaxed">
        Select a chapter from the sidebar to start learning.
      </p>
    </div>
  );
}
