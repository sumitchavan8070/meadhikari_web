"use client";

import { useRouter } from "next/navigation"; // Import useRouter

const HeroSection = () => {
  const router = useRouter(); // Initialize useRouter hook

  const handleClick = () => {
    router.push("/previous-year-paper"); // Navigate to /paper-landing
  };

  return (
    <div className="relative font-[sans-serif]">
      {/* Background Image with adjusted opacity */}
      <img
        src="https://readymadeui.com/cardImg.webp"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100" // Adjust opacity here
      />
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 py-12">
        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-6 leading-tight">
          Solve Unlimited Previous Year{" "}
          <span className="text-yellow-500">Question Papers</span>
        </h2>
        <p className="text-lg text-center text-gray-200 mb-8">
          Access a vast collection of previous year question papers, complete
          with solutions, to enhance your exam preparation. Practice at your own
          pace and solve as many papers as you need to excel.
        </p>
        <button
          onClick={handleClick} // Use handleClick to navigate
          className="mt-6 text-base font-semibold py-2.5 px-6 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Solve Papers
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
