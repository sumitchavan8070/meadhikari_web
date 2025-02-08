// import React from "react";
// import Image from "next/image";

// const Stats = () => {
//   const colors = {
//     primary: "#007AFF", // Blue for a fresh and professional feel
//     secondary: "#4A90E2", // Lighter gradient complement
//     text: "#2D3748", // Dark gray for better readability
//     background: "#F7FAFC", // Light gray for a modern card background
//     gradientStart: "#4A90E2", // Gradient start for a soothing transition
//     gradientEnd: "#BEE3F8", // Gradient end for a calm, professional vibe
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
//       value: "7k+",
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
//       value: "55k+",
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
//     <section
//       className={`flex flex-col mb-10 bg-gradient-to-r from-[${colors.gradientStart}] to-[${colors.gradientEnd}] py-10`}
//     >
//       <p className="font-semibold text-2xl md:text-3xl text-center text-white">
//         Our Outstanding Achievements
//       </p>
//       <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-[90%] mx-auto max-w-7xl px-5">
//         {statsData.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg px-4 py-6 h-[160px] w-[100%] md:w-[281px] md:h-[200px] transition-transform transform hover:scale-105"
//             style={{ backgroundColor: colors.background }}
//           >
//             <div className="flex flex-row justify-center items-center">
//               {stat.icon}
//               <p
//                 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 ml-2"
//                 style={{ color: colors.text }}
//               >
//                 {stat.value}
//               </p>
//             </div>
//             <p
//               className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center"
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

import React from "react";
import Image from "next/image";

const Stats = () => {
  const colors = {
    primary: "#007AFF",
    text: "#2D3748", // Dark gray for better
    background: "#F4F4F4", // Light gray for a clean and professional look
  };

  const statsData = [
    {
      label: "Previous Year Question Papers",
      value: "2000+",
      icon: (
        <Image
          src="/icon/previous-year-papers.png"
          alt="Previous Year Question Papers"
          width={55}
          height={55}
          className="hover:scale-110 transition-transform"
        />
      ),
    },
    {
      label: "Daily Active Users",
      value: "7k+",
      icon: (
        <Image
          src="/icon/daily-active-users.png"
          alt="Daily Active Users"
          width={55}
          height={55}
          className="hover:scale-110 transition-transform"
        />
      ),
    },
    {
      label: "Exams Covered",
      value: "75+",
      icon: (
        <Image
          src="/icon/exams-covered.png"
          alt="Exams Covered"
          width={55}
          height={55}
          className="hover:scale-110 transition-transform"
        />
      ),
    },
    {
      label: "Registered Users",
      value: "7k+",
      icon: (
        <Image
          src="/icon/registered-users.png"
          alt="Registered Users"
          width={55}
          height={55}
          className="hover:scale-110 transition-transform"
        />
      ),
    },
  ];

  return (
    <section className="flex flex-col mb-10 py-12 bg-[#F4F4F4]">
      <p className="font-semibold text-2xl md:text-3xl text-center text-gray-800">
        Our Outstanding Achievements
      </p>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-8 gap-x-5 place-items-center w-[90%] mx-auto max-w-7xl px-5">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg px-6 py-8 h-[160px] w-[100%] md:w-[250px] transition-transform transform hover:scale-105"
          >
            <div className="flex flex-row justify-center items-center">
              {stat.icon}
              <p
                className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 ml-3"
                style={{ color: colors.text }}
              >
                {stat.value}
              </p>
            </div>
            <p
              className="font-medium text-base sm:text-lg leading-6 mt-4 text-center"
              style={{ color: colors.text }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
