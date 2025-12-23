import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "./components/QuizCard";
import { useQuestions } from "@/Context/QuestionsContext";
import { useAuth } from "@/Context/AuthContext";
import axios from "axios";
import LoginPopup from "@/components/LoginPopup";
import { BASE_URL, FREE_QUIZ_NUMBER } from "@/utils/globalStrings";
import SubscriptionPopup from "./components/SubscriptionPopup";
import ConversionBanner from "./components/ConversionBanner";

const PaperLanding = ({ categoriesData: initialCategoriesData }) => {
  // const { user } = useAuth();
  const { user, openLoginPopup } = useAuth();

  const { updatePaperMeta, setQuestions } = useQuestions();
  const router = useRouter();
  //
  const [isGridView, setIsGridView] = useState(false);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loadingCard, setLoadingCard] = useState(null);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);
  const [showStickyBanner, setShowStickyBanner] = useState(false);

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

  // Show sticky banner on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBanner(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoriesData = initialCategoriesData.map((category) => ({
    ...category,
    questionsData: category.questionsData.map((quiz) => ({
      ...quiz,
      attempted: `${(Math.random() * 4 + 1).toFixed(1)}k`,
    })),
  }));

  const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth >= 1280) return 5;
      if (window.innerWidth >= 1024) return 4;
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

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleStartTest = async (catID, subcatId, yearId, cardIndex, paper) => {
    // Check if this is a premium card and user doesn't have subscription
    const isPremiumCard = cardIndex >= FREE_QUIZ_NUMBER && !isSubscriptionActive;

    // If user is not logged in, show login popup
    if (!user) {
      openLoginPopup();
      return;
    }

    // If it's a premium card and user doesn't have subscription, show subscription popup
    if (isPremiumCard) {
      setIsSubscriptionPopupOpen(true);
      return;
    }

    // Otherwise, proceed with loading the test
    setLoadingCard(cardIndex);

    try {
      const { data } = await axios.get(
        `${BASE_URL}/papers/${catID}/${subcatId}/${yearId}`
      );
      setQuestions(data.questions);
      updatePaperMeta({
        name: paper?.title,
        logo: categoriesData[0].image,
        year: paper?.paper?.QPYear,
      });

      router.push("/test");
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
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      {/* Conversion Banner - Show after first category */}
      {categoriesData.length > 0 && (
        <div className="mb-8" data-category>
          <ConversionBanner />
        </div>
      )}

      {categoriesData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          {/* Category Header with Navigation */}
          <div className="flex items-center justify-between mb-6 px-2" data-category>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#2966C1_96.97%)] mb-2">
                {category.name}
              </h2>
              <p className="text-sm text-gray-600">
                {category.questionsData.length} papers available
                {category.questionsData.length > FREE_QUIZ_NUMBER && (
                  <span className="ml-2">
                    • {FREE_QUIZ_NUMBER} free •{" "}
                    {category.questionsData.length - FREE_QUIZ_NUMBER} premium
                  </span>
                )}
              </p>
            </div>

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
            ref={scrollRefs.current[categoryIndex]}
            className={`relative ${
              isGridView
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
                : "flex overflow-x-auto pb-4 scroll-custom"
            }`}
          >
            {category.questionsData.length > 0 ? (
              category.questionsData.map((quiz, qIndex) => (
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
                        : "Unlock Premium"
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
                    onUnlockClick={() =>
                      handleStartTest(
                        quiz.paper.catID,
                        quiz.paper.subCatId,
                        quiz.paper.yearId,
                        qIndex,
                        quiz
                      )
                    }
                    paper={quiz.paper}
                    cardIndex={qIndex}
                    isSubscriptionActive={isSubscriptionActive}
                    FREE_QUIZ_NUMBER={FREE_QUIZ_NUMBER}
                    user={user}
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

          <style jsx>{`
            /* Custom Scrollbar Styles */
            .scroll-custom::-webkit-scrollbar {
              height: 3px; /* Set the height of the horizontal scrollbar */
            }

            .scroll-custom::-webkit-scrollbar-thumb {
              background-color: #055aab; /* Set the thumb color */
              border-radius: 4px; /* Rounded corners for the thumb */
            }

            .scroll-custom::-webkit-scrollbar-track {
              background-color: #f0f4f8; /* Set the track color */
            }

            /* Smooth scrolling behavior */
            .scroll-custom {
              scroll-behavior: smooth;
            }
          `}</style>
        </div>
      ))}

      {/* <LoginPopup
        isOpen={isLoginOpen}
        closePopup={() => setIsLoginOpen(false)}
      /> */}
      {isSubscriptionPopupOpen && (
        <SubscriptionPopup
          onClose={() => setIsSubscriptionPopupOpen(false)}
          onRedirect={() => router.push("/pricing")}
        />
      )}

      {/* Sticky Conversion Banner - Only show when scrolled */}
      {showStickyBanner && !isSubscriptionActive && (
        <ConversionBanner variant="sticky" />
      )}
    </div>
  );
};

export default PaperLanding;
