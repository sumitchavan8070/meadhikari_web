"use client";

import React from "react";

const HomePageTestimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Patil",
      role: "Selected as Talathi 2024",
      exam: "Talathi Bharti",
      content: "Meadhikari's previous year papers helped me understand the exam pattern perfectly. The detailed solutions were a game-changer!",
      rating: 5,
    },
    {
      name: "Priya Deshmukh",
      role: "Topper - Police Bharti",
      exam: "Maharashtra Police Bharti",
      content: "I practiced all papers and scored 95%! The platform is user-friendly and the questions are exactly like the real exam.",
      rating: 5,
    },
    {
      name: "Suresh Kulkarni",
      role: "Selected Candidate",
      exam: "MPSC",
      content: "Best investment for exam preparation. The mock tests and previous year papers are comprehensive and well-structured.",
      rating: 5,
    },
    {
      name: "Anjali Joshi",
      role: "Vanrakshak Selected",
      exam: "Vanrakshak Bharti",
      content: "Performance analytics helped me identify weak areas. The premium subscription is worth every rupee!",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <span>💬</span>
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1]">
              What Our Students Say
            </span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Join thousands of successful candidates who aced their exams with Meadhikari
          </p>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-7 rounded-3xl shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-[#055AAB]/40 relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Enhanced decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB]/0 via-[#1BA9BC]/0 to-[#2966C1]/0 group-hover:from-[#055AAB]/8 group-hover:via-[#1BA9BC]/8 group-hover:to-[#2966C1]/8 transition-all duration-500"></div>
              
              <div className="relative z-10">
                {/* Enhanced Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed text-sm md:text-base group-hover:text-gray-800 transition-colors duration-300">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Enhanced Author Info */}
                <div className="pt-4 border-t-2 border-gray-100 group-hover:border-[#055AAB]/30 transition-colors duration-300">
                  <div className="font-extrabold text-gray-800 mb-1 group-hover:text-[#055AAB] transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-1 font-medium">{testimonial.role}</div>
                  <div className="text-xs text-[#055AAB] font-bold">{testimonial.exam}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageTestimonials;

