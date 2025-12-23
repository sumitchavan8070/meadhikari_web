// import React from "react";
// import Image from "next/image";

// const Stats = () => {
//   const colors = {
//     primary: "#007AFF",
//     text: "#2D3748", // Dark gray for better
//     background: "#F4F4F4", // Light gray for a clean and professional look
//   };

//   const statsData = [
//     {
//       label: "Previous Year Question Papers",
//       value: "2000+",
//       icon: (
//         <Image
//           src="/icon/previous-year-papers.png"
//           alt="Previous Year Question Papers"
//           width={55}
//           height={55}
//           className="hover:scale-110 transition-transform"
//         />
//       ),
//     },
//     {
//       label: "Daily Active Users",
//       value: "2k+",
//       icon: (
//         <Image
//           src="/icon/daily-active-users.png"
//           alt="Daily Active Users"
//           width={55}
//           height={55}
//           className="hover:scale-110 transition-transform"
//         />
//       ),
//     },
//     {
//       label: "Exams Covered",
//       value: "75+",
//       icon: (
//         <Image
//           src="/icon/exams-covered.png"
//           alt="Exams Covered"
//           width={55}
//           height={55}
//           className="hover:scale-110 transition-transform"
//         />
//       ),
//     },
//     {
//       label: "Registered Users",
//       value: "7k+",
//       icon: (
//         <Image
//           src="/icon/registered-users.png"
//           alt="Registered Users"
//           width={55}
//           height={55}
//           className="hover:scale-110 transition-transform"
//         />
//       ),
//     },
//   ];

//   return (
//     <section className="flex flex-col mb-10 py-12 bg-[#F4F4F4]">
//       <p className="font-semibold text-2xl md:text-3xl text-center text-gray-800">
//         Our Outstanding Achievements
//       </p>
//       <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-8 gap-x-5 place-items-center w-[90%] mx-auto max-w-7xl px-5">
//         {statsData.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg px-6 py-8 h-[160px] w-[100%] md:w-[250px] transition-transform transform hover:scale-105"
//           >
//             <div className="flex flex-row justify-center items-center">
//               {stat.icon}
//               <p
//                 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 ml-3"
//                 style={{ color: colors.text }}
//               >
//                 {stat.value}
//               </p>
//             </div>
//             <p
//               className="font-medium text-base sm:text-lg leading-6 mt-4 text-center"
//               style={{ color: colors.text }}
//             >
//               {stat.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Stats;
"use client";

import Image from "next/image";

const Stats = () => {
  const statsData = [
    {
      label: "Previous Year Question Papers",
      value: "2000+",
      icon: "/icon/previous-year-papers.png",
    },
    {
      label: "Daily Active Users",
      value: "2k+",
      icon: "/icon/daily-active-users.png",
    },
    {
      label: "Exams Covered",
      value: "75+",
      icon: "/icon/exams-covered.png",
    },
    {
      label: "Registered Users",
      value: "7k+",
      icon: "/icon/registered-users.png",
    },
  ];

  return (
    <section className="relative mb-12 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#E6F2FF] via-[#F4F9FD] to-white overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            🏆 Our Achievements
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] mb-4">
            Our Outstanding Achievements
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Trusted by thousands of students for exam preparation
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(5,90,171,0.25)] transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 border-2 border-gray-100 hover:border-[#055AAB]/40 relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#055AAB]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB]/0 via-[#1BA9BC]/0 to-[#2966C1]/0 group-hover:from-[#055AAB]/8 group-hover:via-[#1BA9BC]/8 group-hover:to-[#2966C1]/8 transition-all duration-500"></div>
              
              <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-4 md:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB]/15 to-[#1BA9BC]/15 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  fill
                  className="relative z-10 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                />
              </div>
              <p className="relative z-10 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="relative z-10 font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center text-gray-700 group-hover:text-[#055AAB] transition-colors duration-300 px-2">
                {stat.label}
              </p>
              
              {/* Decorative glow */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#055AAB]/10 to-[#1BA9BC]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
