"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ConversionBanner = ({ variant = "default" }) => {
  const router = useRouter();

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] text-white py-4 px-4 z-50 shadow-2xl border-t-2 border-white/20">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-lg sm:text-xl mb-1">
              🎯 Unlock All Premium Papers
            </p>
            <p className="text-sm sm:text-base text-white/90">
              Get access to 1000+ previous year papers with detailed solutions
            </p>
          </div>
          <button
            onClick={() => router.push("/pricing")}
            className="px-6 py-3 bg-white text-[#055AAB] font-bold rounded-full hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
          >
            View Pricing →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] rounded-2xl p-6 sm:p-8 md:p-10 text-white mb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to Ace Your Exam?
            </h3>
            <p className="text-lg text-white/90 mb-4">
              Unlock unlimited access to all previous year papers with detailed
              solutions, performance analytics, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                "✅ 1000+ Papers",
                "📊 Performance Tracking",
                "🎯 Detailed Solutions",
                "💡 Expert Tips",
              ].map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => router.push("/pricing")}
              className="px-8 py-4 bg-white text-[#055AAB] font-bold text-lg rounded-full hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap"
            >
              Get Premium Access
            </button>
            <p className="text-sm text-white/80 text-center">
              Starting from ₹499/month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionBanner;

