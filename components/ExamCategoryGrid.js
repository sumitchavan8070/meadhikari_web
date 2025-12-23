"use client";

import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";
import Image from "next/image";
import { useState, useEffect } from "react";

const ExamCategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const categoryResponse = await axios.get(
          `${BASE_URL}/exam-categories/get-all-exam-category`
        );

        const formattedCategories = categoryResponse.data.map(
          ({
            _id,
            catName,
            catShortName,
            image,
            categoryNumber,
            landingPageSlug,
          }) => ({
            _id,
            name: catName.trim(),
            shortName: catShortName || "",
            image,
            categoryNumber,
            landingPageSlug,
          })
        );

        setCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    if (category.landingPageSlug) {
      window.location.href = `/exams/${category.landingPageSlug}`;
    } else {
      window.location.href = `/previous-year-paper`;
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#F4F9FD] to-[#E6F2FF] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            📚 All Exam Categories
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] mb-4">
            Explore Exam Categories
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Comprehensive collection of exam preparation resources for Maharashtra Government Exams
          </p>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {loading
            ? // Skeleton Loading State
              Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between h-full min-h-[160px] sm:min-h-[180px] md:min-h-[200px] p-3 sm:p-4 bg-white rounded-xl shadow-[0_4px_20px_rgba(5,90,171,0.1)] animate-pulse"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full mb-3 sm:mb-4"></div>
                  <div className="w-full space-y-2">
                    <div className="h-3 sm:h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 sm:h-3 w-1/2 mx-auto bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            : categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => handleCategoryClick(category)}
                  className="group relative flex flex-col items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 hover:border-[#055AAB]/30 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB]/0 via-[#1BA9BC]/0 to-[#2966C1]/0 group-hover:from-[#055AAB]/5 group-hover:via-[#1BA9BC]/5 group-hover:to-[#2966C1]/5 transition-all duration-300"></div>
                  {/* Image */}
                  <div className="relative z-10 mb-3 sm:mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB]/10 to-[#1BA9BC]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    />
                  </div>
                  {/* Category Name */}
                  <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 text-center group-hover:text-[#055AAB] transition-colors duration-300 leading-tight">
                    {category.shortName || category.name}
                  </span>
                  {/* Call-to-Action */}
                  <span className="relative z-10 mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-medium text-gray-500 group-hover:text-[#1BA9BC] transition-colors duration-300 flex items-center gap-1">
                    View Exam <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              ))}

          <button
            onClick={() => (window.location.href = `/previous-year-paper`)}
            className="group flex flex-col items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#1BA9BC] group-hover:text-[#055AAB] group-hover:scale-110 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>

            <div className="w-full text-center space-y-1">
              <span className="block text-xs sm:text-sm md:text-base font-semibold text-[#2D3748] group-hover:text-[#055AAB] transition-colors duration-300 leading-tight">
                View All Exams
              </span>
              <span className="block text-[10px] sm:text-xs md:text-sm text-[#4A5568] group-hover:text-[#1BA9BC] transition-colors duration-300">
                Explore →
              </span>
            </div>
          </button>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1BA9BC] to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default ExamCategoryGrid;
