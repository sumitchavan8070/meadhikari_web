"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BenefitsSection = () => {
  const router = useRouter();

  const benefits = [
    {
      icon: "📊",
      title: "Real Exam Papers",
      description: "Access authentic previous year papers with detailed solutions",
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description: "Get immediate feedback and performance analysis",
    },
    {
      icon: "🎯",
      title: "Expert Curated",
      description: "Questions prepared by subject matter experts",
    },
    {
      icon: "📱",
      title: "Study Anytime",
      description: "Practice on mobile, tablet, or desktop",
    },
    {
      icon: "📈",
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics",
    },
    {
      icon: "🏆",
      title: "Win Guarantee",
      description: "Join thousands of successful candidates",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            ✨ Why Students Love Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC]">
              Why Choose Meadhikari?
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Everything you need to ace your Vanrakshak Bharti exam in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-[#055AAB] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push("/pricing")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#055AAB] to-[#2966C1] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg w-full sm:w-auto"
          >
            Get Started Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;


