"use client";
import { CONVERSION_SECOUND_LITE_MOBILE } from "@/utils/globalStrings";
import { useRouter, usePathname } from "next/navigation";

const ConversionStripSecond = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current URL path

  const handleRedirect = () => {
    if (pathname === "/previous-year-paper") {
      router.push("/pricing"); // Redirect to Pricing if already on Previous Year Paper
    } else {
      router.push("/previous-year-paper"); // Otherwise, go to Previous Year Paper
    }
  };

  return (
    <section
      className=" bg-[linear-gradient(107.12deg,_#FFFFFF_4.81%,_#BFE0FF_96.97%)]  py-5 md:py-5 relative overflow-hidden"
      onClick={handleRedirect}
    >
      <div className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Title Section */}
          <div className="text-center">
            <p className="text-base ">Online Solve Papers 🔥</p>
          </div>

          {/* Images */}
          <div className="w-full max-w-md">
            <img
              src={CONVERSION_SECOUND_LITE_MOBILE}
              alt="Conversion Image"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            />
          </div>

          {/* Pricing Button */}
          <div className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            20 ₹/Day🔥
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionStripSecond;
