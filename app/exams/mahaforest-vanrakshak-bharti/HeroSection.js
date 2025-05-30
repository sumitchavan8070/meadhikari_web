"use client"; // Mark this as a Client Component

import React from "react";
import { useRouter } from "next/navigation";
import { STARTING_PRICE } from "@/utils/globalStrings";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between h-auto bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-8" // Gradient background for a modern look
    >
      {/* Left Side: Content */}
      <div className="flex flex-col justify-center items-start p-6 md:p-16 text-left w-full md:w-1/2 z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
          Maharastra Vanrakshak-Forest Guard Bharti Exam
        </h1>

        <p className="text-lg sm:text-xl lg:text-xl mb-6 text-gray-700">
          Prepare for the Vanrakshak Bharti Exam with the latest syllabus,
          previous year question papers, and mock tests. Practice with real
          Vanrakshak bharti exam papers and boost your confidence. Stay ahead
          with expert study materials. Start your preparation today!
        </p>

        {/* Call-to-Action Button */}
        <div className="flex space-x-4">
          <button
            className="bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            onClick={() => router.push("/pricing")}
          >
            {STARTING_PRICE}
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 h-auto relative">
        <img
          src="/images/forest-bg.png" // Local image path
          alt="Vanrakshak Bharti Exam Preparation - Syllabus, Previous Year Papers, Mock Tests"
          className="object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] rounded-lg shadow-lg border-4 border-white" // Added border for a clean look
        />
      </div>
    </section>
  );
};

export default HeroSection;
