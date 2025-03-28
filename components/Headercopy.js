// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useAuth } from "@/Context/AuthContext"; // Import the useAuth hook
// import LoginPopup from "./LoginPopup";

// const Headercopy = () => {
//   const { user, logout, setUser } = useAuth(); // Destructure user, logout, and setUser from AuthContext
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Logout Modal State
//   const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false); // State for Exam Dropdown

//   const handleToggleMenu = () => {
//     setMenuVisible((prevVisible) => !prevVisible);
//   };

//   const openLoginPopup = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginPopup = () => {
//     setIsLoginOpen(false);
//   };

//   const handleLogout = () => {
//     logout();
//     localStorage.removeItem("userSession"); // Clear session from localStorage
//     setIsLogoutModalOpen(false);
//   };

//   // Store user session in localStorage on login
//   useEffect(() => {
//     const savedUser = localStorage.getItem("userSession");

//     if (savedUser) {
//       setUser(JSON.parse(savedUser)); // Set the user session from localStorage
//     }
//   }, [setUser]);

//   const saveUserSession = (userData) => {
//     localStorage.setItem("userSession", JSON.stringify(userData)); // Save session to localStorage
//   };

//   const handleLogin = (userData) => {
//     setUser(userData);
//     saveUserSession(userData); // Save user session when they log in
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
//             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800 relative">
//               {/* Home */}
//               <li>
//                 <a
//                   href="/"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Home
//                 </a>
//               </li>

//               {/* Exams Dropdown */}
//               <li
//                 className="relative cursor-pointer"
//                 onMouseEnter={() => setIsExamDropdownOpen(true)} // Hover for desktop
//                 onMouseLeave={() => setIsExamDropdownOpen(false)} // Hover for desktop
//                 onClick={() => setIsExamDropdownOpen((prev) => !prev)} // Click for mobile
//                 tabIndex={0} // Make it focusable
//                 role="button"
//                 aria-expanded={isExamDropdownOpen}
//                 aria-haspopup="true"
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     setIsExamDropdownOpen((prev) => !prev);
//                   }
//                 }}
//               >
//                 <span
//                   className={`flex items-center gap-2 font-semibold text-sm ${
//                     isExamDropdownOpen ? "text-blue-600" : "hover:text-blue-500"
//                   }`}
//                 >
//                   Exams
//                   {/* Arrow Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className={`w-4 h-4 transition-transform duration-300 ${
//                       isExamDropdownOpen ? "rotate-180" : ""
//                     }`}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </span>
//                 {/* Dropdown Content */}
//                 {isExamDropdownOpen && (
//                   <ul className="absolute lg:absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-full lg:w-48">
//                     <li>
//                       <a
//                         href="/exams/mpsc"
//                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                         MPSC
//                       </a>
//                     </li>
//                     <hr className="border-t border-gray-200 mx-4 lg:hidden" />
//                     <li>
//                       <a
//                         href="/exams/talathi-bharti"
//                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                         Talathi Bharti
//                       </a>
//                     </li>
//                     <hr className="border-t border-gray-200 mx-4 lg:hidden" />
//                     <li>
//                       <a
//                         href="/exams/maharastra-police-bharti"
//                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                         Maharastra Police Bharti
//                       </a>
//                     </li>
//                     <hr className="border-t border-gray-200 mx-4 lg:hidden" />
//                     <li>
//                       <a
//                         href="/exams"
//                         className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 font-semibold"
//                       >
//                         View All Exams
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </li>

//               {/* Other Menu Items */}
//               <li>
//                 <a
//                   href="/previous-year-paper"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Previous Year Papers
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
//                   href="/blogs"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Blogs
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
//                   href="/contact"
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Contact us
//                 </a>
//               </li>
//             </ul>

//             {/* User Info & Login/Logout Buttons */}
//             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 items-center justify-center">
//               {user ? (
//                 <div className="flex items-center gap-2">
//                   {/* Username with Logout Icon */}
//                   <button
//                     onClick={() => setIsLogoutModalOpen(true)}
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

//       {isLogoutModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center transform scale-95 transition-all duration-300 ease-out animate-fade-in">
//             {/* Modal Title */}
//             <h2 className="text-lg font-semibold text-gray-800">
//               Confirm Logout
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">
//               Are you sure you want to logout?
//             </p>

//             {/* Buttons */}
//             <div className="mt-5 flex justify-center gap-4">
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 shadow-md"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={() => setIsLogoutModalOpen(false)}
//                 className="px-4 py-2 text-sm font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all duration-200 shadow-md"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

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
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Logout Modal State
  const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false); // State for Exam Dropdown

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
    setIsLogoutModalOpen(false);
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
            <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800 relative">
              {/* Home */}
              <li>
                <a
                  href="/"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Home
                </a>
              </li>

              {/* Exams Dropdown */}
              <li
                className="relative cursor-pointer group"
                onMouseEnter={() => setIsExamDropdownOpen(true)} // Hover for desktop
                onMouseLeave={() => setIsExamDropdownOpen(false)} // Hover for desktop
                onClick={() => setIsExamDropdownOpen((prev) => !prev)} // Click for mobile
                tabIndex={0} // Make it focusable
                role="button"
                aria-expanded={isExamDropdownOpen}
                aria-haspopup="true"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsExamDropdownOpen((prev) => !prev);
                  }
                }}
              >
                <span
                  className={`flex items-center gap-2 font-semibold text-sm ${
                    isExamDropdownOpen ? "text-blue-600" : "hover:text-blue-500"
                  }`}
                >
                  Exams
                  {/* Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExamDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                {/* Dropdown Content */}
                <ul
                  className={`absolute lg:absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-full lg:w-48 ${
                    isExamDropdownOpen ? "block" : "hidden group-hover:block"
                  }`}
                >
                  {/* <li>
                    <a
                      href="/exams/mpsc"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      MPSC
                    </a>
                  </li>
                  <hr className="border-t border-gray-200 mx-4 lg:hidden" /> */}
                  <li>
                    <a
                      href="/exams/talathi-bharti"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Talathi Bharti
                    </a>
                  </li>
                  <hr className="border-t border-gray-200 mx-4 lg:hidden" />
                  <li>
                    <a
                      href="/exams/maharastra-police-bharti"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Maharastra Police Bharti
                    </a>
                  </li>
                  <hr className="border-t border-gray-200 mx-4 lg:hidden" />
                  {/* <li>
                    <a
                      href="/exams"
                      className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 font-semibold"
                    >
                      View All Exams
                    </a>
                  </li> */}
                </ul>
              </li>

              {/* Other Menu Items */}
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
                  href="/pricing"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Pricing
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
                  href="/contact"
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Contact us
                </a>
              </li>
            </ul>

            {/* User Info & Login/Logout Buttons */}
            <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 items-center justify-center">
              {user ? (
                <div className="flex items-center gap-2">
                  {/* Username with Logout Icon */}
                  <button
                    onClick={() => setIsLogoutModalOpen(true)}
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

      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center transform scale-95 transition-all duration-300 ease-out animate-fade-in">
            {/* Modal Title */}
            <h2 className="text-lg font-semibold text-gray-800">
              Confirm Logout
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to logout?
            </p>
            {/* Buttons */}
            <div className="mt-5 flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 shadow-md"
              >
                Logout
              </button>
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="px-4 py-2 text-sm font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all duration-200 shadow-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />
    </>
  );
};

export default Headercopy;
