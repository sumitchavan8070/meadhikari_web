import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "./components/QuizCard";
import { useQuestions } from "@/Context/QuestionsContext";
import { useAuth } from "@/Context/AuthContext";
import axios from "axios";
import LoginPopup from "@/components/LoginPopup";
import { BASE_URL } from "@/utils/globalStrings";
import SubscriptionPopup from "./components/SubscriptionPopup";

const PaperLanding = ({ categoriesData: initialCategoriesData }) => {
  const { user } = useAuth();
  const { setQuestions } = useQuestions();

  // Add random attempted counts
  const categoriesData = initialCategoriesData.map((category) => ({
    ...category,
    questionsData: category.questionsData.map((quiz) => ({
      ...quiz,
      attempted: `${(Math.random() * 4 + 1).toFixed(1)}k`, // Generate random numbers between 1.0k and 10.0k
    })),
  }));

  const [currentIndexes, setCurrentIndexes] = useState(
    categoriesData.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );
  const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
  const [visibleCount, setVisibleCount] = useState(2);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loadingCard, setLoadingCard] = useState(null);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false); // State for subscription popup
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

  const handleStartTest = async (catID, subcatId, yearId, cardIndex) => {
    if (!user) {
      setIsLoginOpen(true);
      return;
    }

    setLoadingCard(cardIndex);

    try {
      const response = await axios.get(`${BASE_URL}/${user._id}`);
      const { isSubscriptionActive } = response.data.user;

      if (isSubscriptionActive) {
        // Fetch questions dynamically based on catID, subcatId, and yearId
        const questionsResponse = await axios.get(
          `${BASE_URL}/papers/${catID}/${subcatId}/${yearId}`
        );

        // Set the fetched questions in the context or state
        setQuestions(questionsResponse.data.questions);

        // Redirect to the test page
        router.push(`/test`);
      } else {
        setIsSubscriptionPopupOpen(true);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      alert("Failed to fetch questions. Please try again later.");
    } finally {
      setLoadingCard(null);
    }
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  const closeSubscriptionPopup = () => {
    setIsSubscriptionPopupOpen(false); // Close subscription popup
  };

  const redirectToPricing = () => {
    setIsSubscriptionPopupOpen(false); // Close the popup
    router.push("/pricing"); // Redirect to the pricing page
  };

  return (
    <div className="container mx-auto p-6">
      {categoriesData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          {/* Category Header with Arrows */}
          <div className="flex items-center justify-between mb-4">
            {/* Category Name */}
            <h2 className="text-2xl font-bold">{category.name}</h2>

            {/* Arrows */}
            <div className="flex space-x-2">
              {/* Left Arrow */}
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                onClick={() => smoothScroll(categoryIndex, "prev")}
                aria-label="Scroll Left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                onClick={() => smoothScroll(categoryIndex, "next")}
                aria-label="Scroll Right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Quiz Cards */}
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
                    questions={`${quiz.questions} Questions`} // Display the number of questions
                    marks={`${quiz.marks} Marks`}
                    languages={quiz.languages.join(", ")}
                    attempted={quiz.attempted}
                    buttonText={
                      loadingCard === qIndex ? "Loading..." : "Start Test"
                    }
                    free={quiz.free}
                    live={quiz.live}
                    onButtonClick={() =>
                      handleStartTest(
                        quiz.paper.catID,
                        quiz.paper.subCatId,
                        quiz.paper.yearId,
                        qIndex
                      )
                    }
                    paper={quiz.paper}
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

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />

      {/* Subscription Popup */}
      {isSubscriptionPopupOpen && (
        <SubscriptionPopup
          onClose={closeSubscriptionPopup}
          onRedirect={redirectToPricing}
        />
      )}
    </div>
  );
};

export default PaperLanding;
