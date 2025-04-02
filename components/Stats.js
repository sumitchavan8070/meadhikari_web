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
    <section className="relative mb-12 py-12 bg-gradient-to-b from-[#F4F9FD] to-[#E6F2FF]">
      {/* Background elements could be added here if needed */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <p className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] mb-2">
          Our Outstanding Achievements
        </p>
        <p className="text-[#6B7C93] text-center text-sm sm:text-base max-w-2xl mx-auto">
          Trusted by thousands of students for exam preparation
        </p>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(5,90,171,0.1)] hover:shadow-[0_8px_25px_rgba(5,90,171,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  fill
                  className="object-contain hover:scale-110 transition-transform"
                />
              </div>
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] mb-2 sm:mb-3">
                {stat.value}
              </p>
              <p className="font-medium text-xs sm:text-sm md:text-base text-center text-[#4A5568]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Optional decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1BA9BC] to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default Stats;
