// // const ConversionStripSecond = () => {
// //   return (
// //     <section className="bg-gray-900 text-white py-5">
// //       <div className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-8">
// //         <div className="flex flex-col items-center gap-8">
// //           {/* Title Section */}
// //           <div className="text-center">
// //             {/* Smaller Title */}
// //             <p className="text-base mb-2">Online Solve Papers 🔥</p>
// //           </div>

// //           <div className="w-full max-w-md">
// //             <img
// //               src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/MeadhikariQuestDashMobile.png"
// //               alt="Conversion Image"
// //               className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
// //             />
// //           </div>
// //           <div className="w-full max-w-md">
// //             <img
// //               src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/Meadhikari Question Paper Dashboard.png"
// //               alt="Conversion Image"
// //               className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
// //             />
// //           </div>

// //           {/* Pricing Button */}
// //           <a
// //             href="/previous-year-paper"
// //             className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
// //           >
// //             20 ₹/Day🔥
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ConversionStripSecond;

// "use client";
// import { useRouter } from "next/navigation";

// const ConversionStripSecond = () => {
//   const router = useRouter();

//   const handleRedirect = () => {
//     router.push("/previous-year-paper");
//   };

//   return (
//     <section
//       className="bg-gray-900 text-white py-5 cursor-pointer"
//       onClick={handleRedirect}
//     >
//       <div className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center gap-8">
//           {/* Title Section */}
//           <div className="text-center">
//             <p className="text-base mb-2">Online Solve Papers 🔥</p>
//           </div>

//           {/* Images */}
//           <div className="w-full max-w-md">
//             <img
//               src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/MeadhikariQuestDashMobile.png"
//               alt="Conversion Image"
//               className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
//             />
//           </div>
//           <div className="w-full max-w-md">
//             <img
//               src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/Meadhikari Question Paper Dashboard.png"
//               alt="Conversion Image"
//               className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
//             />
//           </div>

//           {/* Pricing Button */}
//           <div className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
//             20 ₹/Day🔥
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConversionStripSecond;

"use client";
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
      className="bg-gray-900 text-white py-5 cursor-pointer"
      onClick={handleRedirect}
    >
      <div className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Title Section */}
          <div className="text-center">
            <p className="text-base mb-2">Online Solve Papers 🔥</p>
          </div>

          {/* Images */}
          <div className="w-full max-w-md">
            <img
              src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/MobileDashWhite.png"
              alt="Conversion Image"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            />
          </div>
          <div className="w-full max-w-md">
            <img
              src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/MeadhikariDashWhite.png"
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
