// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link"; // Import Link for navigation
// import ButtonPrimary from "./misc/ButtonPrimary";

// const HeroBanner = () => {
//   return (
//     <div
//       className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16"
//       id="about"
//       style={{
//         background:
//           "linear-gradient(135deg, #0C4A6E, #3B82F6,rgb(26, 92, 131))",
//         boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-0 sm:gap-8">
//         {/* Text Content */}
//         <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 text-white mb-0">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
//             Ace Maharashtra State Public Service Exams with{" "}
//             <strong className="text-yellow-400">Meadhikari</strong>
//           </h1>
//           <p className="opacity-90 mt-4 mb-6 max-w-lg text-sm sm:text-base lg:text-lg text-white">
//             Get access to thousands of mock tests, practice papers, and study
//             resources for Maharashtra government exams. Prepare smarter with our
//             expertly curated content and boost your exam success.
//           </p>

//           {/* Button with Link */}
//           <Link href="/previous-year-paper">
//             <ButtonPrimary
//               type="button"
//               className="px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
//               style={{
//                 background: "linear-gradient(45deg, #0C4A6E, #3B82F6)",
//                 boxShadow:
//                   "0px -4px 8px rgba(252, 251, 251, 0.97), 0px 4px 8px rgba(252, 251, 251, 0.97)",
//                 border: "none",
//               }}
//             >
//               Solve Papers
//             </ButtonPrimary>
//           </Link>
//         </div>

//         {/* Image */}
//         <div className="flex justify-center w-full mt-0">
//           <div className="relative w-full max-w-xl">
//             <Image
//               src="/images/heroimg.png"
//               alt="Illustration"
//               quality={100}
//               width={700}
//               height={383}
//               // className="rounded-lg shadow-lg w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;

// "use client";

// import Image from "next/image";

// const HeroBanner = () => {
//   return (
//     <div className="relative group">
//       <div className="w-[500px] h-[500px] mx-auto relative animate-[spin_50s_linear_infinite]">
//         <Image
//           src="/header/globe.png"
//           alt="Police Siren"
//           width={500}
//           height={500}
//           className="object-contain"
//           priority
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;
// "use client";

// import Image from "next/image";
// // import { ArrowRightIcon } from "@heroicons/react/24/solid"; // For the arrow icon

// const MobileHeroBanner = () => {
//   return (
//     <div className="h-full flex flex-col items-center gap-2 w-full justify-between">
//       {/* Top Tag */}
//       <div className="w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)]">
//         <p className="text-sm font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
//           100% Guaranteed Scholarship
//         </p>
//       </div>

//       {/* Main Title and Subtitle */}
//       <div>
//         <h1 className="text-[85px] leading-none tracking-tighter capitalize font-semibold relative flex items-center justify-center flex-wrap bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
//           <span className="inline-block">Prepare</span>
//           <span className="inline-block">Yourself</span>
//         </h1>
//         <p className="text-[#a0bee5] text-[32px] font-medium text-center">
//           with Meadhikari
//         </p>
//       </div>

//       {/* Globe Image */}
//       <div className="max-h-[165px] overflow-hidden mt-2.5">
//         <div
//           className="rounded-full"
//           style={{ transform: "rotate(301.446deg)" }}
//         >
//           <Image
//             src="/header/globe.png"
//             alt="globe"
//             width={386}
//             height={384}
//             className=""
//             priority
//           />
//         </div>
//       </div>

//       {/* Button */}
//       <a
//         className="cursor-pointer m-auto h-fit p-4 rounded-xl flex items-center justify-center min-w-[85%] w-full gap-1 bg-white border-primary border-[1.87px] shadow-[0_0_13.11px_0_#066AC9] -translate-y-3 relative z-20"
//         href="https://web.gradding.com/start-journey"
//       >
//         <div className="flex items-center gap-1">
//           <span className="text-primary text-base font-bold">Take a Test</span>
//           <span className="inline-block">
//             {/* <ArrowRightIcon className="w-4 h-4" /> */}
//           </span>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default MobileHeroBanner;
// "use client";

// import Image from "next/image";

// const HeroBanner = () => {
//   return (
//     <div className="container mb-12 mt-0 sm:my-20 relative scroll-smooth z-40">
//       {/* Desktop Version */}
//       <div className="hidden sm:block">
//         {/* Globe and Button */}
//         <div className="z-20 absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center w-full sm:w-fit">
//           <div className="mr-16 relative animate-[spin_50s_linear_infinite]">
//             <Image
//               src="/header/globe.png"
//               alt="globe"
//               width={540}
//               height={479}
//               className="animate-slowspin"
//               priority
//             />
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="min-h-[280px] sm:min-h-[480px] flex items-center justify-center">
//           <div className="h-full flex flex-col items-start gap-2 w-full justify-between sm:justify-normal">
//             {/* Top Tag */}
//             <div className="sm:m-0 -mt-32 w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)]">
//               <p className="text-base font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
//                 100% Exam Oriented
//               </p>
//             </div>

//             {/* Main Title and Subtitle */}
//             <div className="flex flex-col items-end w-full">
//               <h1 className="w-full sm:text-[125px] 2xl:text-[150px] tracking-tighter font-semibold pb-2 relative flex items-center justify-between gap-4 sm:gap-0 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
//                 <span className="inline-block sm:text-[100px] 2xl:text-[100px] mx-5">
//                   Prepare
//                 </span>

//                 <span className="inline-block sm:text-[100px] 2xl:text-[100px] mx-20">
//                   Yourself
//                 </span>
//               </h1>
//               <p className="text-[#a0bee5] text-[45px] font-medium mx-20">
//                 {"  "}
//                 with Meadhikari
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Version */}
//       <div className="block sm:hidden">
//         <div className="h-full flex flex-col items-center gap-2 w-full justify-between">
//           {/* Top Tag */}
//           <div className="w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)] mt-8">
//             <p className="text-sm font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)] ">
//               100% Exam Oriented
//             </p>
//           </div>

//           {/* Main Title and Subtitle */}
//           <div>
//             <h1 className="text-[85px] leading-none tracking-tighter capitalize font-semibold relative flex items-center justify-center flex-wrap bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
//               <span className="inline-block">Prepare</span>
//               <span className="inline-block">Yourself</span>
//             </h1>
//             <p className="text-[#a0bee5] text-[32px] font-medium text-center">
//               with Meadhikari
//             </p>
//           </div>

//           {/* Globe Image */}
//           <div className="max-h-[165px] overflow-hidden mt-2.5">
//             <div className="rounded-full animate-[spin_50s_linear_infinite]">
//               <Image
//                 src="/header/globe.png"
//                 alt="globe"
//                 width={386}
//                 height={384}
//                 className=""
//                 priority
//               />
//             </div>
//           </div>

//           {/* Button */}
//           <a
//             className="cursor-pointer m-auto h-fit p-4 rounded-xl flex items-center justify-center min-w-[85%] w-full gap-1 bg-white border-primary border-[1.87px] shadow-[0_0_13.11px_0_#066AC9] -translate-y-3 relative z-20"
//             href="https://www.meadhikari.com//previous-year-paper"
//           >
//             <div className="flex items-center gap-1">
//               <span className="text-primary text-base font-bold">
//                 Take a Test
//               </span>
//               <span className="inline-block">
//                 {/* <ArrowRightIcon className="w-4 h-4" /> */}
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;
// "use client";

// import Image from "next/image";

// const ArrowRightIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M5 12H19M19 12L12 5M19 12L12 19"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const HeroBanner = () => {
//   return (
//     <div className="container mb-5 mt-0 md:my-10 lg:my-10 relative scroll-smooth z-40">
//       {/* Desktop/Tablet Version */}
//       <div className="hidden sm:block">
//         {/* Globe and Button */}
//         <div className="z-20 absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center w-full lg:w-fit">
//           <div className="mr-8 lg:mr-16 relative animate-[spin_50s_linear_infinite]">
//             <Image
//               src="/header/globe.png"
//               alt="globe"
//               width={540}
//               height={479}
//               className="animate-slowspin w-[300px] md:w-[400px] lg:w-[540px]"
//               priority
//             />
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="min-h-[280px] sm:min-h-[350px] md:min-h-[480px] flex items-center justify-center">
//           <div className="h-full flex flex-col items-start gap-2 w-full justify-between sm:justify-normal">
//             {/* Top Tag */}
//             <div className="sm:m-0 -mt-20 md:-mt-32 w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)]">
//               <p className="text-sm sm:text-base font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
//                 100% Exam Oriented
//               </p>
//             </div>

//             {/* Main Title and Subtitle */}
//             <div className="flex flex-col items-end w-full">
//               <h1 className="w-full text-[60px] sm:text-[80px] md:text-[100px] lg:text-[125px] xl:text-[150px] tracking-tighter font-semibold pb-2 relative flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
//                 <span className="inline-block text-[60px] sm:text-[80px] md:text-[90px] lg:text-[100px] mx-0 md:mx-5">
//                   Prepare
//                 </span>
//                 <span className="inline-block text-[60px] sm:text-[80px] md:text-[90px] lg:text-[100px] mx-0 md:mx-20">
//                   Yourself
//                 </span>
//               </h1>
//               <p className="text-[#a0bee5] text-[30px] sm:text-[35px] md:text-[45px] font-medium mx-0 md:mx-20">
//                 {"  "}
//                 with Meadhikari
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Version */}
//       <div className="block sm:hidden">
//         <div className="h-full flex flex-col items-center gap-2 w-full justify-between">
//           {/* Top Tag */}
//           <div className="w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)] mt-8">
//             <p className="text-sm font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
//               100% Exam Oriented
//             </p>
//           </div>

//           {/* Main Title and Subtitle */}
//           <div>
//             <h1 className="text-[85px] leading-none tracking-tighter capitalize font-semibold relative flex items-center justify-center flex-wrap bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
//               <span className="inline-block">Prepare</span>
//               <span className="inline-block">Yourself</span>
//             </h1>
//             <p className="text-[#a0bee5] text-[32px] font-medium text-center">
//               with Meadhikari
//             </p>
//           </div>

//           {/* Globe Image */}
//           <div className="max-h-[165px] overflow-hidden mt-2.5">
//             <div className="rounded-full animate-[spin_50s_linear_infinite]">
//               <Image
//                 src="/header/globe.png"
//                 alt="globe"
//                 width={386}
//                 height={384}
//                 className="w-full h-auto"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Button */}
//           <a
//             className="cursor-pointer m-auto h-fit p-4 rounded-xl flex items-center justify-center min-w-[85%] w-full gap-1 bg-white border-primary border-[1.87px] shadow-[0_0_13.11px_0_#066AC9] -translate-y-3 relative z-20"
//             href="https://www.meadhikari.com//previous-year-paper"
//           >
//             <div className="flex items-center gap-1">
//               <span className="text-primary text-base font-bold">
//                 Take a Test
//               </span>
//               <ArrowRightIcon />
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;
"use client";

import Image from "next/image";

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroBanner = () => {
  return (
    <div className="container mb-10 mt-0 md:my-12 lg:my-20 relative scroll-smooth z-40">
      {/* Desktop/Tablet Version */}
      <div className="hidden sm:block">
        {/* Globe */}
        <div className="z-0 absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center w-full lg:w-fit">
          <div className="mr-8 lg:mr-16 relative animate-[spin_50s_linear_infinite]">
            <Image
              src="/header/globe.png"
              alt="globe"
              width={540}
              height={479}
              className="animate-slowspin w-[300px] md:w-[350px] lg:w-[400px] xl:w-[540px] opacity-80"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] flex items-center justify-center relative z-10">
          <div className="h-full flex flex-col items-start gap-2 w-full justify-between sm:justify-normal">
            {/* Top Tag */}
            <div className="sm:m-0 -mt-20 md:-mt-24 lg:-mt-32 w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)]">
              <p className="text-sm sm:text-base font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
                100% Exam Oriented
              </p>
            </div>

            {/* Main Title and Subtitle */}
            <div className="flex flex-col items-end w-full">
              <h1 className="w-full text-[60px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[125px] 2xl:text-[150px] tracking-tighter font-semibold pb-2 relative flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
                <span className="inline-block text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] mx-0 md:mx-5">
                  Prepare
                </span>
                <span className="inline-block text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] mx-0 md:mx-10 lg:mx-20">
                  Yourself
                </span>
              </h1>
              <p className="text-[#a0bee5] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-medium mx-0 md:mx-10 lg:mx-20">
                with Meadhikari
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden">
        <div className="h-full flex flex-col items-center gap-2 w-full justify-between">
          {/* Top Tag */}
          <div className="w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)] mt-8">
            <p className="text-sm font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
              100% Exam Oriented
            </p>
          </div>

          {/* Main Title and Subtitle */}
          <div>
            <h1 className="text-[85px] leading-none tracking-tighter capitalize font-semibold relative flex items-center justify-center flex-wrap bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
              <span className="inline-block">Prepare</span>
              <span className="inline-block">Yourself</span>
            </h1>
            <p className="text-[#a0bee5] text-[32px] font-medium text-center">
              with Meadhikari
            </p>
          </div>

          {/* Globe Image */}
          <div className="max-h-[165px] overflow-hidden mt-2.5">
            <div className="rounded-full animate-[spin_50s_linear_infinite]">
              <Image
                src="/header/globe.png"
                alt="globe"
                width={386}
                height={384}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Button */}
          <a
            className="cursor-pointer m-auto h-fit p-4 rounded-xl flex items-center justify-center min-w-[85%] w-full gap-1 bg-white border-primary border-[1.87px] shadow-[0_0_13.11px_0_#066AC9] -translate-y-3 relative z-20"
            href="https://www.meadhikari.com/previous-year-paper"
          >
            <div className="flex items-center gap-1">
              <span className="text-primary text-base font-bold">
                Take a Test
              </span>
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
