"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

const ConversionBanner = ({ isSubscriptionActive }) => {
  const router = useRouter();
  const { user } = useAuth();

  if (isSubscriptionActive) return null;

  return (
    <section className="bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] py-8 sm:py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400 text-yellow-900 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 animate-pulse">
            ⚡ Limited Time Offer
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2 leading-tight">
            Unlock All Papers & Boost Your Success Rate
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 text-blue-100 px-2">
            Get access to {100}+ previous year papers, detailed solutions, and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <button
              onClick={() => router.push("/pricing")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#055AAB] font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              View Pricing Plans →
            </button>
            <button
              onClick={() => {
                // Scroll to PageContentSection (tabs section)
                setTimeout(() => {
                  const element = document.querySelector('[data-section="tabs"]');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              Browse Papers
            </button>
          </div>
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-100 px-2">
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
      </div>
    </section>
  );
};

export default ConversionBanner;


