// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Image from "next/image";
// // import LoginPopup from "./LoginPopup";

// // const Headercopy = () => {
// //   const [menuVisible, setMenuVisible] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isLoginOpen, setIsLoginOpen] = useState(false);

// //   const handleToggleMenu = () => {
// //     setMenuVisible((prevVisible) => !prevVisible);
// //   };

// //   const openLoginPopup = () => {
// //     setIsLoginOpen(true);
// //   };

// //   const closeLoginPopup = () => {
// //     setIsLoginOpen(false);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       {/* Header */}
// //       <header
// //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// //           isScrolled
// //             ? "bg-blue/80 shadow-md text-gray-900"
// //             : "bg-blue/40 text-white"
// //         }`}
// //       >
// //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// //           {/* Logo */}
// //           <a href="/">
// //             <Image
// //               src="/images/logo.png"
// //               alt="Example Image"
// //               width={120}
// //               height={50}
// //               className="w-25"
// //             />
// //           </a>

// //           {/* Mobile Menu Toggle Button */}
// //           <button
// //             onClick={handleToggleMenu}
// //             className="lg:hidden p-2 border rounded-md"
// //           >
// //             {!menuVisible ? (
// //               <svg
// //                 className="w-6 h-6"
// //                 fill="black"
// //                 viewBox="0 0 20 20"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //             ) : (
// //               <svg
// //                 className="w-6 h-6"
// //                 fill="black"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   d="M6 18L18 6M6 6l12 12"
// //                   stroke="black"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               </svg>
// //             )}
// //           </button>

// //           {/* Menu */}
// //           <div
// //             className={`lg:flex lg:items-center lg:gap-5 ${
// //               menuVisible
// //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// //                 : "hidden lg:block"
// //             }`}
// //           >
// //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// //               <li>
// //                 <a
// //                   href="/"
// //                   className="block font-semibold text-sm hover:text-blue-500"
// //                 >
// //                   Home
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/about"
// //                   className="block font-semibold text-sm hover:text-blue-500"
// //                 >
// //                   About us
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/pricing"
// //                   className="block font-semibold text-sm hover:text-blue-500"
// //                 >
// //                   Pricing
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/contact"
// //                   className="block font-semibold text-sm hover:text-blue-500"
// //                 >
// //                   Contact us
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/paper-landing"
// //                   className="block font-semibold text-sm hover:text-blue-500"
// //                 >
// //                   Previous Year Papers
// //                 </a>
// //               </li>
// //             </ul>

// //             {/* Login & Signup Buttons */}
// //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// //               <button
// //                 onClick={openLoginPopup}
// //                 className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300"
// //               >
// //                 Login
// //               </button>
// //               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
// //                 Sign up
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Content Padding */}
// //       <div className="pt-[10px]"></div>

// //       {/* Login Popup */}
// //       <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />
// //     </>
// //   );
// // };

// // export default Headercopy;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useAuth } from "@/Context/AuthContext"; // Import the useAuth hook
// import LoginPopup from "./LoginPopup";

// const Headercopy = () => {
//   const { user, logout } = useAuth(); // Destructure user and logout from AuthContext
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

//   const handleToggleMenu = () => {
//     setMenuVisible((prevVisible) => !prevVisible);
//   };

//   const openLoginPopup = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginPopup = () => {
//     setIsLoginOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
//           isScrolled
//             ? "bg-blue/80 shadow-md text-gray-900"
//             : "bg-blue/40 text-white"
//         }`}
//       >
//         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
//           {/* Logo */}
//           <a href="/">
//             <Image
//               src="/images/logo.png"
//               alt="Meadhikari"
//               width={120}
//               height={50}
//               className="w-25"
//             />
//           </a>

//           {/* Mobile Menu Toggle Button */}
//           <button
//             onClick={handleToggleMenu}
//             className="lg:hidden p-2 border rounded-md"
//           >
//             {!menuVisible ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="black"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="black"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 18L18 6M6 6l12 12"
//                   stroke="black"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             )}
//           </button>

//           {/* Menu */}
//           <div
//             className={`lg:flex lg:items-center lg:gap-5 ${
//               menuVisible
//                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
//                 : "hidden lg:block"
//             }`}
//           >
//             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
//               <li>
//                 <a
//                   href="/"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   About us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/pricing"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Contact us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/paper-landing"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Previous Year Papers
//                 </a>
//               </li>
//             </ul>

//             {/* User Info & Login/Logout Buttons */}
//             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 items-center justify-center">
//               {user ? (
//                 <div className="flex items-center gap-2">
//                   {/* Username with Logout Icon */}
//                   <button
//                     onClick={logout}
//                     className="flex items-center gap-2 px-4 py-2 text-sm rounded-full font-bold text-white bg-red-600 hover:bg-red-700 transition-all ease-in-out duration-300"
//                   >
//                     {user.username}
//                     {/* Logout icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={openLoginPopup}
//                   className="px-4 py-2 text-sm rounded-full font-bold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300"
//                 >
//                   Login/Register
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Content Padding */}
//       <div className="pt-[10px]"></div>

//       {/* Login Popup */}
//       <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />
//     </>
//   );
// };

// export default Headercopy;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/Context/AuthContext"; // Import the useAuth hook
import LoginPopup from "./LoginPopup";

const Headercopy = () => {
  const { user, logout, setUser } = useAuth(); // Destructure user, logout, and setUser from AuthContext
  const [menuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  const openLoginPopup = () => {
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("userSession"); // Clear session from localStorage
  };

  // Store user session in localStorage on login
  useEffect(() => {
    const savedUser = localStorage.getItem("userSession");

    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Set the user session from localStorage
    }
  }, [setUser]);

  const saveUserSession = (userData) => {
    localStorage.setItem("userSession", JSON.stringify(userData)); // Save session to localStorage
  };

  const handleLogin = (userData) => {
    setUser(userData);
    saveUserSession(userData); // Save user session when they log in
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? "bg-blue/80 shadow-md text-gray-900"
            : "bg-blue/40 text-white"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
          {/* Logo */}
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Meadhikari"
              width={120}
              height={50}
              className="w-25"
            />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={handleToggleMenu}
            className="lg:hidden p-2 border rounded-md"
          >
            {!menuVisible ? (
              <svg
                className="w-6 h-6"
                fill="black"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Menu */}
          <div
            className={`lg:flex lg:items-center lg:gap-5 ${
              menuVisible
                ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
                : "hidden lg:block"
            }`}
          >
            <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
              <li>
                <a
                  href="/"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/previous-year-paper"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Previous Year Papers
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Blogs
                </a>
              </li>
            </ul>

            {/* User Info & Login/Logout Buttons */}
            <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 items-center justify-center">
              {user ? (
                <div className="flex items-center gap-2">
                  {/* Username with Logout Icon */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-full font-bold text-white bg-red-600 hover:bg-red-700 transition-all ease-in-out duration-300"
                  >
                    {user.username}
                    {/* Logout icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  onClick={openLoginPopup}
                  className="px-4 py-2 text-sm rounded-full font-bold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300"
                >
                  Login/Register
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content Padding */}
      <div className="pt-[10px]"></div>

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />
    </>
  );
};

export default Headercopy;
