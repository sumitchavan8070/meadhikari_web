import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import ButtonPrimary from "./misc/ButtonPrimary";

const HeroBanner = () => {
  const colors = {
    gradientStart: "#007AFF", // Professional blue start
    gradientEnd: "#4A90E2", // Complementary blue end

    textPrimary: "#FFFFFF", // Primary text color (white)
    textAccent: "#FFD700", // Accent color for headings (golden yellow)
    buttonBackground: "linear-gradient(45deg, #007AFF, #4A90E2)", // Button background gradient
    buttonText: "#FFFFFF", // Button text color (white)
    buttonHoverBackground: "#005BB5", // Darker blue for hover
    buttonShadow:
      "0px -4px 8px rgba(252, 251, 251, 0.97), 0px 4px 8px rgba(252, 251, 251, 0.97)", // Top and bottom shadows
    buttonBorder: "none", // No border for the button
  };

  const router = useRouter(); // Initialize useRouter hook

  const handleClick = () => {
    router.push(`/previous-year-paper`); // Navigate to /paper-landing
  };

  return (
    <div
      className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16"
      id="about"
      style={{
        background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd})`,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-0 sm:gap-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 text-white mb-0">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-normal"
            style={{ color: colors.textPrimary }}
          >
            Ace Maharashtra State Public Service Exams with{" "}
            <strong style={{ color: colors.textAccent }}>Meadhikari</strong>
          </h1>
          <p
            className="opacity-90 mt-4 mb-6 max-w-lg text-sm sm:text-base lg:text-lg"
            style={{ color: colors.textPrimary }}
          >
            Get access to thousands of mock tests, practice papers, and study
            resources for Maharashtra government exams. Prepare smarter with our
            expertly curated content and boost your exam success.
          </p>
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold rounded-full transition-all ease-in-out duration-300 transform hover:scale-105"
            style={{
              background: colors.buttonBackground,
              color: colors.buttonText,
              boxShadow: colors.buttonShadow,
              border: colors.buttonBorder,
            }}
            onMouseOver={(e) =>
              (e.target.style.background = colors.buttonHoverBackground)
            }
            onMouseOut={(e) =>
              (e.target.style.background = colors.buttonBackground)
            }
            onClick={handleClick} // Add the click handler here
          >
            Solve Papers
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full mt-0">
          <div className="relative w-full" style={{ maxWidth: "700px" }}>
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
