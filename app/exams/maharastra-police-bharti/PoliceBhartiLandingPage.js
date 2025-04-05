"use client"; // Mark this as a Client Component

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "@/app/previous-year-paper/components/QuizCard";
import { useAuth } from "@/Context/AuthContext";
import { BASE_URL, FREE_QUIZ_NUMBER } from "@/utils/globalStrings";
import SubscriptionPopup from "@/app/previous-year-paper/components/SubscriptionPopup";
import LoginPopup from "@/components/LoginPopup";
import axios from "axios";
import { useQuestions } from "@/Context/QuestionsContext";
import HeroSection from "./HeroSection";
import PageContentSection from "./PageContentSection";
import LogoSlider from "@/components/LogoSlider";

const PoliceBhartiLandingPage = ({ questionsData = [] }) => {
  // const { user } = useAuth();
  const { user, openLoginPopup } = useAuth();

  const { updatePaperMeta, setQuestions } = useQuestions(); // Use the QuestionsContext
  const router = useRouter();

  const [isGridView, setIsGridView] = useState(true); // Toggle between grid and list view
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false); // Subscription status
  // const [isLoginOpen, setIsLoginOpen] = useState(false); // Login modal state
  const [loadingCard, setLoadingCard] = useState(null); // Loading state for quiz cards
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false); // Subscription popup state

  // State to store enriched data with random attempted counts
  const [enrichedQuestionsData, setEnrichedQuestionsData] = useState([]);

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

  // Smooth scrolling function
  const smoothScroll = (direction) => {
    const container = scrollRefs.current[0].current;
    const scrollAmount = container.offsetWidth / visibleCount;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleStartTest = async (catID, subcatId, yearId, cardIndex, paper) => {
    if (!user) {
      // setIsLoginOpen(true);
      openLoginPopup();
      return;
    }

    setLoadingCard(cardIndex);

    try {
      if (cardIndex < FREE_QUIZ_NUMBER || isSubscriptionActive) {
        // First, fetch all categories
        const categoriesResponse = await axios.get(
          `${BASE_URL}/exam-categories/get-all-exam-category`
        );
        const allCategories = categoriesResponse.data;

        // Find the specific category by ID
        const categoryDetail = allCategories.find((cat) => cat._id === catID);

        // Then proceed with your existing paper fetch
        const { data } = await axios.get(
          `${BASE_URL}/papers/${catID}/${subcatId}/${yearId}`
        );

        setQuestions(data.questions);
        updatePaperMeta({
          name: paper?.title,
          logo: categoryDetail.image,
          year: paper?.paper?.QPYear,
        });

        router.push("/test");
      } else {
        setIsSubscriptionPopupOpen(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      updatePaperMeta({
        name: "Error Loading Paper",
        logo: "/default-error-logo.png",
      });
    } finally {
      setLoadingCard(null);
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

            <div className="flex items-center space-x-3">
              {!isGridView && (
                <>
                  <button
                    className="p-2 rounded-full bg-white shadow-[0_4px_15px_rgba(5,90,171,0.15)] hover:shadow-[0_6px_20px_rgba(5,90,171,0.25)] transition-all duration-300 border border-[rgba(5,90,171,0.2)]"
                    onClick={() => smoothScroll(categoryIndex, "prev")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-[#055AAB]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="p-2 rounded-full bg-white shadow-[0_4px_15px_rgba(5,90,171,0.15)] hover:shadow-[0_6px_20px_rgba(5,90,171,0.25)] transition-all duration-300 border border-[rgba(5,90,171,0.2)]"
                    onClick={() => smoothScroll(categoryIndex, "next")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-[#055AAB]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* View Toggle Button */}
              <button
                onClick={() => setIsGridView(!isGridView)}
                className="p-2 rounded-full bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)] text-white shadow-md hover:opacity-90 transition-opacity duration-300"
                aria-label={
                  isGridView ? "Switch to carousel view" : "Switch to grid view"
                }
              >
                {isGridView ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
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
            className={`relative ${
              isGridView
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
                : "flex overflow-x-auto scrollbar-hide pb-4"
            }`}
          >
            {enrichedQuestionsData.length > 0 ? (
              enrichedQuestionsData.map((quiz, qIndex) => (
                <div
                  key={qIndex}
                  className={
                    isGridView
                      ? "w-full"
                      : "flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] px-2"
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
                        : "Start Test 🔐"
                    }
                    free={quiz.free}
                    live={quiz.live}
                    onButtonClick={() =>
                      handleStartTest(
                        quiz.paper.catID,
                        quiz.paper.subCatId,
                        quiz.paper.yearId,
                        qIndex,
                        quiz
                      )
                    }
                    paper={quiz.paper}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full flex justify-center items-center bg-gradient-to-br from-[#f7faff] to-[#e6f1ff] text-gray-600 w-full h-[200px] rounded-xl shadow-inner">
                <p className="text-lg md:text-xl font-medium text-[#055AAB]">
                  No question papers found for this category.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Login Popup */}
        {/* <LoginPopup
          isOpen={isLoginOpen}
          closePopup={() => setIsLoginOpen(false)}
        /> */}

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
