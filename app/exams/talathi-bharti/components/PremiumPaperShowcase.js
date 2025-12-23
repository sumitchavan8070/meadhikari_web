"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

const PremiumPaperShowcase = ({ questionsData = [] }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Show first 3 papers as premium showcase
  const premiumPapers = questionsData.slice(0, 3);

  if (premiumPapers.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#F4F9FD] via-white to-[#E6F2FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            🔥 Premium Papers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC]">
              Most Popular Papers
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start with these highly recommended papers trusted by thousands of students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {premiumPapers.map((paper, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#055AAB] transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Premium Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ Premium
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {paper.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>📝 {paper.questions} Questions</span>
                    <span>⏱️ {paper.time} min</span>
                  </div>
                </div>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Year:</span>
                    <span className="font-semibold text-[#055AAB]">
                      {paper.paper?.QPYear || "2024"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Attempted:</span>
                    <span className="font-semibold text-green-600">
                      {paper.attempted || `${(Math.random() * 4 + 1).toFixed(1)}k+`}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!user) {
                      // Open login
                      return;
                    }
                    router.push("/pricing");
                  }}
                  className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-gradient-to-r from-[#055AAB] to-[#2966C1] text-white shadow-lg transform scale-105"
                      : "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                  }`}
                >
                  {user ? "Start Test Now" : "Login to Start"}
                </button>
              </div>

              {/* Hover overlay effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB]/10 to-[#1BA9BC]/10 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Want access to all {questionsData.length}+ papers?
          </p>
          <button
            onClick={() => router.push("/pricing")}
            className="px-8 py-4 bg-gradient-to-r from-[#055AAB] to-[#2966C1] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            View All Papers & Pricing →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumPaperShowcase;

