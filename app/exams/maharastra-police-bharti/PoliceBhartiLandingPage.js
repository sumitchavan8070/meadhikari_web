"use client"; // Mark this as a Client Component

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "@/app/previous-year-paper/components/QuizCard";
import { useAuth } from "@/Context/AuthContext";
import { BASE_URL } from "@/utils/globalStrings";
import SubscriptionPopup from "@/app/previous-year-paper/components/SubscriptionPopup";
import LoginPopup from "@/components/LoginPopup";
import axios from "axios";
import { useQuestions } from "@/Context/QuestionsContext";
import HeroSection from "./HeroSection";
import PageContentSection from "./PageContentSection";
import LogoSlider from "@/components/LogoSlider";

const PoliceBhartiLandingPage = ({ questionsData = [] }) => {
  const { user } = useAuth();
  const { setQuestions } = useQuestions(); // Use the QuestionsContext
  const router = useRouter();

  const [isGridView, setIsGridView] = useState(true); // Toggle between grid and list view
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false); // Subscription status
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Login modal state
  const [loadingCard, setLoadingCard] = useState(null); // Loading state for quiz cards
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false); // Subscription popup state
  const FREE_QUIZ_NUMBER = 2; // Number of free quizzes available

  // State to store enriched data with random attempted counts
  const [enrichedQuestionsData, setEnrichedQuestionsData] = useState([]);

  // Validate data structure
  if (!Array.isArray(questionsData) || questionsData.length === 0) {
    return (
      <div className="flex justify-center items-center bg-gray-100 text-gray-600 w-full h-[50vh] rounded-lg shadow-md">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold">
          No quizzes available.
        </p>
      </div>
    );
  }

  // Fetch subscription status when the component mounts or when the user changes
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      if (user) {
        try {
          const response = await axios.get(`${BASE_URL}/${user._id}`);
          setIsSubscriptionActive(response.data.user.isSubscriptionActive);
        } catch (error) {
          console.error("Error fetching subscription status:", error);
        }
      }
    };

    fetchSubscriptionStatus();
  }, [user]);

  // Enrich questionsData with random attempted counts on the client side
  useEffect(() => {
    const enrichedData = questionsData.map((quiz) => ({
      ...quiz,
      attempted: `${(Math.random() * 4 + 1).toFixed(1)}k`,
    }));
    setEnrichedQuestionsData(enrichedData);
  }, [questionsData]);

  const scrollRefs = useRef([React.createRef()]);
  const [visibleCount, setVisibleCount] = useState(2);

  // Dynamically adjust visible count based on screen size
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

  // Smooth scrolling function
  const smoothScroll = (direction) => {
    const container = scrollRefs.current[0].current;
    const scrollAmount = container.offsetWidth / visibleCount;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Handle quiz card button click
  const handleStartTest = async (catID, subCatId, yearId, cardIndex) => {
    if (!user) {
      setIsLoginOpen(true); // Open login modal if the user is not logged in
      return;
    }

    setLoadingCard(cardIndex); // Set loading state for the clicked card

    try {
      if (cardIndex < FREE_QUIZ_NUMBER || isSubscriptionActive) {
        const questionsResponse = await axios.get(
          `${BASE_URL}/papers/${catID}/${subCatId}/${yearId}`
        );

        // Set the fetched questions in the global context
        setQuestions(questionsResponse.data.questions);

        // Redirect to the test page
        router.push(`/test`);
      } else {
        setIsSubscriptionPopupOpen(true); // Open subscription popup if the quiz is locked
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      alert("Failed to fetch questions. Please try again later.");
    } finally {
      setLoadingCard(null); // Reset loading state
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      <LogoSlider />

      <PageContentSection />

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold"></h2>

            <div className="flex space-x-2 items-center">
              {!isGridView && (
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 shadow-md"
                  onClick={() => smoothScroll("prev")}
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
              )}

              {!isGridView && (
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 shadow-md"
                  onClick={() => smoothScroll("next")}
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
              )}

              {/* Grid View Toggle Button */}
              <button
                className={`${
                  isGridView
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white rounded-full p-2 shadow-md transition-all duration-300 focus:outline-none`}
                onClick={() => setIsGridView(!isGridView)}
              >
                {isGridView ? (
                  // List View Icon (Switch to Carousel)
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  // Grid View Icon (Switch to Grid)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            ref={scrollRefs.current[0]}
            className={`transition-all ${
              isGridView
                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                : "flex overflow-x-auto scrollbar-hide space-x-4"
            }`}
          >
            {enrichedQuestionsData.length > 0 ? (
              enrichedQuestionsData.map((quiz, qIndex) => (
                <div
                  key={qIndex}
                  className={
                    isGridView
                      ? "w-full"
                      : "flex-shrink-0 w-60 md:w-72 lg:w-80 px-2"
                  }
                >
                  <QuizCard
                    title={quiz.title}
                    time={`${quiz.time} min`}
                    questions={`${quiz.questions} Questions`}
                    marks={`${quiz.marks} Marks`}
                    languages={quiz.languages.join(", ")}
                    attempted={quiz.attempted}
                    buttonText={
                      loadingCard === qIndex
                        ? "Loading..."
                        : qIndex < FREE_QUIZ_NUMBER || isSubscriptionActive
                        ? "Start Test"
                        : "Unlock All @20/Day🔐"
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
              ))
            ) : (
              <div className="flex justify-center items-center bg-gray-100 text-gray-600 w-full h-[25vh] md:h-[30vh] lg:h-[35vh] rounded-lg shadow-md">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                  No quizzes available.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Login Popup */}
        <LoginPopup
          isOpen={isLoginOpen}
          closePopup={() => setIsLoginOpen(false)}
        />

        {/* Subscription Popup */}
        {isSubscriptionPopupOpen && (
          <SubscriptionPopup
            onClose={() => setIsSubscriptionPopupOpen(false)}
            onRedirect={() => router.push("/pricing")}
          />
        )}
      </div>
    </div>
  );
};

export default PoliceBhartiLandingPage;
