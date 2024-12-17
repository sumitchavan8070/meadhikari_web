// // // // // // // // // "use client";
// // // // // // // // // import { useContext, useEffect, useState } from "react";
// // // // // // // // // import { Context } from "@/Context/Context";
// // // // // // // // // import Image from "next/image";

// // // // // // // // // const Headercopy = () => {
// // // // // // // // //   const [menuVisible, setMenuVisible] = useState(false);
// // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // //   const { user, handleLogout } = useContext(Context);

// // // // // // // // //   const handleToggleMenu = () => {
// // // // // // // // //     setMenuVisible((prevVisible) => !prevVisible);
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* Header */}
// // // // // // // // //       <header
// // // // // // // // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // // // // // // // //           isScrolled
// // // // // // // // //             ? "bg-blue/80 shadow-md text-gray-900"
// // // // // // // // //             : "bg-blue/40 text-white"
// // // // // // // // //         }`}
// // // // // // // // //       >
// // // // // // // // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // // // // // // // //           {/* Logo */}
// // // // // // // // //           <a href="/">
// // // // // // // // //             <Image
// // // // // // // // //               src="/images/logo.png"
// // // // // // // // //               alt="Example Image"
// // // // // // // // //               width={120}
// // // // // // // // //               height={50}
// // // // // // // // //               className="w-25"
// // // // // // // // //             />
// // // // // // // // //           </a>

// // // // // // // // //           {/* Mobile Menu Toggle Button */}
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleToggleMenu}
// // // // // // // // //             className="lg:hidden p-2 border rounded-md"
// // // // // // // // //           >
// // // // // // // // //             {!menuVisible ? (
// // // // // // // // //               <svg
// // // // // // // // //                 className="w-6 h-6"
// // // // // // // // //                 fill="black"
// // // // // // // // //                 viewBox="0 0 20 20"
// // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //               >
// // // // // // // // //                 <path
// // // // // // // // //                   fillRule="evenodd"
// // // // // // // // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // // // // // // // //                   clipRule="evenodd"
// // // // // // // // //                 />
// // // // // // // // //               </svg>
// // // // // // // // //             ) : (
// // // // // // // // //               <svg
// // // // // // // // //                 className="w-6 h-6"
// // // // // // // // //                 fill="black"
// // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //               >
// // // // // // // // //                 <path
// // // // // // // // //                   d="M6 18L18 6M6 6l12 12"
// // // // // // // // //                   stroke="black"
// // // // // // // // //                   strokeWidth="2"
// // // // // // // // //                   strokeLinecap="round"
// // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // //                 />
// // // // // // // // //               </svg>
// // // // // // // // //             )}
// // // // // // // // //           </button>

// // // // // // // // //           {/* Menu */}
// // // // // // // // //           <div
// // // // // // // // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // // // // // // // //               menuVisible
// // // // // // // // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // // // // // // // //                 : "hidden lg:block"
// // // // // // // // //             }`}
// // // // // // // // //           >
// // // // // // // // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // // // // // // // //               <li>
// // // // // // // // //                 <a
// // // // // // // // //                   href="/"
// // // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // // //                 >
// // // // // // // // //                   Home
// // // // // // // // //                 </a>
// // // // // // // // //               </li>
// // // // // // // // //               <li>
// // // // // // // // //                 <a
// // // // // // // // //                   href="/about"
// // // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // // //                 >
// // // // // // // // //                   About us
// // // // // // // // //                 </a>
// // // // // // // // //               </li>
// // // // // // // // //               <li>
// // // // // // // // //                 <a
// // // // // // // // //                   href="/pricing"
// // // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // // //                 >
// // // // // // // // //                   Pricing
// // // // // // // // //                 </a>
// // // // // // // // //               </li>
// // // // // // // // //               <li>
// // // // // // // // //                 <a
// // // // // // // // //                   href="/contact"
// // // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // // //                 >
// // // // // // // // //                   Contact us
// // // // // // // // //                 </a>
// // // // // // // // //               </li>
// // // // // // // // //             </ul>

// // // // // // // // //             {/* Login & Signup Buttons */}
// // // // // // // // //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// // // // // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
// // // // // // // // //                 Login
// // // // // // // // //               </button>
// // // // // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
// // // // // // // // //                 Sign up
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </header>

// // // // // // // // //       {/* Content Padding */}
// // // // // // // // //       <div className="pt-[10px]"></div>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Headercopy;

// // // // // // // // "use client";
// // // // // // // // import { useContext, useEffect, useState } from "react";
// // // // // // // // import { Context } from "@/Context/Context";
// // // // // // // // import Image from "next/image";

// // // // // // // // const Headercopy = () => {
// // // // // // // //   const [menuVisible, setMenuVisible] = useState(false);
// // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // //   const [categoryVisible, setCategoryVisible] = useState(false); // State to track category visibility
// // // // // // // //   const { user, handleLogout } = useContext(Context);

// // // // // // // //   const handleToggleMenu = () => {
// // // // // // // //     setMenuVisible((prevVisible) => !prevVisible);
// // // // // // // //   };

// // // // // // // //   const handleCategoryHover = () => {
// // // // // // // //     setCategoryVisible(true);
// // // // // // // //   };

// // // // // // // //   const handleCategoryLeave = () => {
// // // // // // // //     setCategoryVisible(false);
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => {
// // // // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // // // //     };

// // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* Header */}
// // // // // // // //       <header
// // // // // // // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // // // // // // //           isScrolled
// // // // // // // //             ? "bg-blue/80 shadow-md text-gray-900"
// // // // // // // //             : "bg-blue/40 text-white"
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // // // // // // //           {/* Logo */}
// // // // // // // //           <a href="/">
// // // // // // // //             <Image
// // // // // // // //               src="/images/logo.png"
// // // // // // // //               alt="Example Image"
// // // // // // // //               width={120}
// // // // // // // //               height={50}
// // // // // // // //               className="w-25"
// // // // // // // //             />
// // // // // // // //           </a>

// // // // // // // //           {/* Mobile Menu Toggle Button */}
// // // // // // // //           <button
// // // // // // // //             onClick={handleToggleMenu}
// // // // // // // //             className="lg:hidden p-2 border rounded-md"
// // // // // // // //           >
// // // // // // // //             {!menuVisible ? (
// // // // // // // //               <svg
// // // // // // // //                 className="w-6 h-6"
// // // // // // // //                 fill="black"
// // // // // // // //                 viewBox="0 0 20 20"
// // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // //               >
// // // // // // // //                 <path
// // // // // // // //                   fillRule="evenodd"
// // // // // // // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // // // // // // //                   clipRule="evenodd"
// // // // // // // //                 />
// // // // // // // //               </svg>
// // // // // // // //             ) : (
// // // // // // // //               <svg
// // // // // // // //                 className="w-6 h-6"
// // // // // // // //                 fill="black"
// // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // //               >
// // // // // // // //                 <path
// // // // // // // //                   d="M6 18L18 6M6 6l12 12"
// // // // // // // //                   stroke="black"
// // // // // // // //                   strokeWidth="2"
// // // // // // // //                   strokeLinecap="round"
// // // // // // // //                   strokeLinejoin="round"
// // // // // // // //                 />
// // // // // // // //               </svg>
// // // // // // // //             )}
// // // // // // // //           </button>

// // // // // // // //           {/* Menu */}
// // // // // // // //           <div
// // // // // // // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // // // // // // //               menuVisible
// // // // // // // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // // // // // // //                 : "hidden lg:block"
// // // // // // // //             }`}
// // // // // // // //           >
// // // // // // // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // // // // // // //               <li>
// // // // // // // //                 <a
// // // // // // // //                   href="/"
// // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // //                 >
// // // // // // // //                   Home
// // // // // // // //                 </a>
// // // // // // // //               </li>
// // // // // // // //               <li>
// // // // // // // //                 <a
// // // // // // // //                   href="/about"
// // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // //                 >
// // // // // // // //                   About us
// // // // // // // //                 </a>
// // // // // // // //               </li>
// // // // // // // //               <li>
// // // // // // // //                 <a
// // // // // // // //                   href="/pricing"
// // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // //                 >
// // // // // // // //                   Pricing
// // // // // // // //                 </a>
// // // // // // // //               </li>
// // // // // // // //               <li>
// // // // // // // //                 <a
// // // // // // // //                   href="/contact"
// // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // //                 >
// // // // // // // //                   Contact us
// // // // // // // //                 </a>
// // // // // // // //               </li>

// // // // // // // //               {/* Blogs Menu Item with Hover */}
// // // // // // // //               <li
// // // // // // // //                 className="relative"
// // // // // // // //                 onMouseEnter={handleCategoryHover}
// // // // // // // //                 onMouseLeave={handleCategoryLeave}
// // // // // // // //               >
// // // // // // // //                 <a
// // // // // // // //                   href="#"
// // // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // // //                 >
// // // // // // // //                   Blogs
// // // // // // // //                 </a>
// // // // // // // //                 {categoryVisible && (
// // // // // // // //                   <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-48 z-50 pointer-events-auto">
// // // // // // // //                     <ul className="space-y-4 p-4 text-sm">
// // // // // // // //                       {/* Blog Categories */}
// // // // // // // //                       <li>
// // // // // // // //                         <a
// // // // // // // //                           href="/blogs/category/tech"
// // // // // // // //                           className="hover:text-blue-500"
// // // // // // // //                         >
// // // // // // // //                           Tech
// // // // // // // //                         </a>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <a
// // // // // // // //                           href="/blogs/category/education"
// // // // // // // //                           className="hover:text-blue-500"
// // // // // // // //                         >
// // // // // // // //                           Education
// // // // // // // //                         </a>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <a
// // // // // // // //                           href="/blogs/category/lifestyle"
// // // // // // // //                           className="hover:text-blue-500"
// // // // // // // //                         >
// // // // // // // //                           Lifestyle
// // // // // // // //                         </a>
// // // // // // // //                       </li>
// // // // // // // //                       <li>
// // // // // // // //                         <a
// // // // // // // //                           href="/blogs/category/health"
// // // // // // // //                           className="hover:text-blue-500"
// // // // // // // //                         >
// // // // // // // //                           Health
// // // // // // // //                         </a>
// // // // // // // //                       </li>
// // // // // // // //                     </ul>
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //               </li>
// // // // // // // //             </ul>

// // // // // // // //             {/* Login & Signup Buttons */}
// // // // // // // //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// // // // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
// // // // // // // //                 Login
// // // // // // // //               </button>
// // // // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
// // // // // // // //                 Sign up
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </header>

// // // // // // // //       {/* Content Padding */}
// // // // // // // //       <div className="pt-[10px]"></div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Headercopy;
// // // // // // // "use client";
// // // // // // // import { useContext, useEffect, useState } from "react";
// // // // // // // import { Context } from "@/Context/Context";
// // // // // // // import Image from "next/image";

// // // // // // // const Headercopy = () => {
// // // // // // //   const [menuVisible, setMenuVisible] = useState(false);
// // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // //   const [categoriesVisible, setCategoriesVisible] = useState(false); // For showing categories
// // // // // // //   const [selectedCategory, setSelectedCategory] = useState(null); // To track selected category
// // // // // // //   const { user, handleLogout } = useContext(Context);

// // // // // // //   // Sample blog categories and articles data
// // // // // // //   const blogData = {
// // // // // // //     tech: [
// // // // // // //       {
// // // // // // //         id: 1,
// // // // // // //         title: "Latest Tech Trends in 2024",
// // // // // // //         url: "/blog/tech/latest-tech-trends",
// // // // // // //       },
// // // // // // //       {
// // // // // // //         id: 2,
// // // // // // //         title: "How AI is Changing the World",
// // // // // // //         url: "/blog/tech/ai-impact",
// // // // // // //       },
// // // // // // //     ],
// // // // // // //     education: [
// // // // // // //       {
// // // // // // //         id: 3,
// // // // // // //         title: "Top Study Tips for 2024",
// // // // // // //         url: "/blog/education/study-tips",
// // // // // // //       },
// // // // // // //       {
// // // // // // //         id: 4,
// // // // // // //         title: "How to Choose the Right Online Course",
// // // // // // //         url: "/blog/education/choose-course",
// // // // // // //       },
// // // // // // //     ],
// // // // // // //     lifestyle: [
// // // // // // //       {
// // // // // // //         id: 5,
// // // // // // //         title: "Living a Minimalist Lifestyle",
// // // // // // //         url: "/blog/lifestyle/minimalism",
// // // // // // //       },
// // // // // // //       {
// // // // // // //         id: 6,
// // // // // // //         title: "Healthy Eating Habits for a Better Life",
// // // // // // //         url: "/blog/lifestyle/healthy-eating",
// // // // // // //       },
// // // // // // //     ],
// // // // // // //     health: [
// // // // // // //       {
// // // // // // //         id: 7,
// // // // // // //         title: "Mental Health Awareness in 2024",
// // // // // // //         url: "/blog/health/mental-health",
// // // // // // //       },
// // // // // // //       {
// // // // // // //         id: 8,
// // // // // // //         title: "Physical Fitness Tips for Beginners",
// // // // // // //         url: "/blog/health/fitness-tips",
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   };

// // // // // // //   const handleToggleMenu = () => {
// // // // // // //     setMenuVisible((prevVisible) => !prevVisible);
// // // // // // //   };

// // // // // // //   const handleCategoryClick = (category) => {
// // // // // // //     setSelectedCategory(category);
// // // // // // //     setCategoriesVisible(false); // Hide categories once clicked
// // // // // // //   };

// // // // // // //   const handleBlogsClick = () => {
// // // // // // //     setCategoriesVisible((prevVisible) => !prevVisible);
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // // //     };

// // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // //     return () => {
// // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* Header */}
// // // // // // //       <header
// // // // // // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // // // // // //           isScrolled
// // // // // // //             ? "bg-blue/80 shadow-md text-gray-900"
// // // // // // //             : "bg-blue/40 text-white"
// // // // // // //         }`}
// // // // // // //       >
// // // // // // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // // // // // //           {/* Logo */}
// // // // // // //           <a href="/">
// // // // // // //             <Image
// // // // // // //               src="/images/logo.png"
// // // // // // //               alt="Example Image"
// // // // // // //               width={120}
// // // // // // //               height={50}
// // // // // // //               className="w-25"
// // // // // // //             />
// // // // // // //           </a>

// // // // // // //           {/* Mobile Menu Toggle Button */}
// // // // // // //           <button
// // // // // // //             onClick={handleToggleMenu}
// // // // // // //             className="lg:hidden p-2 border rounded-md"
// // // // // // //           >
// // // // // // //             {!menuVisible ? (
// // // // // // //               <svg
// // // // // // //                 className="w-6 h-6"
// // // // // // //                 fill="black"
// // // // // // //                 viewBox="0 0 20 20"
// // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // //               >
// // // // // // //                 <path
// // // // // // //                   fillRule="evenodd"
// // // // // // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // // // // // //                   clipRule="evenodd"
// // // // // // //                 />
// // // // // // //               </svg>
// // // // // // //             ) : (
// // // // // // //               <svg
// // // // // // //                 className="w-6 h-6"
// // // // // // //                 fill="black"
// // // // // // //                 viewBox="0 0 24 24"
// // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // //               >
// // // // // // //                 <path
// // // // // // //                   d="M6 18L18 6M6 6l12 12"
// // // // // // //                   stroke="black"
// // // // // // //                   strokeWidth="2"
// // // // // // //                   strokeLinecap="round"
// // // // // // //                   strokeLinejoin="round"
// // // // // // //                 />
// // // // // // //               </svg>
// // // // // // //             )}
// // // // // // //           </button>

// // // // // // //           {/* Menu */}
// // // // // // //           <div
// // // // // // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // // // // // //               menuVisible
// // // // // // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // // // // // //                 : "hidden lg:block"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // // // // // //               <li>
// // // // // // //                 <a
// // // // // // //                   href="/"
// // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // //                 >
// // // // // // //                   Home
// // // // // // //                 </a>
// // // // // // //               </li>
// // // // // // //               <li>
// // // // // // //                 <a
// // // // // // //                   href="/about"
// // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // //                 >
// // // // // // //                   About us
// // // // // // //                 </a>
// // // // // // //               </li>
// // // // // // //               <li>
// // // // // // //                 <a
// // // // // // //                   href="/pricing"
// // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // //                 >
// // // // // // //                   Pricing
// // // // // // //                 </a>
// // // // // // //               </li>
// // // // // // //               <li>
// // // // // // //                 <a
// // // // // // //                   href="/contact"
// // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // //                 >
// // // // // // //                   Contact us
// // // // // // //                 </a>
// // // // // // //               </li>

// // // // // // //               {/* Blogs Menu Item with Click */}
// // // // // // //               <li className="relative">
// // // // // // //                 <button
// // // // // // //                   onClick={handleBlogsClick}
// // // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // // //                 >
// // // // // // //                   Blogs
// // // // // // //                 </button>
// // // // // // //                 {categoriesVisible && (
// // // // // // //                   <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-48 z-50">
// // // // // // //                     <ul className="space-y-4 p-4 text-sm">
// // // // // // //                       {/* Blog Categories */}
// // // // // // //                       {Object.keys(blogData).map((category) => (
// // // // // // //                         <li key={category}>
// // // // // // //                           <button
// // // // // // //                             onClick={() => handleCategoryClick(category)}
// // // // // // //                             className="hover:text-blue-500"
// // // // // // //                           >
// // // // // // //                             {category.charAt(0).toUpperCase() +
// // // // // // //                               category.slice(1)}
// // // // // // //                           </button>
// // // // // // //                         </li>
// // // // // // //                       ))}
// // // // // // //                     </ul>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </li>
// // // // // // //             </ul>

// // // // // // //             {/* Login & Signup Buttons */}
// // // // // // //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// // // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
// // // // // // //                 Login
// // // // // // //               </button>
// // // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
// // // // // // //                 Sign up
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </header>

// // // // // // //       {/* Category Blog Articles */}
// // // // // // //       {selectedCategory && (
// // // // // // //         <div className="mt-8 p-6 bg-gray-50">
// // // // // // //           <h2 className="text-xl font-semibold">
// // // // // // //             Articles in{" "}
// // // // // // //             {selectedCategory.charAt(0).toUpperCase() +
// // // // // // //               selectedCategory.slice(1)}{" "}
// // // // // // //             Category:
// // // // // // //           </h2>
// // // // // // //           <ul className="mt-4 space-y-4">
// // // // // // //             {blogData[selectedCategory].map((article) => (
// // // // // // //               <li key={article.id}>
// // // // // // //                 <a
// // // // // // //                   href={article.url}
// // // // // // //                   className="text-blue-600 hover:text-blue-800"
// // // // // // //                 >
// // // // // // //                   {article.title}
// // // // // // //                 </a>
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Content Padding */}
// // // // // // //       <div className="pt-[10px]"></div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Headercopy;

// // // // // // "use client";
// // // // // // import { useContext, useEffect, useState } from "react";
// // // // // // import { Context } from "@/Context/Context";
// // // // // // import Image from "next/image";

// // // // // // const Headercopy = () => {
// // // // // //   const [menuVisible, setMenuVisible] = useState(false);
// // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // //   const [categoriesVisible, setCategoriesVisible] = useState(false); // For showing categories
// // // // // //   const [selectedCategory, setSelectedCategory] = useState(null); // To track selected category
// // // // // //   const { user, handleLogout } = useContext(Context);

// // // // // //   // Sample blog categories and articles data
// // // // // //   const blogData = {
// // // // // //     tech: [
// // // // // //       {
// // // // // //         id: 1,
// // // // // //         title: "Latest Tech Trends in 2024",
// // // // // //         url: "/blog/tech/latest-tech-trends",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 2,
// // // // // //         title: "How AI is Changing the World",
// // // // // //         url: "/blog/tech/ai-impact",
// // // // // //       },
// // // // // //     ],
// // // // // //     education: [
// // // // // //       {
// // // // // //         id: 3,
// // // // // //         title: "Top Study Tips for 2024",
// // // // // //         url: "/blog/education/study-tips",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 4,
// // // // // //         title: "How to Choose the Right Online Course",
// // // // // //         url: "/blog/education/choose-course",
// // // // // //       },
// // // // // //     ],
// // // // // //     lifestyle: [
// // // // // //       {
// // // // // //         id: 5,
// // // // // //         title: "Living a Minimalist Lifestyle",
// // // // // //         url: "/blog/lifestyle/minimalism",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 6,
// // // // // //         title: "Healthy Eating Habits for a Better Life",
// // // // // //         url: "/blog/lifestyle/healthy-eating",
// // // // // //       },
// // // // // //     ],
// // // // // //     health: [
// // // // // //       {
// // // // // //         id: 7,
// // // // // //         title: "Mental Health Awareness in 2024",
// // // // // //         url: "/blog/health/mental-health",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 8,
// // // // // //         title: "Physical Fitness Tips for Beginners",
// // // // // //         url: "/blog/health/fitness-tips",
// // // // // //       },
// // // // // //     ],
// // // // // //   };

// // // // // //   const handleToggleMenu = () => {
// // // // // //     setMenuVisible((prevVisible) => !prevVisible);
// // // // // //   };

// // // // // //   const handleCategoryClick = (category) => {
// // // // // //     setSelectedCategory(category);
// // // // // //     setCategoriesVisible(false); // Hide categories once clicked
// // // // // //   };

// // // // // //   const handleBlogsClick = () => {
// // // // // //     setCategoriesVisible((prevVisible) => !prevVisible);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // //     };

// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => {
// // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* Header */}
// // // // // //       <header
// // // // // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // // // // //           isScrolled
// // // // // //             ? "bg-blue/80 shadow-md text-gray-900"
// // // // // //             : "bg-blue/40 text-white"
// // // // // //         }`}
// // // // // //       >
// // // // // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // // // // //           {/* Logo */}
// // // // // //           <a href="/">
// // // // // //             <Image
// // // // // //               src="/images/logo.png"
// // // // // //               alt="Example Image"
// // // // // //               width={120}
// // // // // //               height={50}
// // // // // //               className="w-25"
// // // // // //             />
// // // // // //           </a>

// // // // // //           {/* Mobile Menu Toggle Button */}
// // // // // //           <button
// // // // // //             onClick={handleToggleMenu}
// // // // // //             className="lg:hidden p-2 border rounded-md"
// // // // // //           >
// // // // // //             {!menuVisible ? (
// // // // // //               <svg
// // // // // //                 className="w-6 h-6"
// // // // // //                 fill="black"
// // // // // //                 viewBox="0 0 20 20"
// // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // //               >
// // // // // //                 <path
// // // // // //                   fillRule="evenodd"
// // // // // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // // // // //                   clipRule="evenodd"
// // // // // //                 />
// // // // // //               </svg>
// // // // // //             ) : (
// // // // // //               <svg
// // // // // //                 className="w-6 h-6"
// // // // // //                 fill="black"
// // // // // //                 viewBox="0 0 24 24"
// // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // //               >
// // // // // //                 <path
// // // // // //                   d="M6 18L18 6M6 6l12 12"
// // // // // //                   stroke="black"
// // // // // //                   strokeWidth="2"
// // // // // //                   strokeLinecap="round"
// // // // // //                   strokeLinejoin="round"
// // // // // //                 />
// // // // // //               </svg>
// // // // // //             )}
// // // // // //           </button>

// // // // // //           {/* Menu */}
// // // // // //           <div
// // // // // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // // // // //               menuVisible
// // // // // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // // // // //                 : "hidden lg:block"
// // // // // //             }`}
// // // // // //           >
// // // // // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // // // // //               <li>
// // // // // //                 <a
// // // // // //                   href="/"
// // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // //                 >
// // // // // //                   Home
// // // // // //                 </a>
// // // // // //               </li>
// // // // // //               <li>
// // // // // //                 <a
// // // // // //                   href="/about"
// // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // //                 >
// // // // // //                   About us
// // // // // //                 </a>
// // // // // //               </li>
// // // // // //               <li>
// // // // // //                 <a
// // // // // //                   href="/pricing"
// // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // //                 >
// // // // // //                   Pricing
// // // // // //                 </a>
// // // // // //               </li>
// // // // // //               <li>
// // // // // //                 <a
// // // // // //                   href="/contact"
// // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // //                 >
// // // // // //                   Contact us
// // // // // //                 </a>
// // // // // //               </li>

// // // // // //               {/* Blogs Menu Item with Click */}
// // // // // //               <li className="relative">
// // // // // //                 <button
// // // // // //                   onClick={handleBlogsClick}
// // // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // // //                 >
// // // // // //                   Blogs
// // // // // //                 </button>
// // // // // //                 {categoriesVisible && (
// // // // // //                   <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-48 z-50">
// // // // // //                     <ul className="space-y-4 p-4 text-sm">
// // // // // //                       {/* Blog Categories */}
// // // // // //                       {Object.keys(blogData).map((category) => (
// // // // // //                         <li key={category}>
// // // // // //                           <button
// // // // // //                             onClick={() => handleCategoryClick(category)}
// // // // // //                             className="hover:text-blue-500"
// // // // // //                           >
// // // // // //                             {category.charAt(0).toUpperCase() +
// // // // // //                               category.slice(1)}
// // // // // //                           </button>
// // // // // //                         </li>
// // // // // //                       ))}
// // // // // //                     </ul>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </li>
// // // // // //             </ul>

// // // // // //             {/* Login & Signup Buttons */}
// // // // // //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
// // // // // //                 Login
// // // // // //               </button>
// // // // // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
// // // // // //                 Sign up
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </header>

// // // // // //       {/* Category and Article Section */}
// // // // // //       {selectedCategory && (
// // // // // //         <div className="mt-8 p-6 flex space-x-6">
// // // // // //           {/* Categories Section (left) */}
// // // // // //           <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
// // // // // //             <h3 className="text-lg font-semibold mb-4">Categories</h3>
// // // // // //             <ul className="space-y-4">
// // // // // //               {Object.keys(blogData).map((category) => (
// // // // // //                 <li key={category}>
// // // // // //                   <button
// // // // // //                     onClick={() => handleCategoryClick(category)}
// // // // // //                     className="block text-gray-800 hover:text-blue-500"
// // // // // //                   >
// // // // // //                     {category.charAt(0).toUpperCase() + category.slice(1)}
// // // // // //                   </button>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Articles Section (right) */}
// // // // // //           <div className="w-2/3 bg-white p-4 rounded-lg shadow-md">
// // // // // //             <h3 className="text-lg font-semibold mb-4">
// // // // // //               Articles in{" "}
// // // // // //               {selectedCategory.charAt(0).toUpperCase() +
// // // // // //                 selectedCategory.slice(1)}{" "}
// // // // // //               Category
// // // // // //             </h3>
// // // // // //             <ul className="space-y-4">
// // // // // //               {blogData[selectedCategory].map((article) => (
// // // // // //                 <li key={article.id}>
// // // // // //                   <a
// // // // // //                     href={article.url}
// // // // // //                     className="text-blue-600 hover:text-blue-800"
// // // // // //                   >
// // // // // //                     {article.title}
// // // // // //                   </a>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Content Padding */}
// // // // // //       <div className="pt-[10px]"></div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Headercopy;

// // // // // "use client";
// // // // // import { useContext, useEffect, useState } from "react";
// // // // // import { Context } from "@/Context/Context";
// // // // // import Image from "next/image";

// // // // // const Headercopy = () => {
// // // // //   const [menuVisible, setMenuVisible] = useState(false);
// // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // //   const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
// // // // //   const [selectedCategory, setSelectedCategory] = useState(null); // Selected category state
// // // // //   const { user, handleLogout } = useContext(Context);

// // // // //   // Sample blog categories and articles data
// // // // //   const blogData = {
// // // // //     tech: [
// // // // //       {
// // // // //         id: 1,
// // // // //         title: "Latest Tech Trends in 2024",
// // // // //         url: "/blog/tech/latest-tech-trends",
// // // // //       },
// // // // //       {
// // // // //         id: 2,
// // // // //         title: "How AI is Changing the World",
// // // // //         url: "/blog/tech/ai-impact",
// // // // //       },
// // // // //     ],
// // // // //     education: [
// // // // //       {
// // // // //         id: 3,
// // // // //         title: "Top Study Tips for 2024",
// // // // //         url: "/blog/education/study-tips",
// // // // //       },
// // // // //       {
// // // // //         id: 4,
// // // // //         title: "How to Choose the Right Online Course",
// // // // //         url: "/blog/education/choose-course",
// // // // //       },
// // // // //     ],
// // // // //     lifestyle: [
// // // // //       {
// // // // //         id: 5,
// // // // //         title: "Living a Minimalist Lifestyle",
// // // // //         url: "/blog/lifestyle/minimalism",
// // // // //       },
// // // // //       {
// // // // //         id: 6,
// // // // //         title: "Healthy Eating Habits for a Better Life",
// // // // //         url: "/blog/lifestyle/healthy-eating",
// // // // //       },
// // // // //     ],
// // // // //     health: [
// // // // //       {
// // // // //         id: 7,
// // // // //         title: "Mental Health Awareness in 2024",
// // // // //         url: "/blog/health/mental-health",
// // // // //       },
// // // // //       {
// // // // //         id: 8,
// // // // //         title: "Physical Fitness Tips for Beginners",
// // // // //         url: "/blog/health/fitness-tips",
// // // // //       },
// // // // //     ],
// // // // //   };

// // // // //   const handleToggleMenu = () => {
// // // // //     setMenuVisible((prevVisible) => !prevVisible);
// // // // //   };

// // // // //   const handleBlogsClick = () => {
// // // // //     setModalVisible(true); // Show the modal when Blogs is clicked
// // // // //   };

// // // // //   const handleCategoryClick = (category) => {
// // // // //     setSelectedCategory(category); // Set the selected category
// // // // //   };

// // // // //   const handleCloseModal = () => {
// // // // //     setModalVisible(false); // Close the modal
// // // // //     setSelectedCategory(null); // Reset selected category
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsScrolled(window.scrollY > 50);
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => {
// // // // //       window.removeEventListener("scroll", handleScroll);
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       {/* Header */}
// // // // //       <header
// // // // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // // // //           isScrolled
// // // // //             ? "bg-blue/80 shadow-md text-gray-900"
// // // // //             : "bg-blue/40 text-white"
// // // // //         }`}
// // // // //       >
// // // // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // // // //           {/* Logo */}
// // // // //           <a href="/">
// // // // //             <Image
// // // // //               src="/images/logo.png"
// // // // //               alt="Example Image"
// // // // //               width={120}
// // // // //               height={50}
// // // // //               className="w-25"
// // // // //             />
// // // // //           </a>

// // // // //           {/* Mobile Menu Toggle Button */}
// // // // //           <button
// // // // //             onClick={handleToggleMenu}
// // // // //             className="lg:hidden p-2 border rounded-md"
// // // // //           >
// // // // //             {!menuVisible ? (
// // // // //               <svg
// // // // //                 className="w-6 h-6"
// // // // //                 fill="black"
// // // // //                 viewBox="0 0 20 20"
// // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // //               >
// // // // //                 <path
// // // // //                   fillRule="evenodd"
// // // // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // // // //                   clipRule="evenodd"
// // // // //                 />
// // // // //               </svg>
// // // // //             ) : (
// // // // //               <svg
// // // // //                 className="w-6 h-6"
// // // // //                 fill="black"
// // // // //                 viewBox="0 0 24 24"
// // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // //               >
// // // // //                 <path
// // // // //                   d="M6 18L18 6M6 6l12 12"
// // // // //                   stroke="black"
// // // // //                   strokeWidth="2"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 />
// // // // //               </svg>
// // // // //             )}
// // // // //           </button>

// // // // //           {/* Menu */}
// // // // //           <div
// // // // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // // // //               menuVisible
// // // // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // // // //                 : "hidden lg:block"
// // // // //             }`}
// // // // //           >
// // // // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // // // //               <li>
// // // // //                 <a
// // // // //                   href="/"
// // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // //                 >
// // // // //                   Home
// // // // //                 </a>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <a
// // // // //                   href="/about"
// // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // //                 >
// // // // //                   About us
// // // // //                 </a>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <a
// // // // //                   href="/pricing"
// // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // //                 >
// // // // //                   Pricing
// // // // //                 </a>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <a
// // // // //                   href="/contact"
// // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // //                 >
// // // // //                   Contact us
// // // // //                 </a>
// // // // //               </li>

// // // // //               {/* Blogs Menu Item with Click */}
// // // // //               <li>
// // // // //                 <button
// // // // //                   onClick={handleBlogsClick}
// // // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // // //                 >
// // // // //                   Blogs
// // // // //                 </button>
// // // // //               </li>
// // // // //             </ul>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>

// // // // //       {/* Modal for Categories and Blogs */}
// // // // //       {modalVisible && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // // //           <div className="bg-white p-6 rounded-lg w-4/5 lg:w-3/5 max-w-lg shadow-xl">
// // // // //             <button
// // // // //               onClick={handleCloseModal}
// // // // //               className="absolute top-4 right-4 text-2xl font-bold text-gray-700"
// // // // //             >
// // // // //               &times;
// // // // //             </button>

// // // // //             <div className="flex space-x-6">
// // // // //               {/* Categories Section (left) */}
// // // // //               <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
// // // // //                 <h3 className="text-lg font-semibold mb-4">Categories</h3>
// // // // //                 <ul className="space-y-4">
// // // // //                   {Object.keys(blogData).map((category) => (
// // // // //                     <li key={category}>
// // // // //                       <button
// // // // //                         onClick={() => handleCategoryClick(category)}
// // // // //                         className="block text-gray-800 hover:text-blue-500"
// // // // //                       >
// // // // //                         {category.charAt(0).toUpperCase() + category.slice(1)}
// // // // //                       </button>
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>

// // // // //               {/* Articles Section (right) */}
// // // // //               <div className="w-2/3 bg-white p-4 rounded-lg shadow-md">
// // // // //                 <h3 className="text-lg font-semibold mb-4">
// // // // //                   Articles in{" "}
// // // // //                   {selectedCategory
// // // // //                     ? selectedCategory.charAt(0).toUpperCase() +
// // // // //                       selectedCategory.slice(1)
// // // // //                     : "Category"}
// // // // //                 </h3>
// // // // //                 <ul className="space-y-4">
// // // // //                   {selectedCategory &&
// // // // //                     blogData[selectedCategory]?.map((article) => (
// // // // //                       <li key={article.id}>
// // // // //                         <a
// // // // //                           href={article.url}
// // // // //                           className="text-blue-600 hover:text-blue-800"
// // // // //                         >
// // // // //                           {article.title}
// // // // //                         </a>
// // // // //                       </li>
// // // // //                     ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Content Padding */}
// // // // //       <div className="pt-[10px]"></div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Headercopy;

// // // // "use client";
// // // // import { useContext, useEffect, useState } from "react";
// // // // import { Context } from "@/Context/Context";
// // // // import Image from "next/image";

// // // // const Headercopy = () => {
// // // //   const [menuVisible, setMenuVisible] = useState(false);
// // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // //   const { user, handleLogout } = useContext(Context);

// // // //   // Blog categories and articles
// // // //   const blogData = {
// // // //     tech: [
// // // //       {
// // // //         id: 1,
// // // //         title: "Latest Tech Trends in 2024",
// // // //         url: "/blog/tech/latest-tech-trends",
// // // //       },
// // // //       {
// // // //         id: 2,
// // // //         title: "How AI is Changing the World",
// // // //         url: "/blog/tech/ai-impact",
// // // //       },
// // // //     ],
// // // //     education: [
// // // //       {
// // // //         id: 3,
// // // //         title: "Top Study Tips for 2024",
// // // //         url: "/blog/education/study-tips",
// // // //       },
// // // //       {
// // // //         id: 4,
// // // //         title: "How to Choose the Right Online Course",
// // // //         url: "/blog/education/choose-course",
// // // //       },
// // // //     ],
// // // //     lifestyle: [
// // // //       {
// // // //         id: 5,
// // // //         title: "Living a Minimalist Lifestyle",
// // // //         url: "/blog/lifestyle/minimalism",
// // // //       },
// // // //       {
// // // //         id: 6,
// // // //         title: "Healthy Eating Habits for a Better Life",
// // // //         url: "/blog/lifestyle/healthy-eating",
// // // //       },
// // // //     ],
// // // //     health: [
// // // //       {
// // // //         id: 7,
// // // //         title: "Mental Health Awareness in 2024",
// // // //         url: "/blog/health/mental-health",
// // // //       },
// // // //       {
// // // //         id: 8,
// // // //         title: "Physical Fitness Tips for Beginners",
// // // //         url: "/blog/health/fitness-tips",
// // // //       },
// // // //     ],
// // // //   };

// // // //   const handleToggleMenu = () => {
// // // //     setMenuVisible((prevVisible) => !prevVisible);
// // // //   };

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsScrolled(window.scrollY > 50);
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => {
// // // //       window.removeEventListener("scroll", handleScroll);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       {/* Header */}
// // // //       <header
// // // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // // //           isScrolled
// // // //             ? "bg-blue/80 shadow-md text-gray-900"
// // // //             : "bg-blue/40 text-white"
// // // //         }`}
// // // //       >
// // // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // // //           {/* Logo */}
// // // //           <a href="/">
// // // //             <Image
// // // //               src="/images/logo.png"
// // // //               alt="Example Image"
// // // //               width={120}
// // // //               height={50}
// // // //               className="w-25"
// // // //             />
// // // //           </a>

// // // //           {/* Mobile Menu Toggle Button */}
// // // //           <button
// // // //             onClick={handleToggleMenu}
// // // //             className="lg:hidden p-2 border rounded-md"
// // // //           >
// // // //             {!menuVisible ? (
// // // //               <svg
// // // //                 className="w-6 h-6"
// // // //                 fill="black"
// // // //                 viewBox="0 0 20 20"
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //               >
// // // //                 <path
// // // //                   fillRule="evenodd"
// // // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // // //                   clipRule="evenodd"
// // // //                 />
// // // //               </svg>
// // // //             ) : (
// // // //               <svg
// // // //                 className="w-6 h-6"
// // // //                 fill="black"
// // // //                 viewBox="0 0 24 24"
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //               >
// // // //                 <path
// // // //                   d="M6 18L18 6M6 6l12 12"
// // // //                   stroke="black"
// // // //                   strokeWidth="2"
// // // //                   strokeLinecap="round"
// // // //                   strokeLinejoin="round"
// // // //                 />
// // // //               </svg>
// // // //             )}
// // // //           </button>

// // // //           {/* Menu */}
// // // //           <div
// // // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // // //               menuVisible
// // // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // // //                 : "hidden lg:block"
// // // //             }`}
// // // //           >
// // // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // // //               <li>
// // // //                 <a
// // // //                   href="/"
// // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // //                 >
// // // //                   Home
// // // //                 </a>
// // // //               </li>
// // // //               <li>
// // // //                 <a
// // // //                   href="/about"
// // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // //                 >
// // // //                   About us
// // // //                 </a>
// // // //               </li>
// // // //               <li>
// // // //                 <a
// // // //                   href="/pricing"
// // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // //                 >
// // // //                   Pricing
// // // //                 </a>
// // // //               </li>
// // // //               <li>
// // // //                 <a
// // // //                   href="/contact"
// // // //                   className="block font-semibold text-sm hover:text-blue-500"
// // // //                 >
// // // //                   Contact us
// // // //                 </a>
// // // //               </li>

// // // //               {/* Blogs Dropdown */}
// // // //               <li className="relative group">
// // // //                 <button className="block font-semibold text-sm hover:text-blue-500">
// // // //                   Blogs
// // // //                 </button>
// // // //                 <div className="absolute left-0 hidden bg-white shadow-lg w-[250px] group-hover:block mt-2">
// // // //                   {/* Categories List */}
// // // //                   <ul className="py-2">
// // // //                     {Object.keys(blogData).map((category) => (
// // // //                       <li
// // // //                         key={category}
// // // //                         className="px-4 py-2 hover:bg-gray-100"
// // // //                       >
// // // //                         <button className="text-gray-800">
// // // //                           {category.charAt(0).toUpperCase() + category.slice(1)}
// // // //                         </button>
// // // //                         <div className="mt-2 pl-4">
// // // //                           {/* List of Articles in Category */}
// // // //                           {blogData[category].map((article) => (
// // // //                             <a
// // // //                               key={article.id}
// // // //                               href={article.url}
// // // //                               className="block py-1 text-gray-600 hover:text-blue-500"
// // // //                             >
// // // //                               {article.title}
// // // //                             </a>
// // // //                           ))}
// // // //                         </div>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               </li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       {/* Content Padding */}
// // // //       <div className="pt-[10px]"></div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Headercopy;

// // // "use client";
// // // import { useContext, useEffect, useState } from "react";
// // // import { Context } from "@/Context/Context";
// // // import Image from "next/image";

// // // const Headercopy = () => {
// // //   const [menuVisible, setMenuVisible] = useState(false);
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const { user, handleLogout } = useContext(Context);

// // //   // Blog categories and articles
// // //   const blogData = {
// // //     tech: [
// // //       {
// // //         id: 1,
// // //         title: "Latest Tech Trends in 2024",
// // //         url: "/blog/tech/latest-tech-trends",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "How AI is Changing the World",
// // //         url: "/blog/tech/ai-impact",
// // //       },
// // //     ],
// // //     education: [
// // //       {
// // //         id: 3,
// // //         title: "Top Study Tips for 2024",
// // //         url: "/blog/education/study-tips",
// // //       },
// // //       {
// // //         id: 4,
// // //         title: "How to Choose the Right Online Course",
// // //         url: "/blog/education/choose-course",
// // //       },
// // //     ],
// // //     lifestyle: [
// // //       {
// // //         id: 5,
// // //         title: "Living a Minimalist Lifestyle",
// // //         url: "/blog/lifestyle/minimalism",
// // //       },
// // //       {
// // //         id: 6,
// // //         title: "Healthy Eating Habits for a Better Life",
// // //         url: "/blog/lifestyle/healthy-eating",
// // //       },
// // //     ],
// // //     health: [
// // //       {
// // //         id: 7,
// // //         title: "Mental Health Awareness in 2024",
// // //         url: "/blog/health/mental-health",
// // //       },
// // //       {
// // //         id: 8,
// // //         title: "Physical Fitness Tips for Beginners",
// // //         url: "/blog/health/fitness-tips",
// // //       },
// // //     ],
// // //   };

// // //   const handleToggleMenu = () => {
// // //     setMenuVisible((prevVisible) => !prevVisible);
// // //   };

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 50);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     <>
// // //       {/* Header */}
// // //       <header
// // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // //           isScrolled
// // //             ? "bg-blue/80 shadow-md text-gray-900"
// // //             : "bg-blue/40 text-white"
// // //         }`}
// // //       >
// // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // //           {/* Logo */}
// // //           <a href="/">
// // //             <Image
// // //               src="/images/logo.png"
// // //               alt="Example Image"
// // //               width={120}
// // //               height={50}
// // //               className="w-25"
// // //             />
// // //           </a>

// // //           {/* Mobile Menu Toggle Button */}
// // //           <button
// // //             onClick={handleToggleMenu}
// // //             className="lg:hidden p-2 border rounded-md"
// // //           >
// // //             {!menuVisible ? (
// // //               <svg
// // //                 className="w-6 h-6"
// // //                 fill="black"
// // //                 viewBox="0 0 20 20"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   fillRule="evenodd"
// // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // //                   clipRule="evenodd"
// // //                 />
// // //               </svg>
// // //             ) : (
// // //               <svg
// // //                 className="w-6 h-6"
// // //                 fill="black"
// // //                 viewBox="0 0 24 24"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   d="M6 18L18 6M6 6l12 12"
// // //                   stroke="black"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 />
// // //               </svg>
// // //             )}
// // //           </button>

// // //           {/* Menu */}
// // //           <div
// // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // //               menuVisible
// // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // //                 : "hidden lg:block"
// // //             }`}
// // //           >
// // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // //               <li>
// // //                 <a
// // //                   href="/"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   Home
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/about"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   About us
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/pricing"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   Pricing
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/contact"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   Contact us
// // //                 </a>
// // //               </li>

// // //               {/* Blogs Dropdown */}
// // //               <li className="relative group">
// // //                 <button className="block font-semibold text-sm hover:text-blue-500">
// // //                   Blogs
// // //                 </button>
// // //                 <div className="absolute left-0 hidden bg-white shadow-lg w-[250px] group-hover:block mt-2">
// // //                   {/* Categories List */}
// // //                   <ul className="py-2">
// // //                     {Object.keys(blogData).map((category) => (
// // //                       <li
// // //                         key={category}
// // //                         className="px-4 py-2 hover:bg-gray-100"
// // //                       >
// // //                         <button className="text-gray-800">
// // //                           {category.charAt(0).toUpperCase() + category.slice(1)}
// // //                         </button>
// // //                         <div className="mt-2 pl-4">
// // //                           {/* List of Articles in Category */}
// // //                           {blogData[category].map((article) => (
// // //                             <a
// // //                               key={article.id}
// // //                               href={article.url}
// // //                               className="block py-1 text-gray-600 hover:text-blue-500"
// // //                             >
// // //                               {article.title}
// // //                             </a>
// // //                           ))}
// // //                         </div>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </li>
// // //             </ul>

// // //             {/* Login & Signup Buttons */}
// // //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
// // //                 Login
// // //               </button>
// // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
// // //                 Sign up
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* Content Padding */}
// // //       <div className="pt-[10px]"></div>
// // //     </>
// // //   );
// // // };

// // // export default Headercopy;

// // // "use client";
// // // import { useContext, useEffect, useState } from "react";
// // // import { Context } from "@/Context/Context";
// // // import Image from "next/image";

// // // const Headercopy = () => {
// // //   const [menuVisible, setMenuVisible] = useState(false);
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const { user, handleLogout } = useContext(Context);

// // //   // Blog categories and articles
// // //   const blogData = {
// // //     tech: [
// // //       {
// // //         id: 1,
// // //         title: "Latest Tech Trends in 2024",
// // //         url: "/blog/tech/latest-tech-trends",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "How AI is Changing the World",
// // //         url: "/blog/tech/ai-impact",
// // //       },
// // //     ],
// // //     education: [
// // //       {
// // //         id: 3,
// // //         title: "Top Study Tips for 2024",
// // //         url: "/blog/education/study-tips",
// // //       },
// // //       {
// // //         id: 4,
// // //         title: "How to Choose the Right Online Course",
// // //         url: "/blog/education/choose-course",
// // //       },
// // //     ],
// // //     lifestyle: [
// // //       {
// // //         id: 5,
// // //         title: "Living a Minimalist Lifestyle",
// // //         url: "/blog/lifestyle/minimalism",
// // //       },
// // //       {
// // //         id: 6,
// // //         title: "Healthy Eating Habits for a Better Life",
// // //         url: "/blog/lifestyle/healthy-eating",
// // //       },
// // //     ],
// // //     health: [
// // //       {
// // //         id: 7,
// // //         title: "Mental Health Awareness in 2024",
// // //         url: "/blog/health/mental-health",
// // //       },
// // //       {
// // //         id: 8,
// // //         title: "Physical Fitness Tips for Beginners",
// // //         url: "/blog/health/fitness-tips",
// // //       },
// // //     ],
// // //   };

// // //   const handleToggleMenu = () => {
// // //     setMenuVisible((prevVisible) => !prevVisible);
// // //   };

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 50);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     <>
// // //       {/* Header */}
// // //       <header
// // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
// // //           isScrolled
// // //             ? "bg-blue/80 shadow-md text-gray-900"
// // //             : "bg-blue/40 text-white"
// // //         }`}
// // //       >
// // //         <div className="flex items-center justify-between px-4 sm:px-10 py-4 min-h-[70px]">
// // //           {/* Logo */}
// // //           <a href="/">
// // //             <Image
// // //               src="/images/logo.png"
// // //               alt="Example Image"
// // //               width={120}
// // //               height={50}
// // //               className="w-25"
// // //             />
// // //           </a>

// // //           {/* Mobile Menu Toggle Button */}
// // //           <button
// // //             onClick={handleToggleMenu}
// // //             className="lg:hidden p-2 border rounded-md"
// // //           >
// // //             {!menuVisible ? (
// // //               <svg
// // //                 className="w-6 h-6"
// // //                 fill="black"
// // //                 viewBox="0 0 20 20"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   fillRule="evenodd"
// // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // //                   clipRule="evenodd"
// // //                 />
// // //               </svg>
// // //             ) : (
// // //               <svg
// // //                 className="w-6 h-6"
// // //                 fill="black"
// // //                 viewBox="0 0 24 24"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   d="M6 18L18 6M6 6l12 12"
// // //                   stroke="black"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 />
// // //               </svg>
// // //             )}
// // //           </button>

// // //           {/* Menu */}
// // //           <div
// // //             className={`lg:flex lg:items-center lg:gap-5 ${
// // //               menuVisible
// // //                 ? "block fixed bg-white text-gray-800 w-1/2 min-w-[300px] top-0 left-0 p-6 h-screen shadow-md z-50"
// // //                 : "hidden lg:block"
// // //             }`}
// // //           >
// // //             <ul className="space-y-6 lg:space-y-0 lg:flex lg:gap-x-5 text-gray-800">
// // //               <li>
// // //                 <a
// // //                   href="/"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   Home
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/about"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   About us
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/pricing"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   Pricing
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/contact"
// // //                   className="block font-semibold text-sm hover:text-blue-500"
// // //                 >
// // //                   Contact us
// // //                 </a>
// // //               </li>

// // //               {/* Blogs Dropdown */}
// // //               <li className="relative group">
// // //                 <button className="block font-semibold text-sm hover:text-blue-500">
// // //                   Blogs
// // //                 </button>
// // //                 <div className="absolute left-0 hidden bg-white shadow-lg w-[300px] max-h-[500px] overflow-y-auto group-hover:block mt-2">
// // //                   {/* Categories List */}
// // //                   <ul className="py-2">
// // //                     {Object.keys(blogData).map((category) => (
// // //                       <li
// // //                         key={category}
// // //                         className="px-4 py-2 hover:bg-gray-100"
// // //                       >
// // //                         <button className="text-gray-800">
// // //                           {category.charAt(0).toUpperCase() + category.slice(1)}
// // //                         </button>
// // //                         <div className="mt-2 pl-4">
// // //                           {/* List of Articles in Category */}
// // //                           {blogData[category].map((article) => (
// // //                             <a
// // //                               key={article.id}
// // //                               href={article.url}
// // //                               className="block py-1 text-gray-600 hover:text-blue-500"
// // //                             >
// // //                               {article.title}
// // //                             </a>
// // //                           ))}
// // //                         </div>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </li>
// // //             </ul>

// // //             {/* Login & Signup Buttons */}
// // //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
// // //                 Login
// // //               </button>
// // //               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
// // //                 Sign up
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* Content Padding */}
// // //       <div className="pt-[10px]"></div>
// // //     </>
// // //   );
// // // };

// // // export default Headercopy;

// // "use client";
// // import { useContext, useEffect, useState } from "react";
// // import { Context } from "@/Context/Context";
// // import Image from "next/image";

// // const Headercopy = () => {
// //   const [menuVisible, setMenuVisible] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const { user, handleLogout } = useContext(Context);
// //   const [activeCategory, setActiveCategory] = useState(null); // Store the active category

// //   // Blog categories and articles
// //   const blogData = {
// //     tech: [
// //       {
// //         id: 1,
// //         title: "Latest Tech Trends in 2024",
// //         url: "/blog/tech/latest-tech-trends",
// //       },
// //       {
// //         id: 2,
// //         title: "How AI is Changing the World",
// //         url: "/blog/tech/ai-impact",
// //       },
// //     ],
// //     education: [
// //       {
// //         id: 3,
// //         title: "Top Study Tips for 2024",
// //         url: "/blog/education/study-tips",
// //       },
// //       {
// //         id: 4,
// //         title: "How to Choose the Right Online Course",
// //         url: "/blog/education/choose-course",
// //       },
// //     ],
// //     lifestyle: [
// //       {
// //         id: 5,
// //         title: "Living a Minimalist Lifestyle",
// //         url: "/blog/lifestyle/minimalism",
// //       },
// //       {
// //         id: 6,
// //         title: "Healthy Eating Habits for a Better Life",
// //         url: "/blog/lifestyle/healthy-eating",
// //       },
// //     ],
// //     health: [
// //       {
// //         id: 7,
// //         title: "Mental Health Awareness in 2024",
// //         url: "/blog/health/mental-health",
// //       },
// //       {
// //         id: 8,
// //         title: "Physical Fitness Tips for Beginners",
// //         url: "/blog/health/fitness-tips",
// //       },
// //     ],
// //   };

// //   const handleToggleMenu = () => {
// //     setMenuVisible((prevVisible) => !prevVisible);
// //   };

// //   // Function to toggle the visibility of categories
// //   const toggleCategory = (category) => {
// //     setActiveCategory(activeCategory === category ? null : category);
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

// //               {/* Blogs Dropdown */}
// //               <li className="relative">
// //                 <button
// //                   onClick={() => toggleCategory("blogs")}
// //                   className="block font-semibold text-sm hover:text-blue-500"
// //                 >
// //                   Blogs
// //                 </button>
// //                 <div className="absolute left-0 bg-white shadow-lg w-[300px] max-h-[500px] overflow-y-auto mt-2">
// //                   {/* Categories List */}
// //                   <ul className="py-2">
// //                     {Object.keys(blogData).map((category) => (
// //                       <li
// //                         key={category}
// //                         className="px-4 py-2 hover:bg-gray-100"
// //                       >
// //                         <button
// //                           onClick={() => toggleCategory(category)}
// //                           className="text-gray-800"
// //                         >
// //                           {category.charAt(0).toUpperCase() + category.slice(1)}
// //                         </button>
// //                         {/* Show articles if the category is active */}
// //                         {activeCategory === category && (
// //                           <div className="mt-2 pl-4">
// //                             {blogData[category].map((article) => (
// //                               <a
// //                                 key={article.id}
// //                                 href={article.url}
// //                                 className="block py-1 text-gray-600 hover:text-blue-500"
// //                               >
// //                                 {article.title}
// //                               </a>
// //                             ))}
// //                           </div>
// //                         )}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </li>
// //             </ul>

// //             {/* Login & Signup Buttons */}
// //             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
// //               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
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
// //     </>
// //   );
// // };

// // export default Headercopy;

// "use client";
// import { useContext, useEffect, useState } from "react";
// import { Context } from "@/Context/Context";
// import Image from "next/image";

// const Headercopy = () => {
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { user, handleLogout } = useContext(Context);
//   const [isBlogMenuVisible, setIsBlogMenuVisible] = useState(false); // For toggling the blog menu visibility
//   const [activeCategory, setActiveCategory] = useState(null); // To track which category is active

//   // Blog categories and articles
//   const blogData = {
//     tech: [
//       {
//         id: 1,
//         title: "Latest Tech Trends in 2024",
//         url: "/blog/tech/latest-tech-trends",
//       },
//       {
//         id: 2,
//         title: "How AI is Changing the World",
//         url: "/blog/tech/ai-impact",
//       },
//     ],
//     education: [
//       {
//         id: 3,
//         title: "Top Study Tips for 2024",
//         url: "/blog/education/study-tips",
//       },
//       {
//         id: 4,
//         title: "How to Choose the Right Online Course",
//         url: "/blog/education/choose-course",
//       },
//     ],
//     lifestyle: [
//       {
//         id: 5,
//         title: "Living a Minimalist Lifestyle",
//         url: "/blog/lifestyle/minimalism",
//       },
//       {
//         id: 6,
//         title: "Healthy Eating Habits for a Better Life",
//         url: "/blog/lifestyle/healthy-eating",
//       },
//     ],
//     health: [
//       {
//         id: 7,
//         title: "Mental Health Awareness in 2024",
//         url: "/blog/health/mental-health",
//       },
//       {
//         id: 8,
//         title: "Physical Fitness Tips for Beginners",
//         url: "/blog/health/fitness-tips",
//       },
//     ],
//   };

//   const handleToggleMenu = () => {
//     setMenuVisible((prevVisible) => !prevVisible);
//   };

//   // Function to toggle the blog menu visibility
//   const toggleBlogMenu = () => {
//     setIsBlogMenuVisible((prevState) => !prevState);
//   };

//   // Function to toggle the visibility of a category
//   const toggleCategory = (category) => {
//     setActiveCategory(activeCategory === category ? null : category);
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
//               alt="Example Image"
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

//               {/* Blogs Dropdown */}
//               <li className="relative">
//                 <button
//                   onClick={toggleBlogMenu}
//                   className="block font-semibold text-sm hover:text-blue-500"
//                 >
//                   Blogs
//                 </button>
//                 {/* Display categories if blog menu is visible */}
//                 {isBlogMenuVisible && (
//                   <div className="absolute left-0 bg-white shadow-lg w-[300px] max-h-[500px] overflow-y-auto mt-2">
//                     {/* Categories List */}
//                     <ul className="py-2">
//                       {Object.keys(blogData).map((category) => (
//                         <li
//                           key={category}
//                           className="px-4 py-2 hover:bg-gray-100"
//                         >
//                           <button
//                             onClick={() => toggleCategory(category)}
//                             className="text-gray-800"
//                           >
//                             {category.charAt(0).toUpperCase() +
//                               category.slice(1)}
//                           </button>
//                           {/* Show articles if the category is active */}
//                           {activeCategory === category && (
//                             <div className="mt-2 pl-4">
//                               {blogData[category].map((article) => (
//                                 <a
//                                   key={article.id}
//                                   href={article.url}
//                                   className="block py-1 text-gray-600 hover:text-blue-500"
//                                 >
//                                   {article.title}
//                                 </a>
//                               ))}
//                             </div>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             </ul>

//             {/* Login & Signup Buttons */}
//             <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
//               <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
//                 Login
//               </button>
//               <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Content Padding */}
//       <div className="pt-[10px]"></div>
//     </>
//   );
// };

// export default Headercopy;

"use client";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/Context/Context";
import Image from "next/image";

const Headercopy = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, handleLogout } = useContext(Context);
  const [isBlogMenuVisible, setIsBlogMenuVisible] = useState(false); // For toggling the blog menu visibility
  const [activeCategory, setActiveCategory] = useState(null); // To track which category is active

  // Blog categories and articles
  const blogData = {
    tech: [
      {
        id: 1,
        title: "Latest Tech Trends in 2024",
        url: "/blog/tech/latest-tech-trends",
      },
      {
        id: 2,
        title: "How AI is Changing the World",
        url: "/blog/tech/ai-impact",
      },
    ],
    education: [
      {
        id: 3,
        title: "Top Study Tips for 2024",
        url: "/blog/education/study-tips",
      },
      {
        id: 4,
        title: "How to Choose the Right Online Course",
        url: "/blog/education/choose-course",
      },
    ],
    lifestyle: [
      {
        id: 5,
        title: "Living a Minimalist Lifestyle",
        url: "/blog/lifestyle/minimalism",
      },
      {
        id: 6,
        title: "Healthy Eating Habits for a Better Life",
        url: "/blog/lifestyle/healthy-eating",
      },
    ],
    health: [
      {
        id: 7,
        title: "Mental Health Awareness in 2024",
        url: "/blog/health/mental-health",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
    ],

    health2: [
      {
        id: 7,
        title: "Mental Health Awareness in 2024",
        url: "/blog/health/mental-health",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
    ],

    health3: [
      {
        id: 7,
        title: "Mental Health Awareness in 2024",
        url: "/blog/health/mental-health",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
    ],

    health4: [
      {
        id: 7,
        title: "Mental Health Awareness in 2024",
        url: "/blog/health/mental-health",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
      {
        id: 8,
        title: "Physical Fitness Tips for Beginners",
        url: "/blog/health/fitness-tips",
      },
    ],
  };

  const handleToggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  // Function to toggle the blog menu visibility
  const toggleBlogMenu = () => {
    setIsBlogMenuVisible((prevState) => !prevState);
  };

  // Function to toggle the visibility of a category
  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
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
              alt="Example Image"
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

              {/* Blogs Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleBlogMenu}
                  className="block font-semibold text-sm hover:text-blue-500"
                >
                  Blogs
                </button>
                {isBlogMenuVisible && (
                  <div className="absolute left-0 bg-white shadow-lg w-[300px] max-w-[400px] max-h-[500px] overflow-y-auto mt-2">
                    <ul className="py-2">
                      {Object.keys(blogData).map((category) => (
                        <li
                          key={category}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          <button
                            onClick={() => toggleCategory(category)}
                            className="text-gray-800"
                          >
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </button>
                          {activeCategory === category && (
                            <div className="mt-2 pl-4">
                              {blogData[category].map((article) => (
                                <a
                                  key={article.id}
                                  href={article.url}
                                  className="block py-1 text-gray-600 hover:text-blue-500"
                                >
                                  {article.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
            </ul>

            {/* Login & Signup Buttons */}
            <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4">
              <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
                Login
              </button>
              <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content Padding */}
      <div className="pt-[10px]"></div>
    </>
  );
};

export default Headercopy;
