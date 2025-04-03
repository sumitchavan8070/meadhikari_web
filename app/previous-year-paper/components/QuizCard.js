// const QuizCard = ({
//   title,
//   time,
//   questions,
//   marks,
//   languages,
//   attempted,
//   buttonText,
//   free,
//   live,
//   demo,
//   onButtonClick,
//   paper,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between h-full relative border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//       <div className="absolute top-3 left-3 flex space-x-2 z-10">
//         {free && (
//           <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md">
//             Free
//           </span>
//         )}
//         {live && (
//           <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
//             Live
//           </span>
//         )}
//         {demo && (
//           <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
//             Demo
//           </span>
//         )}
//       </div>
//       <h3 className="text-lg font-extrabold text-gray-800 mt-10 mb-3 text-left ">
//         {title}
//       </h3>
//       <div className="space-y-3 text-gray-700 text-sm">
//         <div className="flex space-x-4">
//           {paper?.QPYear && (
//             <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full">
//               {paper.QPYear}
//             </span>
//           )}
//           {paper?.subCatName && (
//             <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full">
//               {paper.subCatName}
//             </span>
//           )}
//         </div>
//         <p>
//           ⏰ <span className="font-medium">Duration:</span> {time}
//         </p>
//         <p>
//           📚 <span className="font-medium">Questions:</span> {questions}
//         </p>
//         <p>
//           📊 <span className="font-medium">Marks:</span> {marks}
//         </p>
//         {/* <p>
//           🌐 <span className="font-medium">Languages:</span> {languages}
//         </p> */}
//         <p>
//           🔥 <span className="font-medium">Active Students:</span> {attempted}{" "}
//         </p>
//       </div>
//       <button
//         onClick={onButtonClick}
//         className="mt-5 bg-blue-600 text-white text-sm py-2 px-5 rounded-lg hover:bg-blue-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
//       >
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// export default QuizCard;
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
  demo,
  onButtonClick,
  paper,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(5,90,171,0.1)] p-6 flex flex-col justify-between h-full relative border border-[rgba(5,90,171,0.15)] hover:shadow-[0_8px_25px_rgba(5,90,171,0.2)] transition-all duration-300 overflow-hidden group">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(107.12deg,_#055AAB10_4.81%,_#BFE0FF10_96.97%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Badges */}
      <div className="absolute top-3 left-3 flex space-x-2 z-10">
        {free && (
          <span className="px-3 py-1 bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)] text-white text-xs font-semibold rounded-full shadow-md">
            {paper?.subCatName || "Free"}
          </span>
        )}
        {live && (
          <span className="px-3 py-1 bg-[linear-gradient(92.91deg,_#FF4D4D_-0.48%,_#F91313_98.9%)] text-white text-xs font-semibold rounded-full shadow-md">
            Live
          </span>
        )}
        {demo && (
          <span className="px-3 py-1 bg-[linear-gradient(92.91deg,_#FF8D4D_-0.48%,_#F95713_98.9%)] text-white text-xs font-semibold rounded-full shadow-md">
            Demo
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-extrabold text-gray-800 mt-8 mb-4 text-left bg-clip-text">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {paper?.QPYear && (
            <span className="px-3 py-1 bg-[rgba(5,90,171,0.1)] text-[#055AAB] text-xs font-medium rounded-full border border-[rgba(5,90,171,0.2)]">
              {paper.QPYear}
            </span>
          )}
          {paper?.subCatName && (
            <span className="px-3 py-1 bg-[rgba(5,90,171,0.1)] text-[#055AAB] text-xs font-medium rounded-full border border-[rgba(5,90,171,0.2)]">
              {paper.subCatName}
            </span>
          )}
        </div>

        <div className="space-y-3 text-gray-700 text-sm">
          <div className="flex items-center">
            <span className="w-6 h-6 flex items-center justify-center mr-2 text-[#055AAB]">
              ⏰
            </span>
            <span className="font-medium">Duration:</span>{" "}
            <span className="ml-1">{time}</span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 flex items-center justify-center mr-2 text-[#055AAB]">
              📚
            </span>
            <span className="font-medium">Questions:</span>{" "}
            <span className="ml-1">{questions}</span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 flex items-center justify-center mr-2 text-[#055AAB]">
              📊
            </span>
            <span className="font-medium">Marks:</span>{" "}
            <span className="ml-1">{marks}</span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 flex items-center justify-center mr-2 text-[#055AAB]">
              🔥
            </span>
            <span className="font-medium">Active Students:</span>{" "}
            <span className="ml-1">{attempted}</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="mt-6 relative z-10 bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)] text-white text-sm py-3 px-5 rounded-lg hover:opacity-90 w-full focus:outline-none focus:ring-2 focus:ring-[#2966C1] focus:ring-opacity-50 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="font-semibold">{buttonText}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default QuizCard;
