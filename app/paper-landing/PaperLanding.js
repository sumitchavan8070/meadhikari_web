// // // // // // // "use client";

// // // // // // // import React from "react";
// // // // // // // import QuizCard from "./components/QuizCard";
// // // // // // // import HorizontalScroll from "./components/HorizontalScroll";

// // // // // // // const PaperLanding = ({ categoriesData }) => {
// // // // // // //   const handleStartTest = (title) => {
// // // // // // //     console.log(`Starting test for ${title}`);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-6">
// // // // // // //       {categoriesData.map((category, index) => (
// // // // // // //         <div key={index} className="mb-8">
// // // // // // //           <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
// // // // // // //           <HorizontalScroll>
// // // // // // //             {category.questionsData.map((quiz, qIndex) => (
// // // // // // //               <QuizCard
// // // // // // //                 key={qIndex}
// // // // // // //                 title={quiz.title}
// // // // // // //                 time={quiz.time}
// // // // // // //                 questions={`${quiz.questions.length} Questions`}
// // // // // // //                 marks={`${quiz.marks} Marks`}
// // // // // // //                 languages={quiz.languages.join(", ")}
// // // // // // //                 attempted={quiz.attempted}
// // // // // // //                 buttonText="Start Test"
// // // // // // //                 free={quiz.free}
// // // // // // //                 live={quiz.live}
// // // // // // //                 onButtonClick={() => handleStartTest(quiz.title)}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </HorizontalScroll>
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PaperLanding;

// // // // // // "use client";

// // // // // // import React, { useState } from "react";
// // // // // // import QuizCard from "./components/QuizCard";
// // // // // // import HorizontalScroll from "./components/HorizontalScroll";

// // // // // // const PaperLanding = ({ categoriesData }) => {
// // // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // // //   // Function to move to the previous set of quizzes (circular scrolling)
// // // // // //   const handlePrev = (categoryIndex) => {
// // // // // //     const category = categoriesData[categoryIndex];
// // // // // //     setCurrentIndex(
// // // // // //       (prev) =>
// // // // // //         (prev - 4 + category.questionsData.length) %
// // // // // //         category.questionsData.length
// // // // // //     );
// // // // // //   };

// // // // // //   // Function to move to the next set of quizzes (circular scrolling)
// // // // // //   const handleNext = (categoryIndex) => {
// // // // // //     const category = categoriesData[categoryIndex];
// // // // // //     setCurrentIndex((prev) => (prev + 4) % category.questionsData.length);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-6">
// // // // // //       {categoriesData.map((category, categoryIndex) => (
// // // // // //         <div key={categoryIndex} className="mb-8">
// // // // // //           {/* Header Section with Scroll Buttons */}
// // // // // //           <div className="flex justify-between items-center mb-4">
// // // // // //             <h2 className="text-2xl font-bold">{category.name}</h2>
// // // // // //             <div className="flex space-x-2">
// // // // // //               <button
// // // // // //                 onClick={() => handlePrev(categoryIndex)}
// // // // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // // // //               >
// // // // // //                 <svg
// // // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // // //                   className="w-5 h-5 text-blue-600"
// // // // // //                   fill="currentColor"
// // // // // //                   viewBox="0 0 24 24"
// // // // // //                 >
// // // // // //                   <path d="M15.5 19l-7-7 7-7"></path>
// // // // // //                 </svg>
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => handleNext(categoryIndex)}
// // // // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // // // //               >
// // // // // //                 <svg
// // // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // // //                   className="w-5 h-5 text-blue-600"
// // // // // //                   fill="currentColor"
// // // // // //                   viewBox="0 0 24 24"
// // // // // //                 >
// // // // // //                   <path d="M8.5 5l7 7-7 7"></path>
// // // // // //                 </svg>
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Horizontal Scroll for Category Quizzes */}
// // // // // //           <HorizontalScroll>
// // // // // //             {category.questionsData
// // // // // //               .slice(currentIndex, currentIndex + 4) // Show only 4 quizzes at a time
// // // // // //               .map((quiz, qIndex) => (
// // // // // //                 <QuizCard
// // // // // //                   key={qIndex}
// // // // // //                   title={quiz.title}
// // // // // //                   time={quiz.time}
// // // // // //                   questions={`${quiz.questions.length} Questions`}
// // // // // //                   marks={`${quiz.marks} Marks`}
// // // // // //                   languages={quiz.languages.join(", ")}
// // // // // //                   attempted={quiz.attempted}
// // // // // //                   buttonText="Start Test"
// // // // // //                   free={quiz.free}
// // // // // //                   live={quiz.live}
// // // // // //                   onButtonClick={() =>
// // // // // //                     console.log(`Starting test for ${quiz.title}`)
// // // // // //                   }
// // // // // //                 />
// // // // // //               ))}
// // // // // //           </HorizontalScroll>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PaperLanding;

// // // // // "use client";

// // // // // import React, { useState } from "react";
// // // // // import QuizCard from "./components/QuizCard";
// // // // // import HorizontalScroll from "./components/HorizontalScroll";

// // // // // const PaperLanding = ({ categoriesData }) => {
// // // // //   // Initialize state to track currentIndex for each category
// // // // //   const [currentIndexes, setCurrentIndexes] = useState(
// // // // //     categoriesData.reduce((acc, _, index) => {
// // // // //       acc[index] = 0; // Default to 0 for each category
// // // // //       return acc;
// // // // //     }, {})
// // // // //   );

// // // // //   // Function to move to the previous set of quizzes (circular scrolling)
// // // // //   const handlePrev = (categoryIndex) => {
// // // // //     const newIndexes = { ...currentIndexes };
// // // // //     const category = categoriesData[categoryIndex];
// // // // //     newIndexes[categoryIndex] =
// // // // //       (newIndexes[categoryIndex] - 4 + category.questionsData.length) %
// // // // //       category.questionsData.length;
// // // // //     setCurrentIndexes(newIndexes);
// // // // //   };

// // // // //   // Function to move to the next set of quizzes (circular scrolling)
// // // // //   const handleNext = (categoryIndex) => {
// // // // //     const newIndexes = { ...currentIndexes };
// // // // //     const category = categoriesData[categoryIndex];
// // // // //     newIndexes[categoryIndex] =
// // // // //       (newIndexes[categoryIndex] + 4) % category.questionsData.length;
// // // // //     setCurrentIndexes(newIndexes);
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mx-auto p-6">
// // // // //       {categoriesData.map((category, categoryIndex) => (
// // // // //         <div key={categoryIndex} className="mb-8">
// // // // //           {/* Header Section with Scroll Buttons */}
// // // // //           <div className="flex justify-between items-center mb-4">
// // // // //             <h2 className="text-2xl font-bold">{category.name}</h2>
// // // // //             <div className="flex space-x-2">
// // // // //               <button
// // // // //                 onClick={() => handlePrev(categoryIndex)}
// // // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // // //               >
// // // // //                 <svg
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                   className="w-5 h-5 text-blue-600"
// // // // //                   fill="currentColor"
// // // // //                   viewBox="0 0 24 24"
// // // // //                 >
// // // // //                   <path d="M15.5 19l-7-7 7-7"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => handleNext(categoryIndex)}
// // // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // // //               >
// // // // //                 <svg
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                   className="w-5 h-5 text-blue-600"
// // // // //                   fill="currentColor"
// // // // //                   viewBox="0 0 24 24"
// // // // //                 >
// // // // //                   <path d="M8.5 5l7 7-7 7"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Horizontal Scroll for Category Quizzes */}
// // // // //           <HorizontalScroll>
// // // // //             {category.questionsData
// // // // //               .slice(
// // // // //                 currentIndexes[categoryIndex],
// // // // //                 currentIndexes[categoryIndex] + 4
// // // // //               ) // Show only 4 quizzes at a time
// // // // //               .map((quiz, qIndex) => (
// // // // //                 <QuizCard
// // // // //                   key={qIndex}
// // // // //                   title={quiz.title}
// // // // //                   time={quiz.time}
// // // // //                   questions={`${quiz.questions.length} Questions`}
// // // // //                   marks={`${quiz.marks} Marks`}
// // // // //                   languages={quiz.languages.join(", ")}
// // // // //                   attempted={quiz.attempted}
// // // // //                   buttonText="Start Test"
// // // // //                   free={quiz.free}
// // // // //                   live={quiz.live}
// // // // //                   onButtonClick={() =>
// // // // //                     console.log(`Starting test for ${quiz.title}`)
// // // // //                   }
// // // // //                 />
// // // // //               ))}
// // // // //           </HorizontalScroll>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PaperLanding;

// // // // // "use client";

// // // // // import React, { useState } from "react";
// // // // // import QuizCard from "./components/QuizCard";
// // // // // import HorizontalScroll from "./components/HorizontalScroll";

// // // // // const PaperLanding = ({ categoriesData }) => {
// // // // //   // Initialize state to track currentIndex for each category
// // // // //   const [currentIndexes, setCurrentIndexes] = useState(
// // // // //     categoriesData.reduce((acc, _, index) => {
// // // // //       acc[index] = 0; // Default to 0 for each category
// // // // //       return acc;
// // // // //     }, {})
// // // // //   );

// // // // //   // Function to move to the previous set of quizzes (circular scrolling)
// // // // //   const handlePrev = (categoryIndex) => {
// // // // //     const newIndexes = { ...currentIndexes };
// // // // //     const category = categoriesData[categoryIndex];
// // // // //     newIndexes[categoryIndex] =
// // // // //       (newIndexes[categoryIndex] -
// // // // //         getVisibleCount() +
// // // // //         category.questionsData.length) %
// // // // //       category.questionsData.length;
// // // // //     setCurrentIndexes(newIndexes);
// // // // //   };

// // // // //   // Function to move to the next set of quizzes (circular scrolling)
// // // // //   const handleNext = (categoryIndex) => {
// // // // //     const newIndexes = { ...currentIndexes };
// // // // //     const category = categoriesData[categoryIndex];
// // // // //     newIndexes[categoryIndex] =
// // // // //       (newIndexes[categoryIndex] + getVisibleCount()) %
// // // // //       category.questionsData.length;
// // // // //     setCurrentIndexes(newIndexes);
// // // // //   };

// // // // //   // Get the number of visible quizzes based on screen size
// // // // //   const getVisibleCount = () => {
// // // // //     // Tailwind's breakpoints: sm, md, lg, xl
// // // // //     if (window.innerWidth >= 1024) return 4; // Desktop
// // // // //     if (window.innerWidth >= 768) return 3; // Tablet
// // // // //     return 2; // Mobile
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mx-auto p-6">
// // // // //       {categoriesData.map((category, categoryIndex) => (
// // // // //         <div key={categoryIndex} className="mb-8">
// // // // //           {/* Header Section with Scroll Buttons */}
// // // // //           <div className="flex justify-between items-center mb-4">
// // // // //             <h2 className="text-2xl font-bold">{category.name}</h2>
// // // // //             <div className="flex space-x-2">
// // // // //               <button
// // // // //                 onClick={() => handlePrev(categoryIndex)}
// // // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // // //               >
// // // // //                 <svg
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                   className="w-5 h-5 text-blue-600"
// // // // //                   fill="currentColor"
// // // // //                   viewBox="0 0 24 24"
// // // // //                 >
// // // // //                   <path d="M15.5 19l-7-7 7-7"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => handleNext(categoryIndex)}
// // // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // // //               >
// // // // //                 <svg
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                   className="w-5 h-5 text-blue-600"
// // // // //                   fill="currentColor"
// // // // //                   viewBox="0 0 24 24"
// // // // //                 >
// // // // //                   <path d="M8.5 5l7 7-7 7"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Horizontal Scroll for Category Quizzes */}
// // // // //           <HorizontalScroll>
// // // // //             {category.questionsData
// // // // //               .slice(
// // // // //                 currentIndexes[categoryIndex],
// // // // //                 currentIndexes[categoryIndex] + getVisibleCount()
// // // // //               ) // Show quizzes based on the screen size
// // // // //               .map((quiz, qIndex) => (
// // // // //                 <QuizCard
// // // // //                   key={qIndex}
// // // // //                   title={quiz.title}
// // // // //                   time={quiz.time}
// // // // //                   questions={`${quiz.questions.length} Questions`}
// // // // //                   marks={`${quiz.marks} Marks`}
// // // // //                   languages={quiz.languages.join(", ")}
// // // // //                   attempted={quiz.attempted}
// // // // //                   buttonText="Start Test"
// // // // //                   free={quiz.free}
// // // // //                   live={quiz.live}
// // // // //                   onButtonClick={() =>
// // // // //                     console.log(`Starting test for ${quiz.title}`)
// // // // //                   }
// // // // //                 />
// // // // //               ))}
// // // // //           </HorizontalScroll>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PaperLanding;

// // // // "use client";

// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import QuizCard from "./components/QuizCard";
// // // // import HorizontalScroll from "./components/HorizontalScroll";

// // // // const PaperLanding = ({ categoriesData }) => {
// // // //   // Initialize state to track currentIndex for each category
// // // //   const [currentIndexes, setCurrentIndexes] = useState(
// // // //     categoriesData.reduce((acc, _, index) => {
// // // //       acc[index] = 0; // Default to 0 for each category
// // // //       return acc;
// // // //     }, {})
// // // //   );

// // // //   // Refs for scrolling
// // // //   const scrollRefs = useRef(categoriesData.map(() => React.createRef()));

// // // //   // Get the number of visible quizzes based on screen size
// // // //   const getVisibleCount = () => {
// // // //     if (window.innerWidth >= 1024) return 4; // Desktop
// // // //     if (window.innerWidth >= 768) return 3; // Tablet
// // // //     return 2; // Mobile
// // // //   };

// // // //   // Smooth scrolling function for navigating cards
// // // //   const smoothScroll = (categoryIndex, direction) => {
// // // //     const container = scrollRefs.current[categoryIndex].current;
// // // //     const scrollAmount = container.offsetWidth / getVisibleCount(); // Scroll by card width

// // // //     if (direction === "next") {
// // // //       container.scrollBy({
// // // //         left: scrollAmount,
// // // //         behavior: "smooth",
// // // //       });
// // // //     } else {
// // // //       container.scrollBy({
// // // //         left: -scrollAmount,
// // // //         behavior: "smooth",
// // // //       });
// // // //     }
// // // //   };

// // // //   // Event handlers for moving to the previous and next sets of quizzes
// // // //   const handlePrev = (categoryIndex) => {
// // // //     smoothScroll(categoryIndex, "prev");
// // // //   };

// // // //   const handleNext = (categoryIndex) => {
// // // //     smoothScroll(categoryIndex, "next");
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-6">
// // // //       {categoriesData.map((category, categoryIndex) => (
// // // //         <div key={categoryIndex} className="mb-8">
// // // //           {/* Header Section with Scroll Buttons */}
// // // //           <div className="flex justify-between items-center mb-4">
// // // //             <h2 className="text-2xl font-bold">{category.name}</h2>
// // // //             <div className="flex space-x-2">
// // // //               <button
// // // //                 onClick={() => handlePrev(categoryIndex)}
// // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // //               >
// // // //                 <svg
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                   className="w-5 h-5 text-blue-600"
// // // //                   fill="currentColor"
// // // //                   viewBox="0 0 24 24"
// // // //                 >
// // // //                   <path d="M15.5 19l-7-7 7-7"></path>
// // // //                 </svg>
// // // //               </button>

// // // //               <button
// // // //                 onClick={() => handleNext(categoryIndex)}
// // // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // // //               >
// // // //                 <svg
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                   className="w-5 h-5 text-blue-600"
// // // //                   fill="currentColor"
// // // //                   viewBox="0 0 24 24"
// // // //                 >
// // // //                   <path d="M8.5 5l7 7-7 7"></path>
// // // //                 </svg>
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Horizontal Scroll for Category Quizzes */}
// // // //           <div
// // // //             ref={scrollRefs.current[categoryIndex]}
// // // //             className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
// // // //           >
// // // //             {category.questionsData.map((quiz, qIndex) => (
// // // //               <div
// // // //                 key={qIndex}
// // // //                 className="flex-shrink-0 w-60 px-2" // Card width to ensure proper display
// // // //               >
// // // //                 <QuizCard
// // // //                   title={quiz.title}
// // // //                   time={quiz.time}
// // // //                   questions={`${quiz.questions.length} Questions`}
// // // //                   marks={`${quiz.marks} Marks`}
// // // //                   languages={quiz.languages.join(", ")}
// // // //                   attempted={quiz.attempted}
// // // //                   buttonText="Start Test"
// // // //                   free={quiz.free}
// // // //                   live={quiz.live}
// // // //                   onButtonClick={() =>
// // // //                     console.log(`Starting test for ${quiz.title}`)
// // // //                   }
// // // //                 />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PaperLanding;

// // // "use client";

// // // import React, { useState, useRef, useEffect } from "react";
// // // import QuizCard from "./components/QuizCard";
// // // import HorizontalScroll from "./components/HorizontalScroll";

// // // const PaperLanding = ({ categoriesData }) => {
// // //   const [currentIndexes, setCurrentIndexes] = useState(
// // //     categoriesData.reduce((acc, _, index) => {
// // //       acc[index] = 0;
// // //       return acc;
// // //     }, {})
// // //   );

// // //   const scrollRefs = useRef(categoriesData.map(() => React.createRef()));

// // //   const getVisibleCount = () => {
// // //     if (window.innerWidth >= 1024) return 4;
// // //     if (window.innerWidth >= 768) return 3;
// // //     return 2;
// // //   };

// // //   const smoothScroll = (categoryIndex, direction) => {
// // //     const container = scrollRefs.current[categoryIndex].current;
// // //     const scrollAmount = container.offsetWidth / getVisibleCount();
// // //     if (direction === "next") {
// // //       container.scrollBy({
// // //         left: scrollAmount,
// // //         behavior: "smooth",
// // //       });
// // //     } else {
// // //       container.scrollBy({
// // //         left: -scrollAmount,
// // //         behavior: "smooth",
// // //       });
// // //     }
// // //   };

// // //   const handlePrev = (categoryIndex) => {
// // //     smoothScroll(categoryIndex, "prev");
// // //   };

// // //   const handleNext = (categoryIndex) => {
// // //     smoothScroll(categoryIndex, "next");
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-6">
// // //       {categoriesData.map((category, categoryIndex) => (
// // //         <div key={categoryIndex} className="mb-8">
// // //           {/* Header Section */}
// // //           <div className="flex justify-between items-center mb-4">
// // //             <h2 className="text-2xl font-bold">{category.name}</h2>
// // //             <div className="flex space-x-2">
// // //               <button
// // //                 onClick={() => handlePrev(categoryIndex)}
// // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="w-5 h-5 text-blue-600"
// // //                   fill="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M15.5 19l-7-7 7-7"></path>
// // //                 </svg>
// // //               </button>

// // //               <button
// // //                 onClick={() => handleNext(categoryIndex)}
// // //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="w-5 h-5 text-blue-600"
// // //                   fill="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M8.5 5l7 7-7 7"></path>
// // //                 </svg>
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Horizontal Scroll for Category Quizzes */}
// // //           <div
// // //             ref={scrollRefs.current[categoryIndex]}
// // //             className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
// // //           >
// // //             {category.questionsData.map((quiz, qIndex) => (
// // //               <div
// // //                 key={qIndex}
// // //                 className="flex-shrink-0 w-60 px-2" // Ensure all cards are same width
// // //               >
// // //                 <QuizCard
// // //                   title={quiz.title}
// // //                   time={quiz.time}
// // //                   questions={`${quiz.questions.length} Questions`}
// // //                   marks={`${quiz.marks} Marks`}
// // //                   languages={quiz.languages.join(", ")}
// // //                   attempted={quiz.attempted}
// // //                   buttonText="Start Test"
// // //                   free={quiz.free}
// // //                   live={quiz.live}
// // //                   onButtonClick={() =>
// // //                     console.log(`Starting test for ${quiz.title}`)
// // //                   }
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default PaperLanding;

// // "use client";

// // import React, { useState, useRef, useEffect } from "react";
// // import QuizCard from "./components/QuizCard";
// // import HorizontalScroll from "./components/HorizontalScroll";
// // import Headercopy from "@/components/Headercopy";

// // const PaperLanding = ({ categoriesData }) => {
// //   // Initialize state to track currentIndex for each category
// //   const [currentIndexes, setCurrentIndexes] = useState(
// //     categoriesData.reduce((acc, _, index) => {
// //       acc[index] = 0; // Default to 0 for each category
// //       return acc;
// //     }, {})
// //   );

// //   const scrollRefs = useRef(categoriesData.map(() => React.createRef()));

// //   // Get the number of visible quizzes based on screen size
// //   const getVisibleCount = () => {
// //     if (window.innerWidth >= 1024) return 4; // Desktop
// //     if (window.innerWidth >= 768) return 3; // Tablet
// //     return 2; // Mobile
// //   };

// //   // Smooth scrolling function for navigating cards
// //   const smoothScroll = (categoryIndex, direction) => {
// //     const container = scrollRefs.current[categoryIndex].current;
// //     const scrollAmount = container.offsetWidth / getVisibleCount(); // Scroll by card width

// //     if (direction === "next") {
// //       container.scrollBy({
// //         left: scrollAmount,
// //         behavior: "smooth",
// //       });
// //     } else {
// //       container.scrollBy({
// //         left: -scrollAmount,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   // Event handlers for moving to the previous and next sets of quizzes
// //   const handlePrev = (categoryIndex) => {
// //     smoothScroll(categoryIndex, "prev");
// //   };

// //   const handleNext = (categoryIndex) => {
// //     smoothScroll(categoryIndex, "next");
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       {/* Content Section */}
// //       {categoriesData.map((category, categoryIndex) => (
// //         <div key={categoryIndex} className="mb-8">
// //           {/* Header Section with Scroll Buttons */}
// //           <div className="flex justify-between items-center mb-4">
// //             <h2 className="text-2xl font-bold">{category.name}</h2>
// //             <div className="flex space-x-2">
// //               <button
// //                 onClick={() => handlePrev(categoryIndex)}
// //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="w-5 h-5 text-blue-600"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M15.5 19l-7-7 7-7"></path>
// //                 </svg>
// //               </button>

// //               <button
// //                 onClick={() => handleNext(categoryIndex)}
// //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="w-5 h-5 text-blue-600"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M8.5 5l7 7-7 7"></path>
// //                 </svg>
// //               </button>
// //             </div>
// //           </div>

// //           {/* Horizontal Scroll for Category Quizzes */}
// //           <div
// //             ref={scrollRefs.current[categoryIndex]}
// //             className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
// //           >
// //             {category.questionsData.map((quiz, qIndex) => (
// //               <div
// //                 key={qIndex}
// //                 className="flex-shrink-0 w-60 px-2" // Ensure all cards are same width
// //               >
// //                 <QuizCard
// //                   title={quiz.title}
// //                   time={quiz.time}
// //                   questions={`${quiz.questions.length} Questions`}
// //                   marks={`${quiz.marks} Marks`}
// //                   languages={quiz.languages.join(", ")}
// //                   attempted={quiz.attempted}
// //                   buttonText="Start Test"
// //                   free={quiz.free}
// //                   live={quiz.live}
// //                   onButtonClick={() =>
// //                     console.log(`Starting test for ${quiz.title}`)
// //                   }
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PaperLanding;

// "use client";

// import React, { useState, useRef } from "react";
// import QuizCard from "./components/QuizCard";
// import HorizontalScroll from "./components/HorizontalScroll";
// import Headercopy from "@/components/Headercopy";

// const PaperLanding = ({ categoriesData }) => {
//   // Initialize state to track currentIndex for each category
//   const [currentIndexes, setCurrentIndexes] = useState(
//     categoriesData.reduce((acc, _, index) => {
//       acc[index] = 0; // Default to 0 for each category
//       return acc;
//     }, {})
//   );

//   const scrollRefs = useRef(categoriesData.map(() => React.createRef()));

//   // Get the number of visible quizzes based on screen size
//   const getVisibleCount = () => {
//     if (window.innerWidth >= 1024) return 4; // Desktop
//     if (window.innerWidth >= 768) return 3; // Tablet
//     return 2; // Mobile
//   };

//   // Smooth scrolling function for navigating cards
//   const smoothScroll = (categoryIndex, direction) => {
//     const container = scrollRefs.current[categoryIndex].current;
//     const scrollAmount = container.offsetWidth / getVisibleCount(); // Scroll by card width

//     if (direction === "next") {
//       container.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     } else {
//       container.scrollBy({
//         left: -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Event handlers for moving to the previous and next sets of quizzes
//   const handlePrev = (categoryIndex) => {
//     smoothScroll(categoryIndex, "prev");
//   };

//   const handleNext = (categoryIndex) => {
//     smoothScroll(categoryIndex, "next");
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Include the header component */}
//       {/* <Headercopy /> */}

//       {/* Content Section */}
//       {categoriesData.map((category, categoryIndex) => (
//         <div key={categoryIndex} className="mb-8">
//           {/* Header Section with Scroll Buttons */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold">{category.name}</h2>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => handlePrev(categoryIndex)}
//                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-blue-600"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M15.5 19l-7-7 7-7"></path>
//                 </svg>
//               </button>

//               <button
//                 onClick={() => handleNext(categoryIndex)}
//                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-blue-600"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M8.5 5l7 7-7 7"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Horizontal Scroll for Category Quizzes */}
//           <div
//             ref={scrollRefs.current[categoryIndex]}
//             className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
//           >
//             {category.questionsData.map((quiz, qIndex) => (
//               <div
//                 key={qIndex}
//                 className="flex-shrink-0 w-60 px-2" // Ensure all cards are same width
//               >
//                 <QuizCard
//                   title={quiz.title}
//                   time={quiz.time}
//                   questions={`${quiz.questions.length} Questions`}
//                   marks={`${quiz.marks} Marks`}
//                   languages={quiz.languages.join(", ")}
//                   attempted={quiz.attempted}
//                   buttonText="Start Test"
//                   free={quiz.free}
//                   live={quiz.live}
//                   onButtonClick={() =>
//                     console.log(`Starting test for ${quiz.title}`)
//                   }
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PaperLanding;

"use client";

import React, { useState, useRef, useEffect } from "react";
import QuizCard from "./components/QuizCard";
import HorizontalScroll from "./components/HorizontalScroll";
import Headercopy from "@/components/Headercopy";
import PageLandingBanner from "./components/PageLandingBanner";

const PaperLanding = ({ categoriesData }) => {
  // Initialize state to track currentIndex for each category
  const [currentIndexes, setCurrentIndexes] = useState(
    categoriesData.reduce((acc, _, index) => {
      acc[index] = 0; // Default to 0 for each category
      return acc;
    }, {})
  );

  const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
  const [visibleCount, setVisibleCount] = useState(2); // Default to mobile

  // Update visible count based on window size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 5; // Desktop - more cards visible
    if (window.innerWidth >= 768) return 3; // Tablet - 3 cards visible
    return 2; // Mobile - 2 cards visible
  };

  useEffect(() => {
    // Update visible count on window resize
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the correct value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scrolling function for navigating cards
  const smoothScroll = (categoryIndex, direction) => {
    const container = scrollRefs.current[categoryIndex].current;
    const scrollAmount = container.offsetWidth / visibleCount; // Scroll by card width

    if (direction === "next") {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Event handlers for moving to the previous and next sets of quizzes
  const handlePrev = (categoryIndex) => {
    smoothScroll(categoryIndex, "prev");
  };

  const handleNext = (categoryIndex) => {
    smoothScroll(categoryIndex, "next");
  };

  return (
    <div className="container mx-auto p-6">
      {/* Content Section */}
      {categoriesData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          {/* Header Section with Scroll Buttons */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{category.name}</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePrev(categoryIndex)}
                className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button
                onClick={() => handleNext(categoryIndex)}
                className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.5 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Scroll for Category Quizzes */}
          <div
            ref={scrollRefs.current[categoryIndex]}
            className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
          >
            {category.questionsData.map((quiz, qIndex) => (
              <div
                key={qIndex}
                className="flex-shrink-0 w-60 md:w-72 lg:w-80 px-2" // Responsive width adjustments
              >
                <QuizCard
                  title={quiz.title}
                  time={quiz.time}
                  questions={`${quiz.questions.length} Questions`}
                  marks={`${quiz.marks} Marks`}
                  languages={quiz.languages.join(", ")}
                  attempted={quiz.attempted}
                  buttonText="Start Test"
                  free={quiz.free}
                  live={quiz.live}
                  onButtonClick={() =>
                    console.log(`Starting test for ${quiz.title}`)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <PageLandingBanner />
    </div>
  );
};

export default PaperLanding;
