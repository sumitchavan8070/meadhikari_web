// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useAuth } from "@/Context/AuthContext";
// import LoginPopup from "./LoginPopup";

// const Headercopy = () => {
//   const { user, logout, setUser } = useAuth();
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
//   const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const hoverTimerRef = useRef(null);
//   const isMobileRef = useRef(false);

//   // Check if mobile on mount
//   useEffect(() => {
//     isMobileRef.current = window.innerWidth < 1024;
//     const handleResize = () => {
//       isMobileRef.current = window.innerWidth < 1024;
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Enhanced hover handling with delay (desktop only)
//   const handleMouseEnter = () => {
//     if (isMobileRef.current) return;
//     clearTimeout(hoverTimerRef.current);
//     setIsExamDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     if (isMobileRef.current) return;
//     hoverTimerRef.current = setTimeout(() => {
//       setIsExamDropdownOpen(false);
//     }, 300);
//   };

//   // Mobile-specific dropdown toggle
//   const toggleExamDropdown = () => {
//     if (!isMobileRef.current) return;
//     setIsExamDropdownOpen((prev) => !prev);
//   };

//   const handleToggleMenu = () => {
//     setMenuVisible((prev) => !prev);
//     // Close exam dropdown when mobile menu closes
//     if (menuVisible) {
//       setIsExamDropdownOpen(false);
//     }
//   };

//   const openLoginPopup = () => {
//     setIsLoginOpen(true);
//     setMenuVisible(false); // Close mobile menu when opening login
//   };

//   const closeLoginPopup = () => {
//     setIsLoginOpen(false);
//   };

//   const handleLogout = () => {
//     logout();
//     localStorage.removeItem("userSession");
//     setIsLogoutModalOpen(false);
//   };

//   useEffect(() => {
//     const savedUser = localStorage.getItem("userSession");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, [setUser]);

//   const saveUserSession = (userData) => {
//     localStorage.setItem("userSession", JSON.stringify(userData));
//   };

//   const handleLogin = (userData) => {
//     setUser(userData);
//     saveUserSession(userData);
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

//   // Clear timeout when component unmounts
//   useEffect(() => {
//     return () => {
//       clearTimeout(hoverTimerRef.current);
//     };
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsExamDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Keyboard navigation for dropdown
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (isExamDropdownOpen && (e.key === "Escape" || e.key === "Tab")) {
//         setIsExamDropdownOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isExamDropdownOpen]);

//   // Close dropdown when menu closes on mobile
//   useEffect(() => {
//     if (!menuVisible && isMobileRef.current) {
//       setIsExamDropdownOpen(false);
//     }
//   }, [menuVisible]);

//   // Exam data for dropdown
//   const examItems = [
//     {
//       name: "Talathi Bharti",
//       localName: "तलाठी भरती",
//       href: "/exams/talathi-bharti",
//       icon: "/logos/maharastraColor.png",
//       alt: "Talathi Bharti",
//     },
//     {
//       name: "Maharastra Police Bharti",
//       localName: "महाराष्ट्र पोलीस भरती",
//       href: "/exams/maharastra-police-bharti",
//       icon: "/logos/police.png",
//       alt: "Maharastra Police Bharti",
//     },
//     {
//       name: "Maharastra Vanrakshak Bharti",
//       localName: "महाराष्ट्र वनरक्षक भरती",
//       href: "/exams/mahaforest-vanrakshak-bharti",
//       icon: "/logos/vanvibhag.png",
//       alt: "Maharastra Vanrakshak Bharti",
//     },
//     {
//       name: "Krushi Sevak Bharti",
//       localName: "कृषी सेवक भरती",
//       href: "/exams/krushi-sevak-bharti",
//       icon: "/logos/krushi.png",
//       alt: "Krushi Sevak Bharti",
//     },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
//           isScrolled
//             ? "bg-blue/80 shadow-md text-gray-900"
//             : "bg-blue/40 text-white"
//         }`}
//       >
//         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
//           {/* Logo */}
//           <a href="/" className="flex items-center">
//             <Image
//               src="/images/logo.png"
//               alt="Meadhikari"
//               width={120}
//               height={50}
//               className="w-25"
//               priority
//             />
//           </a>

//           {/* Mobile Menu Toggle Button */}
//           <button
//             onClick={handleToggleMenu}
//             className="lg:hidden p-2 border rounded-md"
//             aria-label={menuVisible ? "Close menu" : "Open menu"}
//             aria-expanded={menuVisible}
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
//                 ? "block fixed bg-white text-gray-800 w-full sm:w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-xl z-50 overflow-y-auto"
//                 : "hidden lg:block"
//             }`}
//           >
//             {/* Mobile menu header */}
//             {menuVisible && (
//               <div className="flex justify-between items-center mb-6 lg:hidden">
//                 <a href="/" className="flex items-center">
//                   <Image
//                     src="/images/logo.png"
//                     alt="Meadhikari"
//                     width={120}
//                     height={50}
//                     className="w-25"
//                   />
//                 </a>
//                 <button
//                   onClick={handleToggleMenu}
//                   className="p-2 rounded-md hover:bg-gray-100"
//                   aria-label="Close menu"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="black"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M6 18L18 6M6 6l12 12"
//                       stroke="black"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             )}

//             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800 relative">
//               {/* Home */}
//               <li>
//                 <a
//                   href="/"
//                   className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
//                   onClick={() => setMenuVisible(false)}
//                 >
//                   Home
//                 </a>
//               </li>

//               {/* Enhanced Exams Dropdown */}
//               <li
//                 className="relative"
//                 ref={dropdownRef}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   onClick={toggleExamDropdown}
//                   className={`flex items-center gap-2 font-semibold text-sm ${
//                     isExamDropdownOpen ? "text-blue-600" : "hover:text-blue-500"
//                   } transition-colors duration-200 py-2 w-full lg:w-auto text-left`}
//                   aria-expanded={isExamDropdownOpen}
//                   aria-haspopup="true"
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       toggleExamDropdown();
//                       e.preventDefault();
//                     }
//                   }}
//                 >
//                   Exams
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className={`w-4 h-4 transition-transform duration-200 ${
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
//                 </button>

//                 {/* Dropdown Content */}
//                 <div
//                   className={`${
//                     isExamDropdownOpen ? "block" : "hidden"
//                   } lg:absolute lg:top-full lg:left-0 bg-white lg:shadow-xl rounded-lg lg:mt-2 py-2 w-full lg:w-96 max-h-[60vh] lg:max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full transition-all duration-200 ease-out ${
//                     isExamDropdownOpen ? "opacity-100" : "lg:opacity-0"
//                   }`}
//                   style={{
//                     transform: isMobileRef.current
//                       ? "none"
//                       : isExamDropdownOpen
//                       ? "translateX(-50%) scale(1)"
//                       : "translateX(-50%) scale(0.95)",
//                     left: isMobileRef.current ? "0" : "50%",
//                   }}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="p-2">
//                     <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                       Popular Exams
//                     </h3>
//                     <ul>
//                       {examItems.map((exam, index) => (
//                         <React.Fragment key={exam.href}>
//                           <li>
//                             <a
//                               href={exam.href}
//                               className="flex items-center px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-lg group"
//                               onClick={() => setMenuVisible(false)}
//                             >
//                               <div className="flex-shrink-0">
//                                 <Image
//                                   src={exam.icon}
//                                   alt={exam.alt}
//                                   width={36}
//                                   height={36}
//                                   className="rounded-full object-contain"
//                                 />
//                               </div>
//                               <div className="ml-3">
//                                 <p className="font-medium">{exam.name}</p>
//                                 <p className="text-xs text-gray-500">
//                                   {exam.localName}
//                                 </p>
//                               </div>
//                               <svg
//                                 className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M9 5l7 7-7 7"
//                                 />
//                               </svg>
//                             </a>
//                           </li>
//                           {index < examItems.length - 1 && (
//                             <hr className="border-t border-gray-100 mx-4" />
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 rounded-b-lg">
//                     <a
//                       href="/exams"
//                       className="flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
//                       onClick={() => setMenuVisible(false)}
//                     >
//                       View All Exams
//                       <svg
//                         className="ml-2 h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </li>

//               {/* Other Menu Items */}
//               <li>
//                 <a
//                   href="/previous-year-paper"
//                   className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
//                   onClick={() => setMenuVisible(false)}
//                 >
//                   Previous Year Papers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/pricing"
//                   className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
//                   onClick={() => setMenuVisible(false)}
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/blogs"
//                   className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
//                   onClick={() => setMenuVisible(false)}
//                 >
//                   Blogs
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about"
//                   className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
//                   onClick={() => setMenuVisible(false)}
//                 >
//                   About us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
//                   onClick={() => setMenuVisible(false)}
//                 >
//                   Contact us
//                 </a>
//               </li>
//             </ul>

//             {/* User Info & Login/Logout Buttons */}
//             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 items-center">
//               {user ? (
//                 <div className="flex items-center gap-2 w-full lg:w-auto">
//                   <button
//                     onClick={() => {
//                       setIsLogoutModalOpen(true);
//                       setMenuVisible(false);
//                     }}
//                     className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full font-bold text-white bg-red-600 hover:bg-red-700 transition-all duration-200 w-full lg:w-auto"
//                   >
//                     {user.username}
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
//                   className="px-4 py-2 text-sm rounded-full font-bold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 w-full lg:w-auto"
//                 >
//                   Login/Register
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Logout Modal */}
//       {isLogoutModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center transform scale-95 transition-all duration-300 ease-out animate-fade-in">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Confirm Logout
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">
//               Are you sure you want to logout?
//             </p>
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

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useAuth } from "@/Context/AuthContext";

const Header = () => {
  const { user, logout, setUser, openLoginPopup, closeLoginPopup } = useAuth();

  const [menuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimerRef = useRef(null);
  const isMobileRef = useRef(false);

  // Check if mobile on mount
  useEffect(() => {
    isMobileRef.current = window.innerWidth < 1024;
    const handleResize = () => {
      isMobileRef.current = window.innerWidth < 1024;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced hover handling with delay (desktop only)
  const handleMouseEnter = () => {
    if (isMobileRef.current) return;
    clearTimeout(hoverTimerRef.current);
    setIsExamDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobileRef.current) return;
    hoverTimerRef.current = setTimeout(() => {
      setIsExamDropdownOpen(false);
    }, 300);
  };

  // Mobile-specific dropdown toggle
  const toggleExamDropdown = () => {
    if (!isMobileRef.current) return;
    setIsExamDropdownOpen((prev) => !prev);
  };

  const handleToggleMenu = () => {
    setMenuVisible((prev) => !prev);
    if (menuVisible) {
      setIsExamDropdownOpen(false);
    }
  };

  const handleHeaderLoginClick = () => {
    openLoginPopup();
    setMenuVisible(false);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("userSession");
    setIsLogoutModalOpen(false);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("userSession");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [setUser]);

  const saveUserSession = (userData) => {
    localStorage.setItem("userSession", JSON.stringify(userData));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsExamDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isExamDropdownOpen && (e.key === "Escape" || e.key === "Tab")) {
        setIsExamDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExamDropdownOpen]);

  useEffect(() => {
    if (!menuVisible && isMobileRef.current) {
      setIsExamDropdownOpen(false);
    }
  }, [menuVisible]);

  const examItems = [
    {
      name: "Talathi Bharti",
      localName: "तलाठी भरती",
      href: "/exams/talathi-bharti",
      icon: "/logos/maharastraColor.png",
      alt: "Talathi Bharti",
    },
    {
      name: "Maharastra Police Bharti",
      localName: "महाराष्ट्र पोलीस भरती",
      href: "/exams/maharastra-police-bharti",
      icon: "/logos/police.png",
      alt: "Maharastra Police Bharti",
    },
    {
      name: "Maharastra Vanrakshak Bharti",
      localName: "महाराष्ट्र वनरक्षक भरती",
      href: "/exams/mahaforest-vanrakshak-bharti",
      icon: "/logos/vanvibhag.png",
      alt: "Maharastra Vanrakshak Bharti",
    },
    {
      name: "Krushi Sevak Bharti",
      localName: "कृषी सेवक भरती",
      href: "/exams/krushi-sevak-bharti",
      icon: "/logos/krushi.png",
      alt: "Krushi Sevak Bharti",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? "bg-blue/80 shadow-md text-gray-900"
            : "bg-blue/40 text-white"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Meadhikari"
              width={120}
              height={50}
              className="w-25"
              priority
            />
          </a>

          <button
            onClick={handleToggleMenu}
            className="lg:hidden p-2 border rounded-md"
            aria-label={menuVisible ? "Close menu" : "Open menu"}
            aria-expanded={menuVisible}
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

          <div
            className={`lg:flex lg:items-center lg:gap-5 ${
              menuVisible
                ? "block fixed bg-white text-gray-800 w-full sm:w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-xl z-50 overflow-y-auto"
                : "hidden lg:block"
            }`}
          >
            {menuVisible && (
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <a href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Meadhikari"
                    width={120}
                    height={50}
                    className="w-25"
                  />
                </a>
                <button
                  onClick={handleToggleMenu}
                  className="p-2 rounded-md hover:bg-gray-100"
                  aria-label="Close menu"
                >
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
                </button>
              </div>
            )}

            <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800 relative">
              <li>
                <a
                  href="/"
                  className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
                  onClick={() => setMenuVisible(false)}
                >
                  Home
                </a>
              </li>

              <li
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={toggleExamDropdown}
                  className={`flex items-center gap-2 font-semibold text-sm ${
                    isExamDropdownOpen ? "text-blue-600" : "hover:text-blue-500"
                  } transition-colors duration-200 py-2 w-full lg:w-auto text-left`}
                  aria-expanded={isExamDropdownOpen}
                  aria-haspopup="true"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleExamDropdown();
                      e.preventDefault();
                    }
                  }}
                >
                  Exams
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-200 ${
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
                </button>

                <div
                  className={`${
                    isExamDropdownOpen ? "block" : "hidden"
                  } lg:absolute lg:top-full lg:left-0 bg-white lg:shadow-xl rounded-lg lg:mt-2 py-2 w-full lg:w-96 max-h-[60vh] lg:max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full transition-all duration-200 ease-out ${
                    isExamDropdownOpen ? "opacity-100" : "lg:opacity-0"
                  }`}
                  style={{
                    transform: isMobileRef.current
                      ? "none"
                      : isExamDropdownOpen
                      ? "translateX(-50%) scale(1)"
                      : "translateX(-50%) scale(0.95)",
                    left: isMobileRef.current ? "0" : "50%",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-2">
                    <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Popular Exams
                    </h3>
                    <ul>
                      {examItems.map((exam, index) => (
                        <React.Fragment key={exam.href}>
                          <li>
                            <a
                              href={exam.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-lg group"
                              onClick={() => setMenuVisible(false)}
                            >
                              <div className="flex-shrink-0">
                                <Image
                                  src={exam.icon}
                                  alt={exam.alt}
                                  width={36}
                                  height={36}
                                  className="rounded-full object-contain"
                                />
                              </div>
                              <div className="ml-3">
                                <p className="font-medium">{exam.name}</p>
                                <p className="text-xs text-gray-500">
                                  {exam.localName}
                                </p>
                              </div>
                              <svg
                                className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </a>
                          </li>
                          {index < examItems.length - 1 && (
                            <hr className="border-t border-gray-100 mx-4" />
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 rounded-b-lg">
                    <a
                      href="/previous-year-paper"
                      className="flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      onClick={() => setMenuVisible(false)}
                    >
                      View All Exams
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="/previous-year-paper"
                  className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
                  onClick={() => setMenuVisible(false)}
                >
                  Previous Year Papers
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
                  onClick={() => setMenuVisible(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
                  onClick={() => setMenuVisible(false)}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
                  onClick={() => setMenuVisible(false)}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block font-semibold text-sm hover:text-blue-500 transition-colors duration-200 py-2"
                  onClick={() => setMenuVisible(false)}
                >
                  Contact us
                </a>
              </li>
            </ul>

            <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 items-center">
              {user ? (
                <div className="flex items-center gap-2 w-full lg:w-auto">
                  <button
                    onClick={() => {
                      setIsLogoutModalOpen(true);
                      setMenuVisible(false);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full font-bold text-white bg-red-600 hover:bg-red-700 transition-all duration-200 w-full lg:w-auto"
                  >
                    {user.username}
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
                  onClick={handleHeaderLoginClick}
                  className="px-4 py-2 text-sm rounded-full font-bold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 w-full lg:w-auto"
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
            <h2 className="text-lg font-semibold text-gray-800">
              Confirm Logout
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to logout?
            </p>
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
    </>
  );
};

export default Header;
