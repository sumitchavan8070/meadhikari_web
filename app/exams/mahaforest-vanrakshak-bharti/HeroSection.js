"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { STARTING_PRICE } from "@/utils/globalStrings";
import Image from "next/image";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F4F9FD] via-[#E6F2FF] to-[#D6EBFF] pt-[calc(70px+50px)] sm:pt-[calc(70px+45px)] md:pt-[calc(70px+40px)] pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center items-start text-left w-full lg:w-1/2 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-blue-700">महाराष्ट्र वनरक्षक भरती 2025</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1]">
                महाराष्ट्र वनरक्षक भरती
              </span>
              <span className="block text-gray-800 mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl">Exam Preparation</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Prepare for the Maharashtra Vanrakshak Bharti Exam with comprehensive study materials, 
              previous year question papers, and expert-curated mock tests. 
              Boost your confidence and ace your exam with Meadhikari.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">Previous Year Papers</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">Mock Tests</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">Complete Syllabus</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
              <button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#055AAB] to-[#2966C1] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden text-sm sm:text-base w-full sm:w-auto"
                onClick={() => router.push("/pricing")}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {STARTING_PRICE}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2966C1] to-[#055AAB] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#055AAB] font-bold rounded-xl border-2 border-[#055AAB] hover:bg-[#055AAB] hover:text-white transition-all duration-300 shadow-md text-sm sm:text-base w-full sm:w-auto"
                onClick={() => {
                  // Scroll to PageContentSection (tabs section)
                  setTimeout(() => {
                    const element = document.querySelector('[data-section="tabs"]');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
              >
                View Papers
              </button>
            </div>
          </div>

          {/* Right Side: Image/Illustration */}
          <div className="w-full lg:w-1/2 h-auto relative flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl sm:rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                <Image
                  src="/images/forest-bg.png"
                  alt="Maharashtra Vanrakshak Bharti Exam Preparation"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center gap-1 sm:gap-2 animate-bounce">
                  <span className="text-xs sm:text-sm font-bold">🔥 Popular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
