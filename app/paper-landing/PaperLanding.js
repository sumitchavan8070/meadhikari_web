"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "./components/QuizCard";
import PageLandingBanner from "./components/PageLandingBanner";
import { useQuestions } from "@/Context/QuestionsContext";
import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook
import LoginPopup from "@/components/LoginPopup";

const PaperLanding = ({ categoriesData }) => {
  const { user } = useAuth(); // Access the logged-in user data from AuthContext
  const { setQuestions } = useQuestions();

  const [currentIndexes, setCurrentIndexes] = useState(
    categoriesData.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
  const [visibleCount, setVisibleCount] = useState(2);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control login popup visibility

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
    if (!user) {
      // If the user is not logged in, open the login popup
      setIsLoginOpen(true);
    } else {
      // If the user is logged in, proceed with starting the test
      setQuestions(questionsData);
      router.push(`/test`);
    }
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false); // Function to close the login popup
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
                      // handleStartTest(quiz.paper.questions);
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

      {/* <PageLandingBanner /> */}

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />
    </div>
  );
};

export default PaperLanding;
