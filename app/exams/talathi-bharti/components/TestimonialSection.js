"use client";

import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Rajesh Patil",
      role: "Selected as Talathi 2024",
      content: "Meadhikari's papers helped me understand the exam pattern perfectly. The detailed solutions were a game-changer!",
      rating: 5,
    },
    {
      name: "Priya Deshmukh",
      role: "Topper - Talathi Exam",
      content: "I practiced all papers and scored 95%! The platform is user-friendly and the questions are exactly like the real exam.",
      rating: 5,
    },
    {
      name: "Suresh Kulkarni",
      role: "Selected Candidate",
      content: "Best investment for exam preparation. The mock tests and previous year papers are comprehensive and well-structured.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-100 text-yellow-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            💬 Real Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC]">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Join thousands of successful candidates who aced their exam with Meadhikari
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-2xl transform translate-x-4 sm:translate-x-8 -translate-y-4 sm:-translate-y-8"></div>
              <div className="relative z-10">
              <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <div className="font-bold text-sm sm:text-base text-gray-800 mb-1">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

