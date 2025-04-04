"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import { useState } from "react";

const HeroSection = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push("/previous-year-paper");
  };

  return (
    <div className="relative font-[sans-serif] h-[50vh] min-h-[300px] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#055AAB]/90 to-[#1BA9BC]/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Your Exams With <br />
            <span className="text-yellow-300 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              Previous Year Papers
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto"
          >
            Access our comprehensive collection of question papers with detailed
            solutions. Practice unlimited papers to boost your confidence and
            exam performance.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  <>
                    Loading...
                    <FaSpinner className="animate-spin" />
                  </>
                ) : (
                  <>
                    Start Solving Now
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
              {!isLoading && (
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
