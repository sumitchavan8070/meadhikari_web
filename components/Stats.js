// // // import React from "react";

// // // const Stats = () => {
// // //   const statsData = [
// // //     {
// // //       label: "Expert Chat & Call Minutes",
// // //       value: "75K+",
// // //       icon: (
// // //         <svg
// // //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// // //           viewBox="0 0 50 50"
// // //           fill="none"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //         >
// // //           <path
// // //             d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
// // //             stroke="#FF6D42"
// // //             strokeWidth="3.473"
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //           ></path>
// // //           <path
// // //             d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
// // //             stroke="#FF6D42"
// // //             strokeWidth="3.473"
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //           ></path>
// // //         </svg>
// // //       ),
// // //     },
// // //     {
// // //       label: "Daily Active Users",
// // //       value: "7k+",
// // //       icon: (
// // //         <svg
// // //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// // //           viewBox="0 0 50 50"
// // //           fill="none"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //         >
// // //           <circle cx="25" cy="25" r="24" stroke="#FF6D42" strokeWidth="2" />
// // //           <path
// // //             d="M25 22c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5Zm0 9c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4Zm0 2c-3.313 0-10 1.671-10 5v1h20v-1c0-3.329-6.687-5-10-5Zm-9 4c.25-1.506 6.494-3 9-3s8.75 1.494 9 3H16Z"
// // //             fill="#FF6D42"
// // //           />
// // //         </svg>
// // //       ),
// // //     },
// // //     {
// // //       label: "Exams Covered",
// // //       value: "75+",
// // //       icon: (
// // //         <svg
// // //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// // //           viewBox="0 0 50 50"
// // //           fill="none"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //         >
// // //           <rect
// // //             x="10"
// // //             y="10"
// // //             width="30"
// // //             height="30"
// // //             rx="4"
// // //             stroke="#FF6D42"
// // //             strokeWidth="2"
// // //           />
// // //           <path
// // //             d="M20 18h10M18 23h14M18 28h14M18 33h10"
// // //             stroke="#FF6D42"
// // //             strokeWidth="2"
// // //             strokeLinecap="round"
// // //           />
// // //         </svg>
// // //       ),
// // //     },
// // //     {
// // //       label: "Previous Year Papers",
// // //       value: "2000+",
// // //       icon: (
// // //         <svg
// // //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// // //           viewBox="0 0 50 50"
// // //           fill="none"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //         >
// // //           <path
// // //             d="M16 10h18v8h6v22H10V10h6ZM34 18h-6V12h1l5 6ZM20 24h10M20 28h10M20 32h6"
// // //             stroke="#FF6D42"
// // //             strokeWidth="2"
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //           />
// // //           <path d="M28 32h-2v-2h2v2Z" fill="#FF6D42" />
// // //         </svg>
// // //       ),
// // //     },
// // //   ];

// // //   return (
// // //     <section className="flex flex-col mb-20">
// // //       <p className="font-semibold text-2xl md:text-3xl text-center text-[#FF6D42]">
// // //         Our Outstanding Achievements
// // //       </p>
// // //       <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-[90%] mx-auto max-w-7xl px-5">
// // //         {statsData.map((stat, index) => (
// // //           <div
// // //             key={index}
// // //             className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg"
// // //           >
// // //             <div className="flex flex-row justify-center items-center">
// // //               {stat.icon}
// // //               <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
// // //                 {stat.value}
// // //               </p>
// // //             </div>
// // //             <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center text-[#FF6D42]">
// // //               {stat.label}
// // //             </p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Stats;

// // import React from "react";

// // const Stats = () => {
// //   const statsData = [
// //     {
// //       label: "Expert Chat & Call Minutes",
// //       value: "75K+",
// //       icon: (
// //         <svg
// //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// //           viewBox="0 0 50 50"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
// //             stroke="#007BFF" // Changed color
// //             strokeWidth="3.473"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           ></path>
// //           <path
// //             d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
// //             stroke="#007BFF" // Changed color
// //             strokeWidth="3.473"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           ></path>
// //         </svg>
// //       ),
// //     },
// //     {
// //       label: "Daily Active Users",
// //       value: "7k+",
// //       icon: (
// //         <svg
// //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// //           viewBox="0 0 50 50"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <circle cx="25" cy="25" r="24" stroke="#007BFF" strokeWidth="2" />{" "}
// //           {/* Changed color */}
// //           <path
// //             d="M25 22c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5Zm0 9c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4Zm0 2c-3.313 0-10 1.671-10 5v1h20v-1c0-3.329-6.687-5-10-5Zm-9 4c.25-1.506 6.494-3 9-3s8.75 1.494 9 3H16Z"
// //             fill="#007BFF" // Changed color
// //           />
// //         </svg>
// //       ),
// //     },
// //     {
// //       label: "Exams Covered",
// //       value: "75+",
// //       icon: (
// //         <svg
// //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// //           viewBox="0 0 50 50"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <rect
// //             x="10"
// //             y="10"
// //             width="30"
// //             height="30"
// //             rx="4"
// //             stroke="#007BFF" // Changed color
// //             strokeWidth="2"
// //           />
// //           <path
// //             d="M20 18h10M18 23h14M18 28h14M18 33h10"
// //             stroke="#007BFF" // Changed color
// //             strokeWidth="2"
// //             strokeLinecap="round"
// //           />
// //         </svg>
// //       ),
// //     },
// //     {
// //       label: "Previous Year Papers",
// //       value: "2000+",
// //       icon: (
// //         <svg
// //           className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
// //           viewBox="0 0 50 50"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M16 10h18v8h6v22H10V10h6ZM34 18h-6V12h1l5 6ZM20 24h10M20 28h10M20 32h6"
// //             stroke="#007BFF" // Changed color
// //             strokeWidth="2"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //           <path d="M28 32h-2v-2h2v2Z" fill="#007BFF" /> {/* Changed color */}
// //         </svg>
// //       ),
// //     },
// //   ];

// //   return (
// //     <section className="flex flex-col mb-20">
// //       <p className="font-semibold text-2xl md:text-3xl text-center text-[#007BFF]">
// //         Our Outstanding Achievements
// //       </p>
// //       <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-[90%] mx-auto max-w-7xl px-5">
// //         {statsData.map((stat, index) => (
// //           <div
// //             key={index}
// //             className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg"
// //           >
// //             <div className="flex flex-row justify-center items-center">
// //               {stat.icon}
// //               <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-[#007BFF] ml-2">
// //                 {stat.value}
// //               </p>
// //             </div>
// //             <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center text-[#007BFF]">
// //               {stat.label}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Stats;

// import React from "react";

// const Stats = () => {
//   const statsData = [
//     {
//       label: "Expert Chat & Call Minutes",
//       value: "75K+",
//       icon: (
//         <svg
//           className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#FF6D42] hover:scale-110 transition-transform"
//           viewBox="0 0 50 50"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
//             stroke="#FF6D42"
//             strokeWidth="3.473"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></path>
//           <path
//             d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
//             stroke="#FF6D42"
//             strokeWidth="3.473"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       label: "Daily Active Users",
//       value: "7k+",
//       icon: (
//         <svg
//           className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#FF6D42] hover:scale-110 transition-transform"
//           viewBox="0 0 50 50"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="25" cy="25" r="24" stroke="#FF6D42" strokeWidth="2" />
//           <path
//             d="M25 22c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5Zm0 9c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4Zm0 2c-3.313 0-10 1.671-10 5v1h20v-1c0-3.329-6.687-5-10-5Zm-9 4c.25-1.506 6.494-3 9-3s8.75 1.494 9 3H16Z"
//             fill="#FF6D42"
//           />
//         </svg>
//       ),
//     },
//     {
//       label: "Exams Covered",
//       value: "75+",
//       icon: (
//         <svg
//           className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#FF6D42] hover:scale-110 transition-transform"
//           viewBox="0 0 50 50"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect
//             x="10"
//             y="10"
//             width="30"
//             height="30"
//             rx="4"
//             stroke="#FF6D42"
//             strokeWidth="2"
//           />
//           <path
//             d="M20 18h10M18 23h14M18 28h14M18 33h10"
//             stroke="#FF6D42"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//         </svg>
//       ),
//     },
//     {
//       label: "Previous Year Papers",
//       value: "2000+",
//       icon: (
//         <svg
//           className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#FF6D42] hover:scale-110 transition-transform"
//           viewBox="0 0 50 50"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M16 10h18v8h6v22H10V10h6ZM34 18h-6V12h1l5 6ZM20 24h10M20 28h10M20 32h6"
//             stroke="#FF6D42"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path d="M28 32h-2v-2h2v2Z" fill="#FF6D42" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className="flex flex-col mb-20 bg-gradient-to-r from-[#FF6D42] to-[#FFB589] py-10">
//       <p className="font-semibold text-2xl md:text-3xl text-center text-white">
//         Our Outstanding Achievements
//       </p>
//       <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-[90%] mx-auto max-w-7xl px-5">
//         {statsData.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg px-4 py-6 h-[160px] w-[100%] md:w-[281px] md:h-[200px] transition-transform transform hover:scale-105"
//           >
//             <div className="flex flex-row justify-center items-center">
//               {stat.icon}
//               <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-[#FF6D42] ml-2">
//                 {stat.value}
//               </p>
//             </div>
//             <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center text-[#FF6D42]">
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

const Stats = () => {
  const statsData = [
    {
      label: "Expert Chat & Call Minutes",
      value: "75K+",
      icon: (
        <svg
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#6A0DAD] hover:scale-110 transition-transform"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
            stroke="#6A0DAD"
            strokeWidth="3.473"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
            stroke="#6A0DAD"
            strokeWidth="3.473"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      label: "Daily Active Users",
      value: "7k+",
      icon: (
        <svg
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#6A0DAD] hover:scale-110 transition-transform"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="24" stroke="#6A0DAD" strokeWidth="2" />
          <path
            d="M25 22c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5Zm0 9c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4Zm0 2c-3.313 0-10 1.671-10 5v1h20v-1c0-3.329-6.687-5-10-5Zm-9 4c.25-1.506 6.494-3 9-3s8.75 1.494 9 3H16Z"
            fill="#6A0DAD"
          />
        </svg>
      ),
    },
    {
      label: "Exams Covered",
      value: "75+",
      icon: (
        <svg
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#6A0DAD] hover:scale-110 transition-transform"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="30"
            height="30"
            rx="4"
            stroke="#6A0DAD"
            strokeWidth="2"
          />
          <path
            d="M20 18h10M18 23h14M18 28h14M18 33h10"
            stroke="#6A0DAD"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Previous Year Papers",
      value: "2000+",
      icon: (
        <svg
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#6A0DAD] hover:scale-110 transition-transform"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 10h18v8h6v22H10V10h6ZM34 18h-6V12h1l5 6ZM20 24h10M20 28h10M20 32h6"
            stroke="#6A0DAD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M28 32h-2v-2h2v2Z" fill="#6A0DAD" />
        </svg>
      ),
    },
    {
      label: "Mock Tests",
      value: "4K+",
      icon: (
        <svg
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] text-[#6A0DAD] hover:scale-110 transition-transform"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 6c-5.523 0-10 4.477-10 10v18c0 5.523 4.477 10 10 10s10-4.477 10-10V16c0-5.523-4.477-10-10-10Zm-3 12h6v6h-6v-6Zm0 12h6v6h-6v-6Z"
            stroke="#6A0DAD"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex flex-col mb-20 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] py-2">
      {/* <p className="font-semibold text-2xl md:text-3xl text-center text-white">
        Our Outstanding Achievements
      </p> */}
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col text-white"
          >
            <div className="bg-white p-4 rounded-xl shadow-lg flex justify-center items-center">
              {stat.icon}
            </div>
            {/* <p className="font-semibold text-lg mt-4">{stat.value}</p> */}
            <p className="font-bold text-3xl mt-4 text-shadow-lg">
              {stat.value}
            </p>

            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
