// // "use client";
// // import { Context } from "@/Context/Context";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useContext } from "react";

// // const Footer = () => {
// //   return (
// //     <footer className="px-3 pt-4 lg:px-9 bg-gray-50 bg-[#F9FAFC]">
// //       <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
// //         <div className="sm:col-span-2">
// //           <a href="#" className="inline-flex items-center">
// //             <Image
// //               src="/images/example.png"
// //               alt="logo"
// //               width={200}
// //               height={200}
// //             />
// //             {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
// //               Meadhikari
// //             </span> */}
// //           </a>
// //           <div className="mt-6 lg:max-w-xl">
// //             <p className="text-sm text-gray-800">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
// //               felis mi, faucibus dignissim lorem id, imperdiet interdum mauris.
// //               Vestibulum ultrices sed libero non porta. Vivamus malesuada urna
// //               eu nibh malesuada, non finibus massa laoreet. Nunc nisi velit,
// //               feugiat a semper quis, pulvinar id libero. Vivamus mi diam,
// //               consectetur non orci ut, tincidunt pretium justo. In vehicula
// //               porta molestie. Suspendisse potenti.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="flex flex-col gap-2 text-sm">
// //           <p className="text-base font-bold tracking-wide text-gray-900">
// //             Services
// //           </p>
// //           <a href="#">Previous Year Question Papers</a>
// //           <a href="#">Pricing</a>
// //           <p className="text-base font-bold tracking-wide text-gray-900">
// //             Who are we
// //           </p>
// //           <a href="#">About us</a>
// //           <a href="#">Contact us</a>
// //         </div>

// //         <div>
// //           <p className="text-base font-bold tracking-wide text-gray-900">
// //             WE ARE ALSO AVAILABLE ON
// //           </p>
// //           <div className="flex items-center gap-1 px-2">
// //             <a href="#" className="w-full min-w-xl">
// //               <Image
// //                 src="https://mcqmate.com/public/images/icons/playstore.svg"
// //                 alt="Playstore Button"
// //                 width={135}
// //                 height={70}
// //               />
// //             </a>
// //             <a
// //               className="w-full min-w-xl"
// //               href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
// //             >
// //               <Image
// //                 src="https://mcqmate.com/public/images/icons/youtube.svg"
// //                 alt="Youtube Button"
// //                 width={135}
// //                 height={70}
// //               />
// //             </a>
// //           </div>
// //           <p className="text-base font-bold tracking-wide text-gray-900">
// //             Contacts
// //           </p>
// //           <div className="flex">
// //             <p className="mr-1 text-gray-800">Email:</p>
// //             <a href="#" title="send email">
// //               contact@meadhikari.com
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
// //         <p className="text-sm text-gray-600">
// //           © Copyright 2025 Meadhikari. All rights reserved.
// //         </p>
// //         <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
// //           <li>
// //             <a
// //               href="#"
// //               className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
// //             >
// //               Privacy &amp; Cookies Policy
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#"
// //               className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
// //             >
// //               Disclaimer
// //             </a>
// //           </li>
// //         </ul>
// //       </div>
// //     </footer>
// //   );
// // };

// // // export default Footer

// // export default Footer;

// "use client";
// import { Context } from "@/Context/Context";
// import Image from "next/image";
// import Link from "next/link";
// import { useContext } from "react";

// const Footer = () => {
//   // Define color variables
//   const backgroundColor = "#F9FAFC"; // Background color
//   const textColorPrimary = "text-gray-800"; // Primary text color
//   const textColorSecondary = "text-gray-600"; // Secondary text color
//   const textColorAccent = "text-gray-900"; // Accent text color
//   const hoverColor = "hover:text-deep-purple-accent-400"; // Hover color

//   return (
//     <footer className={`bg-[${backgroundColor}] px-6 pt-8 lg:px-12`}>
//       {/* Footer content grid */}
//       <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4">
//         {/* Logo and description */}
//         <div className="sm:col-span-2">
//           <a href="#" className="inline-flex items-center space-x-3">
//             <Image
//               src="/images/example.png"
//               alt="logo"
//               width={200}
//               height={200}
//               className="object-contain"
//             />
//           </a>
//           <div className="mt-6 max-w-xl">
//             <p className={`text-sm ${textColorPrimary}`}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//               felis mi, faucibus dignissim lorem id, imperdiet interdum mauris.
//               Suspendisse potenti.
//             </p>
//           </div>
//         </div>

//         {/* Services */}
//         <div className="flex flex-col gap-3 text-sm">
//           <p className={`text-lg font-semibold ${textColorAccent}`}>Services</p>
//           <a
//             href="#"
//             className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
//           >
//             Previous Year Question Papers
//           </a>
//           <a
//             href="#"
//             className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
//           >
//             Pricing
//           </a>
//           <p className={`text-lg font-semibold ${textColorAccent}`}>
//             Who are we
//           </p>
//           <a
//             href="#"
//             className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
//           >
//             About us
//           </a>
//           <a
//             href="#"
//             className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
//           >
//             Contact us
//           </a>
//         </div>

//         {/* Contact and social media links */}
//         <div>
//           <p className={`text-lg font-semibold ${textColorAccent}`}>
//             WE ARE ALSO AVAILABLE ON
//           </p>
//           <div className="flex items-center gap-2 mt-2">
//             <a href="#" className="w-full">
//               <Image
//                 src="https://mcqmate.com/public/images/icons/playstore.svg"
//                 alt="Playstore Button"
//                 width={135}
//                 height={70}
//               />
//             </a>
//             <a
//               href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
//               className="w-full"
//             >
//               <Image
//                 src="https://mcqmate.com/public/images/icons/youtube.svg"
//                 alt="Youtube Button"
//                 width={135}
//                 height={70}
//               />
//             </a>
//           </div>
//           <p className={`text-lg font-semibold ${textColorAccent}`}>Contacts</p>
//           <div className="flex items-center">
//             <p className={`mr-1 ${textColorPrimary}`}>Email:</p>
//             <a
//               href="mailto:contact@meadhikari.com"
//               className={`text-sm ${textColorSecondary}`}
//             >
//               contact@meadhikari.com
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer bottom section */}
//       <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-300 lg:flex-row">
//         <p className={`text-sm ${textColorSecondary}`}>
//           © 2025 Meadhikari. All rights reserved.
//         </p>
//         <ul className="flex space-x-5 sm:space-x-8">
//           <li>
//             <a
//               href="#"
//               className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
//             >
//               Privacy &amp; Cookies Policy
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
//             >
//               Disclaimer
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Footer = () => {
  // Define color variables
  const backgroundColor = "#F9FAFC"; // Background color
  const textColorPrimary = "text-gray-800"; // Primary text color
  const textColorSecondary = "text-gray-600"; // Secondary text color
  const textColorAccent = "text-gray-900"; // Accent text color
  const hoverColor = "hover:text-deep-purple-accent-400"; // Hover color

  return (
    <footer className={`bg-[${backgroundColor}] px-6 pt-8 lg:px-12`}>
      {/* Footer content grid */}
      <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo and description */}
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center space-x-3">
            <Image
              src="/images/example.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </a>
          <div className="mt-6 max-w-xl">
            <p className={`text-sm ${textColorPrimary}`}>
              Meadhikari is your ultimate test preparation companion, designed
              to help you succeed in various Maharashtra government exams with
              confidence. Our app provides access to a vast collection of
              previous year question papers (PYQ) and test preparation resources
              for exams like MPSC, Talathi, Gramsevak, Vanvibhag, and more.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3 text-sm">
          <p className={`text-lg font-semibold ${textColorAccent}`}>Services</p>
          <a
            href="#"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            Previous Year Question Papers
          </a>
          <a
            href="#"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            Pricing
          </a>
          <p className={`text-lg font-semibold ${textColorAccent}`}>
            Who are we
          </p>
          <a
            href="#"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            About us
          </a>
          <a
            href="#"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            Contact us
          </a>
        </div>

        {/* Contact and social media links */}
        <div>
          <p className={`text-lg font-semibold ${textColorAccent}`}>
            WE ARE ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-2 mt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.sc.meadhikari"
              className="w-full"
            >
              <Image
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                width={135}
                height={70}
              />
            </a>
            <a
              href="https://youtube.com/@meadhikariacademy?si=ymG9R9eYMtouoOe7"
              className="w-full"
            >
              <Image
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                width={135}
                height={70}
              />
            </a>
          </div>
          <p className={`text-lg font-semibold ${textColorAccent}`}>Contacts</p>
          <div className="flex items-center">
            <p className={`mr-1 ${textColorPrimary}`}>Email:</p>
            <a
              href="mailto:contact@meadhikari.com"
              className={`text-sm ${textColorSecondary}`}
            >
              contact@meadhikari.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-300 lg:flex-row">
        <p className={`text-sm ${textColorSecondary}`}>
          © 2025 Meadhikari. All rights reserved.
        </p>
        <ul className="flex space-x-5 sm:space-x-8">
          <li>
            <a
              href="#"
              className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
