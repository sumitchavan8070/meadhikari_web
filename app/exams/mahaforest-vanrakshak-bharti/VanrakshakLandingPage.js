"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";
import { BASE_URL, FREE_QUIZ_NUMBER } from "@/utils/globalStrings";
import SubscriptionPopup from "@/app/previous-year-paper/components/SubscriptionPopup";
import axios from "axios";
import { useQuestions } from "@/Context/QuestionsContext";
import dynamic from "next/dynamic";
import BenefitsSection from "./components/BenefitsSection";
import ConversionBanner from "./components/ConversionBanner";
import TestimonialSection from "./components/TestimonialSection";

// Lazy load heavy components
const HeroSection = dynamic(() => import("./HeroSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
});
const PageContentSection = dynamic(() => import("./PageContentSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});
const LogoSlider = dynamic(() => import("@/components/LogoSlider"), {
  loading: () => <div className="h-24 bg-gray-100 animate-pulse rounded-lg" />,
});

const VanrakshakLandingPage = ({ questionsData = [] }) => {
  const { user, openLoginPopup } = useAuth();
  const { updatePaperMeta, setQuestions } = useQuestions();
  const router = useRouter();

  const [isGridView, setIsGridView] = useState(true);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  const [loadingCard, setLoadingCard] = useState(null);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);

  const scrollRefs = useRef([React.createRef()]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const enrichedQuestionsData = useMemo(() => {
    return questionsData.map((quiz) => ({
      ...quiz,
      attempted: `${(Math.random() * 4 + 1).toFixed(1)}k`,
    }));
  }, [questionsData]);

  useEffect(() => {
    let isMounted = true;
    const fetchSubscriptionStatus = async () => {
      if (user && isMounted) {
        try {
          const response = await axios.get(`${BASE_URL}/${user._id}`);
          if (isMounted) {
            setIsSubscriptionActive(response.data.user.isSubscriptionActive);
          }
        } catch (error) {
          console.error("Error fetching subscription status:", error);
        }
      }
    };

    fetchSubscriptionStatus();
    return () => {
      isMounted = false;
    };
  }, [user]);

  useEffect(() => {
    const getVisibleCount = () => {
      if (typeof window === "undefined") return 2;
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 3;
      return 2;
    };

    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisibleCount(getVisibleCount());
      }, 150);
    };

    if (typeof window !== "undefined") {
      setVisibleCount(getVisibleCount());
      window.addEventListener("resize", handleResize);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const smoothScroll = useCallback((direction) => {
    const container = scrollRefs.current[0]?.current;
    if (!container) return;
    
    const scrollAmount = container.offsetWidth / visibleCount;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, [visibleCount]);

  const handleStartTest = useCallback(async (catID, subcatId, yearId, cardIndex, paper) => {
    if (!user) {
      openLoginPopup();
      return;
    }

    setLoadingCard(cardIndex);
    setIsLoading(true);

    try {
      if (cardIndex < FREE_QUIZ_NUMBER || isSubscriptionActive) {
        const [categoriesResponse, papersResponse] = await Promise.all([
          axios.get(`${BASE_URL}/exam-categories/get-all-exam-category`),
          axios.get(`${BASE_URL}/papers/${catID}/${subcatId}/${yearId}`)
        ]);

        const allCategories = categoriesResponse.data;
        const categoryDetail = allCategories.find((cat) => cat._id === catID);

        setQuestions(papersResponse.data.questions);
        updatePaperMeta({
          name: paper?.title,
          logo: categoryDetail?.image || "/default-error-logo.png",
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
      setIsLoading(false);
    }
  }, [user, isSubscriptionActive, openLoginPopup, router, setQuestions, updatePaperMeta]);

  const toggleGridView = useCallback(() => {
    setIsGridView(prev => !prev);
  }, []);

  const handlePrev = useCallback(() => smoothScroll("prev"), [smoothScroll]);
  const handleNext = useCallback(() => smoothScroll("next"), [smoothScroll]);

  if (!Array.isArray(questionsData) || questionsData.length === 0) {
    return (
      <div className="flex justify-center items-center bg-gray-100 text-gray-600 w-full h-[50vh] rounded-lg shadow-md">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold">
          No quizzes available.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      
      <LogoSlider />

      <PageContentSection questionsData={enrichedQuestionsData} />

      {/* Conversion Banner */}
      <ConversionBanner isSubscriptionActive={isSubscriptionActive} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Final CTA Section */}
      {!isSubscriptionActive && (
        <section className="bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] py-16 sm:py-20 md:py-24 mt-12 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400 text-yellow-900 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 animate-pulse">
              🎯 Limited Time Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              Ready to Ace Your Exam?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
              Join <span className="font-bold text-white">{enrichedQuestionsData.length * 100}+</span> successful candidates. Get unlimited access to all papers today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-2">
              <button
                onClick={() => router.push("/pricing")}
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-[#055AAB] font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-auto"
              >
                Get Full Access Now →
              </button>
              <button
                onClick={() => {
                  setTimeout(() => {
                    const element = document.querySelector('[data-section="tabs"]');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-auto"
              >
                Browse Papers First
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-100 px-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {isSubscriptionPopupOpen && (
        <SubscriptionPopup
          onClose={() => setIsSubscriptionPopupOpen(false)}
          onRedirect={() => router.push("/pricing")}
        />
      )}
    </div>
  );
};

export default VanrakshakLandingPage;
