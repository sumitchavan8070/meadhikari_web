"use client";

import { FaArrowRight, FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

const HomePageHero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#055AAB] via-[#1BA9BC] to-[#2966C1]" style={{ paddingTop: 'calc(70px + 50px)' }}>
      {/* Minimal Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-white text-sm font-medium">Maharashtra&apos;s #1 Exam Prep Platform</span>
          </div>

          {/* Main Headline - Focus on Papers */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Prepare Yourself 
              </span>
              <br />
              <span className="text-white">for Government Exams</span>
            </h1>
            {/* <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
              Master MPSC, Police Bharti, Talathi & More
            </p> */}
          </div>

          {/* Value Proposition - Paper Focused */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Access authentic previous year question papers with{" "}
            <span className="font-bold text-yellow-200">detailed solutions</span> and{" "}
            <span className="font-bold text-yellow-200">AI-powered explanations</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
            <Link
              href="/previous-year-paper"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#055AAB] font-bold text-base sm:text-lg rounded-xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-200/50 overflow-hidden"
            >
              <FaPlayCircle className="text-lg sm:text-xl relative z-10" />
              <span className="relative z-10">Start Free Test</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <HiSparkles />
              <span>View Pricing</span>
            </Link>
          </div>

          {/* Trust Badges */}
          {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/70 pt-2">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              <span>2000+ Papers</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              <span>Detailed Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              <span>Free Access Available</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HomePageHero;
