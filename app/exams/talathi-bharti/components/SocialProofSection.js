"use client";

import React from "react";

const SocialProofSection = () => {
  const stats = [
    { number: "50K+", label: "Active Students", icon: "👥" },
    { number: "1000+", label: "Papers Solved", icon: "📚" },
    { number: "95%", label: "Success Rate", icon: "🎯" },
    { number: "4.8/5", label: "User Rating", icon: "⭐" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;


