// // "use client";

// // import React, { useState, useRef, useEffect } from "react";
// // import QuizCard from "./components/QuizCard";
// // import HorizontalScroll from "./components/HorizontalScroll";
// // import Headercopy from "@/components/Headercopy";
// // import PageLandingBanner from "./components/PageLandingBanner";

// // const PaperLanding = ({ categoriesData }) => {
// //   // Initialize state to track currentIndex for each category
// //   const [currentIndexes, setCurrentIndexes] = useState(
// //     categoriesData.reduce((acc, _, index) => {
// //       acc[index] = 0; // Default to 0 for each category
// //       return acc;
// //     }, {})
// //   );

// //   const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
// //   const [visibleCount, setVisibleCount] = useState(2); // Default to mobile

// //   // Update visible count based on window size
// //   const getVisibleCount = () => {
// //     if (window.innerWidth >= 1024) return 5; // Desktop - more cards visible
// //     if (window.innerWidth >= 768) return 3; // Tablet - 3 cards visible
// //     return 2; // Mobile - 2 cards visible
// //   };

// //   useEffect(() => {
// //     // Update visible count on window resize
// //     const handleResize = () => {
// //       setVisibleCount(getVisibleCount());
// //     };

// //     window.addEventListener("resize", handleResize);
// //     handleResize(); // Call it initially to set the correct value

// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   // Smooth scrolling function for navigating cards
// //   const smoothScroll = (categoryIndex, direction) => {
// //     const container = scrollRefs.current[categoryIndex].current;
// //     const scrollAmount = container.offsetWidth / visibleCount; // Scroll by card width

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

// //   const handleStartTest = (questionsData) => {
// //     // Navigate to the test page with the questions data in query params
// //     const encodedQuestionsData = encodeURIComponent(
// //       JSON.stringify(questionsData)
// //     );
// //     router.push(`/test?questions=${encodedQuestionsData}`);
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
// //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
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
// //                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
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
// //                 className="flex-shrink-0 w-60 md:w-72 lg:w-80 px-2" // Responsive width adjustments
// //               >
// //                 <QuizCard
// //                   title={quiz.title}
// //                   time={`${quiz.time} min`}
// //                   questions={`${quiz.questions} Questions`}
// //                   marks={`${quiz.marks} Marks`}
// //                   languages={quiz.languages.join(", ")}
// //                   attempted={quiz.attempted}
// //                   buttonText="Start Test"
// //                   free={quiz.free}
// //                   live={quiz.live}
// //                   onButtonClick={() => {
// //                     console.log("Questions:", quiz.paper.questions); // Log the questions data when the test starts
// //                   }}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}

// //       <PageLandingBanner />
// //     </div>
// //   );
// // };

// // export default PaperLanding;

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation"; // Make sure to import from next/navigation
// import QuizCard from "./components/QuizCard";
// import HorizontalScroll from "./components/HorizontalScroll";
// import Headercopy from "@/components/Headercopy";
// import PageLandingBanner from "./components/PageLandingBanner";
// import Page from "../test/page";
// import { useQuestions } from "@/Context/QuestionsContext";

// const PaperLanding = ({ categoriesData }) => {
//   const { setQuestions } = useQuestions();

//   const [currentIndexes, setCurrentIndexes] = useState(
//     categoriesData.reduce((acc, _, index) => {
//       acc[index] = 0; // Default to 0 for each category
//       return acc;
//     }, {})
//   );

//   const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
//   const [visibleCount, setVisibleCount] = useState(2); // Default to mobile

//   // Initialize the router here within the client-side rendering context
//   const router = useRouter();

//   useEffect(() => {
//     // Update visible count based on window size
//     const getVisibleCount = () => {
//       if (window.innerWidth >= 1024) return 5; // Desktop
//       if (window.innerWidth >= 768) return 3; // Tablet
//       return 2; // Mobile
//     };

//     const handleResize = () => {
//       setVisibleCount(getVisibleCount());
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Call it initially to set the correct value

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Smooth scrolling function for navigating cards
//   const smoothScroll = (categoryIndex, direction) => {
//     const container = scrollRefs.current[categoryIndex].current;
//     const scrollAmount = container.offsetWidth / visibleCount; // Scroll by card width

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

//   const handleStartTest = (questionsData) => {
//     setQuestions(questionsData); // Save questions data in the context
//     router.push(`/test`); // Navigate to the test page
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Content Section */}
//       {categoriesData.map((category, categoryIndex) => (
//         <div key={categoryIndex} className="mb-8">
//           {/* Header Section with Scroll Buttons */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold">{category.name}</h2>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => handlePrev(categoryIndex)}
//                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
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
//                 className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
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
//                 className="flex-shrink-0 w-60 md:w-72 lg:w-80 px-2" // Responsive width adjustments
//               >
//                 <QuizCard
//                   title={quiz.title}
//                   time={`${quiz.time} min`}
//                   questions={`${quiz.questions} Questions`}
//                   marks={`${quiz.marks} Marks`}
//                   languages={quiz.languages.join(", ")}
//                   attempted={quiz.attempted}
//                   buttonText="Start Test"
//                   free={quiz.free}
//                   live={quiz.live}
//                   onButtonClick={() => {
//                     // Pass the questions data to the handleStartTest function
//                     handleStartTest(quiz.paper.questions);
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       <PageLandingBanner />
//     </div>
//   );
// };

// export default PaperLanding;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "./components/QuizCard";
import PageLandingBanner from "./components/PageLandingBanner";
import { useQuestions } from "@/Context/QuestionsContext";

const PaperLanding = ({ categoriesData }) => {
  const { setQuestions } = useQuestions();

  const [currentIndexes, setCurrentIndexes] = useState(
    categoriesData.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
  const [visibleCount, setVisibleCount] = useState(2);

  const router = useRouter();

  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 3;
      return 2;
    };

    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScroll = (categoryIndex, direction) => {
    const container = scrollRefs.current[categoryIndex].current;
    const scrollAmount = container.offsetWidth / visibleCount;

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

  const handlePrev = (categoryIndex) => {
    smoothScroll(categoryIndex, "prev");
  };

  const handleNext = (categoryIndex) => {
    smoothScroll(categoryIndex, "next");
  };

  const handleStartTest = (questionsData) => {
    setQuestions(questionsData);
    router.push(`/test`);
  };

  return (
    <div className="container mx-auto p-6">
      {categoriesData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
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

          {category.questionsData.length > 0 ? (
            <div
              ref={scrollRefs.current[categoryIndex]}
              className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
            >
              {category.questionsData.map((quiz, qIndex) => (
                <div
                  key={qIndex}
                  className="flex-shrink-0 w-60 md:w-72 lg:w-80 px-2"
                >
                  <QuizCard
                    title={quiz.title}
                    time={`${quiz.time} min`}
                    questions={`${quiz.questions} Questions`}
                    marks={`${quiz.marks} Marks`}
                    languages={quiz.languages.join(", ")}
                    attempted={quiz.attempted}
                    buttonText="Start Test"
                    free={quiz.free}
                    live={quiz.live}
                    onButtonClick={() => {
                      handleStartTest(quiz.paper.questions);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-600 w-full h-[25vh] md:h-[30vh] lg:h-[35vh] rounded-lg shadow-md">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center px-4">
                No question papers found for this category.
              </p>
            </div>
          )}
        </div>
      ))}

      <PageLandingBanner />
    </div>
  );
};

export default PaperLanding;
