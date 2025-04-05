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
    <section className="relative py-12 bg-gradient-to-b from-[#F4F9FD] to-[#E6F2FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] mb-2">
          Explore Exam Categories
        </h1>
        <p className="text-[#6B7C93] text-center text-sm sm:text-base max-w-2xl mx-auto mb-10">
          Comprehensive collection of exam preparation resources
        </p>

        {/* Grid of Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {loading
            ? // Skeleton Loading State
              Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between h-full min-h-[200px] p-4 bg-white rounded-xl shadow-[0_4px_20px_rgba(5,90,171,0.1)] animate-pulse"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mb-4"></div>
                  <div className="w-full space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-1/2 mx-auto bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            : categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => handleCategoryClick(category)}
                  className="group flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-24 h-24 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Name */}
                  <span className="text-lg font-semibold text-gray-800 text-center group-hover:text-indigo-600 transition-colors duration-300">
                    {category.shortName || category.name}
                  </span>
                  {/* Call-to-Action */}
                  <span className="mt-2 text-sm text-gray-500 group-hover:text-indigo-500 transition-colors duration-300">
                    View Exam →
                  </span>
                </button>
              ))}

          <button
            onClick={() => (window.location.href = `/previous-year-paper`)}
            className="group flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 flex-shrink-0">
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
              <span className="block text-sm sm:text-base font-semibold text-[#2D3748] group-hover:text-[#055AAB] transition-colors duration-300">
                View All Exams
              </span>
              <span className="block text-xs sm:text-sm text-[#4A5568] group-hover:text-[#1BA9BC] transition-colors duration-300">
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
