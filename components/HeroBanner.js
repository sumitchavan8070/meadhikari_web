"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import ButtonPrimary from "./misc/ButtonPrimary";

const HeroBanner = () => {
  return (
    <div
      className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16"
      id="about"
      style={{
        background:
          "linear-gradient(135deg, #0C4A6E, #3B82F6,rgb(26, 92, 131))",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-0 sm:gap-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 text-white mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Ace Maharashtra State Public Service Exams with{" "}
            <strong className="text-yellow-400">Meadhikari</strong>
          </h1>
          <p className="opacity-90 mt-4 mb-6 max-w-lg text-sm sm:text-base lg:text-lg text-white">
            Get access to thousands of mock tests, practice papers, and study
            resources for Maharashtra government exams. Prepare smarter with our
            expertly curated content and boost your exam success.
          </p>

          {/* Button with Link */}
          <Link href="/previous-year-paper">
            <ButtonPrimary
              type="button"
              className="px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
              style={{
                background: "linear-gradient(45deg, #0C4A6E, #3B82F6)",
                boxShadow:
                  "0px -4px 8px rgba(252, 251, 251, 0.97), 0px 4px 8px rgba(252, 251, 251, 0.97)",
                border: "none",
              }}
            >
              Solve Papers
            </ButtonPrimary>
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full mt-0">
          <div className="relative w-full max-w-xl">
            <Image
              src="/images/heroimg.png"
              alt="Illustration"
              quality={100}
              width={700}
              height={383}
              // className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
