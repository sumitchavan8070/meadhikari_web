// "use client"; // Mark as client component
// import React, { useState } from "react";
// import Link from "next/link";
// import Headercopy from "@/components/Headercopy";
// import Footer from "@/components/Footer";
// import { blogs, categories } from "./data/blogs";
// import { motion } from "framer-motion";

// const ITEMS_PER_PAGE = 6;

// export default function BlogsPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All Blogs");
//   const [isLoading, setIsLoading] = useState(false); // Loading state
//   const [language, setLanguage] = useState("en"); // Language state (en or mr)

//   // Simulate loading for better UX
//   const simulateLoading = () => {
//     setIsLoading(true);
//     setTimeout(() => setIsLoading(false), 500); // Simulate a 500ms delay
//   };

//   // Filter blogs based on search query and selected category
//   const filteredBlogs = blogs.filter((blog) => {
//     const matchesSearch =
//       blog.title[language].toLowerCase().includes(searchQuery.toLowerCase()) || // Search in selected language title
//       blog.description[language]
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) || // Search in selected language description
//       blog.tags.some((tag) =>
//         tag.toLowerCase().includes(searchQuery.toLowerCase())
//       ); // Search in tags

//     const matchesCategory =
//       selectedCategory === "All Blogs" || blog.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   // Paginate filtered blogs
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const paginatedBlogs = filteredBlogs.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );
//   const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

//   // Handle category change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to the first page
//     simulateLoading(); // Simulate loading
//   };

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1); // Reset to the first page
//     simulateLoading(); // Simulate loading
//   };

//   // Handle language change
//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setCurrentPage(1); // Reset to the first page
//     simulateLoading(); // Simulate loading
//   };

//   return (
//     <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
//       <Headercopy />
//       <section className="bg-gradient-to-b from-[#F7FAFC] to-[#EFF3F6] py-16 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Language Toggle */}
//           <div className="flex justify-end mb-4">
//             <button
//               onClick={() => handleLanguageChange("en")}
//               className={`px-4 py-2 rounded-l-lg ${
//                 language === "en"
//                   ? "bg-[#6D28D9] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               English
//             </button>
//             <button
//               onClick={() => handleLanguageChange("mr")}
//               className={`px-4 py-2 rounded-r-lg ${
//                 language === "mr"
//                   ? "bg-[#6D28D9] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               Marathi
//             </button>
//           </div>

//           <h2 className="text-4xl font-bold text-gray-800 mb-8 font-poppins text-center">
//             {language === "en" ? "Our Blogs" : "आमचे ब्लॉग"}
//           </h2>

//           {/* Search Bar */}
//           <div className="mb-8 max-w-2xl mx-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder={
//                   language === "en" ? "Search blogs..." : "ब्लॉग शोधा..."
//                 }
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
//               />
//               <svg
//                 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Category Filter */}
//           <div className="mb-8 flex flex-wrap justify-center gap-2">
//             <button
//               onClick={() => handleCategoryChange("All Blogs")}
//               className={`px-4 py-2 rounded-full transition-colors ${
//                 selectedCategory === "All Blogs"
//                   ? "bg-[#6D28D9] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
//               }`}
//             >
//               {language === "en" ? "All Blogs" : "सर्व ब्लॉग"}
//             </button>
//             {categories.map((category) => (
//               <button
//                 key={category.slug}
//                 onClick={() => handleCategoryChange(category.name)}
//                 className={`px-4 py-2 rounded-full transition-colors ${
//                   selectedCategory === category.name
//                     ? "bg-[#6D28D9] text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Loading State */}
//           {isLoading && (
//             <div className="flex justify-center items-center my-8">
//               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#6D28D9]"></div>
//             </div>
//           )}

//           {/* Blog Grid */}
//           {!isLoading && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {paginatedBlogs.map((blog) => (
//                 <motion.div
//                   key={blog.id}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl"
//                 >
//                   <img
//                     src={blog.image}
//                     alt={blog.title[language]} // Use selected language title as alt text
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-2xl font-semibold text-[#1F2937] mb-4 font-poppins">
//                       {blog.title[language]}{" "}
//                       {/* Display selected language title */}
//                     </h3>
//                     <p className="text-[#4B5563] mb-4">
//                       {blog.description[language]}{" "}
//                       {/* Display selected language description */}
//                     </p>
//                     <div className="flex items-center text-sm text-[#6B7280] mb-4">
//                       <span>{blog.category}</span>
//                       <span className="mx-2">•</span>
//                       <span>{blog.readingTime} read</span>
//                     </div>
//                     <Link
//                       href={{
//                         pathname: `/blogs/${blog.slug}`,
//                         query: { lang: language },
//                       }}
//                       className="text-[#6D28D9] font-semibold hover:underline"
//                     >
//                       {language === "en" ? "Read More →" : "अधिक वाचा →"}
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {!isLoading && (
//             <div className="flex justify-center mt-8">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i + 1}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`mx-1 px-4 py-2 rounded-full transition-colors ${
//                     currentPage === i + 1
//                       ? "bg-[#6D28D9] text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//       <section className="bg-[#F9FAFC]">
//         <Footer />
//       </section>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";
import Sidebar from "../paper-landing/components/Sidebar";

const ITEMS_PER_PAGE = 6;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/blogs/blog-data`);
        setCategories(response.data.categories);
        setBlogs(response.data.blogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Simulate loading for better UX
  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500); // Simulate a 500ms delay
  };

  // Filter blogs based on search query and selected category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description[language]
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All Blogs" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Paginate filtered blogs
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page
    simulateLoading(); // Simulate loading
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page
    simulateLoading(); // Simulate loading
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCurrentPage(1); // Reset to the first page
    simulateLoading(); // Simulate loading
  };

  if (error) {
    return (
      <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
        <Headercopy />

        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Error</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-block bg-[#6D28D9] text-white px-6 py-3 rounded-lg hover:bg-[#5B21B6] transition"
            >
              Retry
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <section className="bg-gradient-to-b from-[#F7FAFC] to-[#EFF3F6] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-4 py-2 rounded-l-lg ${
                language === "en"
                  ? "bg-[#6D28D9] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("mr")}
              className={`px-4 py-2 rounded-r-lg ${
                language === "mr"
                  ? "bg-[#6D28D9] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Marathi
            </button>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-8 font-poppins text-center">
            {language === "en" ? "Our Blogs" : "आमचे ब्लॉग"}
          </h2>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={
                  language === "en" ? "Search blogs..." : "ब्लॉग शोधा..."
                }
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => handleCategoryChange("All Blogs")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "All Blogs"
                  ? "bg-[#6D28D9] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
              }`}
            >
              {language === "en" ? "All Blogs" : "सर्व ब्लॉग"}
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.name
                    ? "bg-[#6D28D9] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center my-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#6D28D9]"></div>
            </div>
          )}

          {/* Blog Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl"
                >
                  <img
                    src={blog.image}
                    alt={blog.title[language]}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#1F2937] mb-4 font-poppins">
                      {blog.title[language]}
                    </h3>
                    <p className="text-[#4B5563] mb-4">
                      {blog.description[language]}
                    </p>
                    <div className="flex items-center text-sm text-[#6B7280] mb-4">
                      <span>{blog.category}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readingTime} read</span>
                    </div>
                    <Link
                      href={{
                        pathname: `/blogs/${blog.slug}`,
                        query: { lang: language },
                      }}
                      className="text-[#6D28D9] font-semibold hover:underline"
                    >
                      {language === "en" ? "Read More →" : "अधिक वाचा →"}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!isLoading && (
            <div className="flex justify-center mt-8">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`mx-1 px-4 py-2 rounded-full transition-colors ${
                    currentPage === i + 1
                      ? "bg-[#6D28D9] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#F9FAFC]">
        <Footer />
      </section>
    </div>
  );
}
