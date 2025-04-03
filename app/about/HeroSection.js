// "use client";

// import { useRouter } from "next/navigation"; // Import useRouter

// const HeroSection = () => {
//   const router = useRouter(); // Initialize useRouter hook

//   const handleClick = () => {
//     router.push("/previous-year-paper"); // Navigate to /paper-landing
//   };

//   return (
//     <div className="relative font-[sans-serif]">
//       {/* Background Image with adjusted opacity */}
//       <img
//         src="https://readymadeui.com/cardImg.webp"
//         alt="Banner Image"
//         className="absolute inset-0 w-full h-full object-cover z-0 opacity-100" // Adjust opacity here
//       />
//       {/* Content Overlay */}
//       <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 py-12">
//         <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-6 leading-tight">
//           Solve Unlimited Previous Year{" "}
//           <span className="text-yellow-500">Question Papers</span>
//         </h2>
//         <p className="text-lg text-center text-gray-200 mb-8">
//           Access a vast collection of previous year question papers, complete
//           with solutions, to enhance your exam preparation. Practice at your own
//           pace and solve as many papers as you need to excel.
//         </p>
//         <button
//           onClick={handleClick} // Use handleClick to navigate
//           className="mt-6 text-base font-semibold py-2.5 px-6 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
//         >
//           Solve Papers
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const router = useRouter();

  const handleClick = () => {
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
              className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Solving Now
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
