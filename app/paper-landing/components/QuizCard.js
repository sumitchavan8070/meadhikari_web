// // // // "use client";

// // // // import React from "react";

// // // // const QuizCard = ({
// // // //   title,
// // // //   time,
// // // //   questions,
// // // //   marks,
// // // //   languages,
// // // //   attempted,
// // // //   buttonText,
// // // //   free,
// // // //   live,
// // // //   onButtonClick,
// // // // }) => (
// // // //   <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between bg-white w-60">
// // // //     <div>
// // // //       {/* Free and Live Tags */}
// // // //       <div className="flex space-x-2 mb-2">
// // // //         {free && (
// // // //           <span className="bg-blue-400 text-white px-2 py-1 text-xs rounded">
// // // //             Free
// // // //           </span>
// // // //         )}
// // // //         {live && (
// // // //           <span className="bg-red-400 text-white px-2 py-1 text-xs rounded">
// // // //             Live
// // // //           </span>
// // // //         )}
// // // //       </div>
// // // //       {/* Title */}
// // // //       <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
// // // //       {/* Info */}
// // // //       <div className="text-gray-600 text-sm space-y-1">
// // // //         <p>⏱ {time}</p>
// // // //         <p>📄 {questions}</p>
// // // //         <p>🏆 {marks}</p>
// // // //         <p>🗣 {languages}</p>
// // // //         <p className="text-blue-600 font-medium">{`Attempted by ${attempted}`}</p>
// // // //       </div>
// // // //     </div>
// // // //     {/* Action Button */}
// // // //     <button
// // // //       className="mt-4 bg-yellow-500 text-white font-medium px-4 py-2 rounded hover:bg-yellow-600"
// // // //       onClick={onButtonClick}
// // // //     >
// // // //       {buttonText}
// // // //     </button>
// // // //   </div>
// // // // );

// // // // export default QuizCard;

// // // import React from "react";

// // // const QuizCard = ({
// // //   title,
// // //   time,
// // //   questions,
// // //   marks,
// // //   languages,
// // //   attempted,
// // //   buttonText,
// // //   free,
// // //   live,
// // //   onButtonClick,
// // // }) => {
// // //   return (
// // //     <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
// // //       {/* Card Header */}
// // //       <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
// // //         <h3 className="text-xl font-bold truncate">{title}</h3>
// // //         <div className="flex justify-between items-center mt-2">
// // //           <span className="text-sm">{time} min</span>
// // //           <div className="flex items-center space-x-2">
// // //             {free && (
// // //               <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-full">
// // //                 Free
// // //               </span>
// // //             )}
// // //             {live && (
// // //               <span className="bg-red-400 text-white text-xs px-2 py-1 rounded-full">
// // //                 Live
// // //               </span>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Card Body */}
// // //       <div className="p-4 space-y-2">
// // //         <div className="flex justify-between">
// // //           <span className="text-sm font-medium">Questions:</span>
// // //           <span className="text-sm text-gray-700">{questions}</span>
// // //         </div>
// // //         <div className="flex justify-between">
// // //           <span className="text-sm font-medium">Marks:</span>
// // //           <span className="text-sm text-gray-700">{marks}</span>
// // //         </div>
// // //         <div className="flex justify-between">
// // //           <span className="text-sm font-medium">Languages:</span>
// // //           <span className="text-sm text-gray-700">{languages}</span>
// // //         </div>
// // //         <div className="flex justify-between">
// // //           <span className="text-sm font-medium">Attempted:</span>
// // //           <span className="text-sm text-gray-700">{attempted}</span>
// // //         </div>
// // //       </div>

// // //       {/* Card Footer */}
// // //       <div className="p-4 bg-gray-100 text-center">
// // //         <button
// // //           onClick={onButtonClick}
// // //           className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
// // //         >
// // //           {buttonText}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QuizCard;

// // import React from "react";

// // const QuizCard = ({
// //   title,
// //   time,
// //   questions,
// //   marks,
// //   languages,
// //   attempted,
// //   buttonText,
// //   free,
// //   live,
// //   onButtonClick,
// // }) => {
// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
// //       {/* Title Section */}
// //       <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
// //         {title}
// //       </h3>

// //       {/* Quiz Details Section */}
// //       <div className="space-y-2 text-gray-600 text-sm">
// //         <p>
// //           ⏰ <span className="font-medium">Duration:</span> {time}
// //         </p>
// //         <p>
// //           📚 <span className="font-medium">Questions:</span> {questions}
// //         </p>
// //         <p>
// //           📊 <span className="font-medium">Marks:</span> {marks}
// //         </p>
// //         <p>
// //           🌐 <span className="font-medium">Languages:</span> {languages}
// //         </p>
// //         <p>
// //           📊 <span className="font-medium">Attempted:</span> {attempted} times
// //         </p>
// //       </div>

// //       {/* Badge Section */}
// //       <div className="flex justify-between items-center mt-4">
// //         {free && (
// //           <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
// //             Free
// //           </span>
// //         )}
// //         {live && (
// //           <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
// //             Live
// //           </span>
// //         )}
// //       </div>

// //       {/* Button Section */}
// //       <button
// //         onClick={onButtonClick}
// //         className="mt-4 bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
// //       >
// //         {buttonText}
// //       </button>
// //     </div>
// //   );
// // };

// // export default QuizCard;

// import React from "react";

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
//   onButtonClick,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between h-full relative border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//       {/* Badge Section */}
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
//       </div>

//       {/* Title Section */}
//       <h3 className="text-lg font-extrabold text-gray-800 mt-10 mb-3 text-center truncate">
//         {title}
//       </h3>

//       {/* Quiz Details Section */}
//       <div className="space-y-3 text-gray-700 text-sm">
//         <p>
//           ⏰ <span className="font-medium">Duration:</span> {time}
//         </p>
//         <p>
//           📚 <span className="font-medium">Questions:</span> {questions}
//         </p>
//         <p>
//           📊 <span className="font-medium">Marks:</span> {marks}
//         </p>
//         <p>
//           🌐 <span className="font-medium">Languages:</span> {languages}
//         </p>
//         <p>
//           📊 <span className="font-medium">Attempted:</span> {attempted} times
//         </p>
//       </div>

//       {/* Button Section */}
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
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between h-full relative border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-3 left-3 flex space-x-2 z-10">
        {free && (
          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md">
            Free
          </span>
        )}
        {live && (
          <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
            Live
          </span>
        )}
      </div>
      <h3 className="text-lg font-extrabold text-gray-800 mt-10 mb-3 text-center truncate">
        {title}
      </h3>
      <div className="space-y-3 text-gray-700 text-sm">
        <p>
          ⏰ <span className="font-medium">Duration:</span> {time}
        </p>
        <p>
          📚 <span className="font-medium">Questions:</span> {questions}
        </p>
        <p>
          📊 <span className="font-medium">Marks:</span> {marks}
        </p>
        <p>
          🌐 <span className="font-medium">Languages:</span> {languages}
        </p>
        <p>
          📊 <span className="font-medium">Attempted:</span> {attempted} times
        </p>
      </div>
      <button
        onClick={onButtonClick}
        className="mt-5 bg-blue-600 text-white text-sm py-2 px-5 rounded-lg hover:bg-blue-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default QuizCard;
