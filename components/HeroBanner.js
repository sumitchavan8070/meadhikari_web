// import React from "react";
// import Image from "next/image";
// import ButtonPrimary from "./misc/ButtonPrimary";

// const HeroBanner = () => {
//   return (
//     <div
//       className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 mb-12"
//       id="about"
//       style={{
//         background: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
//         // borderRadius: "16px",
//         boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-0 sm:gap-8">
//         {/* Text Content */}
//         <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 text-white mb-0">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-normal">
//             Ace Maharashtra State Public Service Exams with{" "}
//             <strong className="text-yellow-400">Meadhikari</strong>
//           </h1>
//           <p className="text-white opacity-80 mt-4 mb-6 max-w-lg text-sm sm:text-base lg:text-lg">
//             Get access to thousands of mock tests, practice papers, and study
//             resources for Maharashtra government exams. Prepare smarter with our
//             expertly curated content and boost your exam success.
//           </p>
//           <ButtonPrimary className="px-6 py-3 sm:px-8 sm:py-4">
//             Get Started
//           </ButtonPrimary>
//         </div>

//         {/* Image */}
//         <div className="flex justify-center w-full mt-0">
//           <div className="relative w-full" style={{ maxWidth: "612px" }}>
//             <Image
//               src="/images/Illustration1.png"
//               alt="VPN Illustration"
//               quality={100}
//               width={612}
//               height={383}
//               layout="responsive"
//               className="rounded-lg shadow-lg w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;

import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";

const HeroBanner = () => {
  return (
    <div
      className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 mb-12"
      id="about"
      style={{
        background: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-0 sm:gap-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 text-white mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-normal">
            Ace Maharashtra State Public Service Exams with{" "}
            <strong className="text-yellow-400">Meadhikari</strong>
          </h1>
          <p className="text-white opacity-80 mt-4 mb-6 max-w-lg text-sm sm:text-base lg:text-lg">
            Get access to thousands of mock tests, practice papers, and study
            resources for Maharashtra government exams. Prepare smarter with our
            expertly curated content and boost your exam success.
          </p>
          <ButtonPrimary className="px-6 py-3 sm:px-8 sm:py-4">
            Get Started
          </ButtonPrimary>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full mt-0">
          <div className="relative w-full" style={{ maxWidth: "612px" }}>
            <Image
              src="/images/Illustration1.png"
              alt="VPN Illustration"
              quality={100}
              width={612}
              height={383}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
