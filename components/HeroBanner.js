// // import React from "react";
// // import Image from "next/image";
// // import ButtonPrimary from "./misc/ButtonPrimary";

// // const HeroBanner = () => {
// //   return (
// //     <div className="w-11/12 mx-auto px-8 xl:px-16" id="about">
// //       <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
// //         <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
// //           <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
// //             Ace Maharashtra State Public Service Exams with{" "}
// //             <strong>Meadhikari</strong>
// //           </h1>
// //           <p className="text-black-500 mt-4 mb-6">
// //             Get access to thousands of mock tests, practice papers, and study
// //             resources for Maharashtra government exams. Prepare smarter with our
// //             expertly curated content and boost your exam success.
// //           </p>
// //           <ButtonPrimary>Get Started</ButtonPrimary>
// //         </div>
// //         <div className="flex w-full">
// //           <Image
// //             src="/images/Illustration1.png"
// //             alt="VPN Illustrasi"
// //             quality={100}
// //             width={612}
// //             height={383}
// //             layout="responsive"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroBanner;

// import React from "react";
// import Image from "next/image";
// import ButtonPrimary from "./misc/ButtonPrimary";

// const HeroBanner = () => {
//   return (
//     <div
//       className="w-11/12 mx-auto px-8 xl:px-16 py-12 sm:py-16"
//       id="about"
//       style={{
//         background: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
//         borderRadius: "16px",
//         boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8">
//         <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 text-white">
//           <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-normal">
//             Ace Maharashtra State Public Service Exams with{" "}
//             <strong className="text-yellow-400">Meadhikari</strong>
//           </h1>
//           <p className="text-white opacity-80 mt-4 mb-6 max-w-lg">
//             Get access to thousands of mock tests, practice papers, and study
//             resources for Maharashtra government exams. Prepare smarter with our
//             expertly curated content and boost your exam success.
//           </p>
//           <ButtonPrimary>Get Started</ButtonPrimary>
//         </div>
//         <div className="flex justify-center w-full">
//           <Image
//             src="/images/Illustration1.png"
//             alt="VPN Illustration"
//             quality={100}
//             width={612}
//             height={383}
//             layout="responsive"
//             className="rounded-lg shadow-lg"
//           />
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
      className="w-11/12 mx-auto px-8 xl:px-16 py-12 sm:py-16 mt-5 mb-12"
      id="about"
      style={{
        background: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 text-white">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-normal">
            Ace Maharashtra State Public Service Exams with{" "}
            <strong className="text-yellow-400">Meadhikari</strong>
          </h1>
          <p className="text-white opacity-80 mt-4 mb-6 max-w-lg">
            Get access to thousands of mock tests, practice papers, and study
            resources for Maharashtra government exams. Prepare smarter with our
            expertly curated content and boost your exam success.
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
        <div className="flex justify-center w-full">
          <Image
            src="/images/Illustration1.png"
            alt="VPN Illustration"
            quality={100}
            width={612}
            height={383}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
