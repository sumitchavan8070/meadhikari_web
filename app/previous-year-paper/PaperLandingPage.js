"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Sidebar from "./components/Sidebar";
import OfferStrip from "@/components/OfferStrip";
import HeroSection from "./components/HeroSection";
import SocialProofSection from "./components/SocialProofSection";
import { BASE_URL } from "@/utils/globalStrings";
import axios from "axios";

const PaperLanding = dynamic(() => import("./PaperLanding"), { ssr: false });

const PaperLandingPage = ({ categoriesData }) => {
  const [loading, setLoading] = useState(!categoriesData.length);
  const [showMoveToTop, setShowMoveToTop] = useState(false);

  const categoryRefs = useRef([]);

  useEffect(() => {
    if (!categoriesData.length) {
      fetchAllData();
    }
  }, [categoriesData]);

  const fetchAllData = async () => {
    try {
      setLoading(true);

      // Fetch categories
      const categoryResponse = await axios.get(
        `${BASE_URL}/exam-categories/get-all-exam-category`
      );
      const categories = categoryResponse.data.map(
        ({ _id, catName, catShortName, image, categoryNumber }) => ({
          _id,
          name: catName.trim(),
          shortName: catShortName || "",
          image,
          categoryNumber,
          questionsData: [],
        })
      );

      // Fetch paper metadata for each category
      const papersPromises = categories.map((category) =>
        axios.get(`${BASE_URL}/papers/web/${category._id}`)
      );
      const papersResponses = await Promise.all(papersPromises);

      // Enrich categories with paper metadata
      const enrichedCategories = categories.map((category, index) => {
        const papersMetadata = papersResponses[index].data;

        // Sort papers by QPYear in ascending order
        const sortedPapers = papersMetadata.sort((a, b) => b.QPYear - a.QPYear);

        const questionsData = sortedPapers.map((paper) => ({
          title: paper.questionPaperName || paper.subCatName,
          time: 60,
          marks: paper.questionsLength,
          questions: paper.questionsLength,
          languages: ["Marathi"],
          free: true,
          live: paper.QPYear === new Date().getFullYear().toString(),
          paper: paper,
        }));

        return { ...category, questionsData };
      });

      setCategoriesData(enrichedCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    setShowMoveToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
        <OfferStrip />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof Section */}
      {/* <SocialProofSection /> */}

      <div className="relative bg-[linear-gradient(107.12deg,_#E6F3FF_4.81%,_#CCE7FF_96.97%)] py-12 shadow-md sticky top-0 z-10 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)] animate-pulse opacity-50"></div>

        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 relative z-10">
          {loading
            ? [...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded-3xl border-2 border-gray-200 animate-pulse"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 border-2 border-gray-300"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>
              ))
            : categoriesData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (categoryRefs.current[index]) {
                      categoryRefs.current[index].scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  aria-label={`Navigate to ${category.name}`}
                  className="group relative flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 ease-in-out overflow-hidden border-2 border-transparent group-hover:border-[#1BA9BC] group-focus:border-[#1BA9BC]"
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Pulsing Glow Effect */}
                  <div className="absolute inset-0 bg-[rgba(255,255,255,0.2)] rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>

                  {/* Category Icon */}
                  <div className="relative flex items-center justify-center mb-4 w-20 h-20">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-[rgba(255,255,255,0.2)] rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Category Name */}
                  <span className="text-xl font-bold text-black text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-105">
                    {category.shortName}
                  </span>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg">
                    {category.name}
                  </div>

                  {/* 3D Hover Effect */}
                  <div className="group-hover:rotateX-[-10deg] group-hover:rotateY-[10deg] transition-transform duration-500 ease-in-out"></div>
                </button>
              ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:flex-row w-full">
        <aside className="lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
          <Sidebar />
        </aside>

        {/* <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full"> */}
        <main className="flex-1 w-full bg-white rounded-lg shadow-md pb-24">
          {loading
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="mb-12 bg-gray-200 animate-pulse h-48 rounded-lg"
                ></div>
              ))
            : categoriesData.map((category, index) => (
                <div
                  key={index}
                  ref={(el) => (categoryRefs.current[index] = el)}
                  className="mb-12"
                >
                  <PaperLanding categoriesData={[category]} />
                </div>
              ))}
        </main>
      </div>

      {showMoveToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default PaperLandingPage;
